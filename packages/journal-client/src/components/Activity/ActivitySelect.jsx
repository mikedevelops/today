import React from 'react';
import Fuzzy from 'fuzzy-search';
import emoji from 'emoji-toolkit';
import { NewActivity } from './NewActivity';

export class ActivitySelect extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      results: [],
      selected: props.entry !== null ? props.entry.activities : [],
      addActivity: false,
    };
  }

  search (event) {
    if (event.target.value.trim() === '') {
      return this.setState(state => ({ results: [] }));
    }

    const fuzzy = new Fuzzy(this.props.activities.toArray(), ['type', 'icon'], { sort: true });
    const results = fuzzy.search(event.target.value);

    this.setState(state => ({ results }));
  }

  handleSelection (type, event) {
    event.preventDefault();

    const activity = this.props.activities.find(activity => activity.type === type);
    const newActivities = [...this.props.entry.activities, activity];

    this.update(newActivities);
  }

  handleDeselection (type, event) {
    event.preventDefault();
    this.update(this.props.entry.activities.filter(selection => selection.type !== type));
  }

  update (selected) {
    this.props.update(selected);
  }

  handleAddActivity (event) {
    event.preventDefault();
    this.setState(state => ({ addActivity: true }));
  }

  render () {
    return (
      <div>
        <select
          readOnly={true}
          multiple={true}
          style={{ display: 'none' }}
          value={this.props.entry !== null ? this.props.entry.activities.map(a => a.type) : []}
        >
          { this.props.activities.map(activity =>
            <option key={activity.type}>
              { activity.type }
            </option>) }
        </select>
        <input onInput={this.search.bind(this)}/>
        <ol className="selections">
          { this.props.entry !== null && this.props.entry.activities.map(selected =>
            <li key={selected.type}>
              <button onClick={this.handleDeselection.bind(this, selected.type)}>
                { emoji.shortnameToUnicode(selected.icon) }{selected.name} X
              </button>
            </li>
          )}
        </ol>
        <ol id="search_results">
          { this.state.addActivity && <NewActivity/> }

          { this.state.results.map(result =>
            <li key={result.type}>
              <button
                disabled={this.props.entry !== null ? this.props.entry.activities.find(a => a.type === result.type) : false}
                onClick={this.handleSelection.bind(this, result.type)}
              >
                { emoji.shortnameToUnicode(result.icon) }{ result.name }
              </button>
            </li>) }
        </ol>
      </div>
    )
  }
}
