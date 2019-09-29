import React from 'react';
import Fuzzy from 'fuzzy-search';
import emoji from 'emoji-toolkit';
import { EnhancedSelectedItem } from './EnhancedSelectedItem';
import { EnhancedSelectOption } from './EnhancedSelectOption';

export class EnhancedSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selected: props.selected,
      compose: false,
    };

    this.containerRef = React.createRef();
    this.handleClickBound = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickBound);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickBound);
  }

  handleClick (event) {
    if (this.state.results.length && !this.containerRef.current.contains(event.target)) {
      this.hideOptions();
    }
  }

  search(event) {
    if (event.target.value.trim() === '') {
      return this.setState(() => ({ results: [] }));
    }

    const { options, searchableProps } = this.props;
    const fuzzy = new Fuzzy(options, searchableProps, { sort: true });
    const results = fuzzy.search(event.target.value);

    this.setState(state => ({ results, compose: results.length === 0 }));
  }

  handleSelection(name, event) {
    event.preventDefault();

    const { options, selected } = this.props;

    if (selected.find(option => option.name === name) !== undefined) {
      return;
    }

    const newOptions = [...selected, options.find(option => option.name === name)];

    this.update(newOptions);
  }

  handleDeselection(name, event) {
    event.preventDefault();

    const { selected } = this.props;

    this.update(selected.filter(selection => selection.name !== name));
  }

  update(selected) {
    const { update } = this.props;
    update(selected);
  }

  handleNewOption(event) {
    if (event.keyCode !== 13) {
      return;
    }

    const { update, selected } = this.props;
    const value = event.target.value.trim().toLocaleLowerCase();

    if (this.state.results.length) {
      if (this.state.results.find(result => result.name === value)) {
        return;
      }
    }

    const fuzzy = new Fuzzy(Object.keys(emoji.emojiList), [], { sort: true });
    const results = fuzzy.search(value);
    const option = {
      name: null,
      label: value,
      icon: results[0] || ':question:'
    };

    event.target.value = '';
    update([...selected, option]);
  }

  handleShowOptions(event) {
    if (event.target.value !== '') {
      this.search(event);
      return;
    }

    this.setState(state => ({
      results: this.props.options
    }));
  }

  hideOptions() {
    this.setState(() => ({
      results: []
    }));
  }

  render () {
    const { selected, options } = this.props;
    return (
      <div ref={this.containerRef}>
        <select
          readOnly={true}
          multiple={true}
          style={{ display: 'none' }}
          value={selected.map(option => option.name)}
        >
          { options.map(option =>
            <option key={option.name}>
              { option.label }
            </option>
          ) }
        </select>
        <ol className="selected-list">
          { selected.map(option =>
            <li className="selected-list__item" key={option.name}>
              <EnhancedSelectedItem
                click={this.handleDeselection.bind(this, option.name)}
                icon={emoji.shortnameToUnicode(option.icon)}
                name={option.label}
              />
            </li>
          )}
          <li className="selected-list__item" key="new activity">
            <input
              placeholder="Add an activity"
              className="enhanced-select__input enhanced-button"
              onClick={this.handleShowOptions.bind(this)}
              onKeyDown={this.handleNewOption.bind(this)}
              onInput={this.search.bind(this)}
            />
          </li>
        </ol>
        <ol className="enhanced-select__results">
          { this.state.results.map(result =>
            <li className="enhanced-select__result-item" key={result.name}>
              <EnhancedSelectOption
                click={this.handleSelection.bind(this, result.name)}
                disabled={selected.find(option => option.name === result.name) || false}
                icon={emoji.shortnameToUnicode(result.icon)}
                label={result.label}
              />
            </li>
          )}
        </ol>
      </div>
    );
  }
}
