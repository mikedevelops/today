import emoji from 'emoji-toolkit';
import React from 'react';
import debounce from 'lodash.debounce';
import Fuzzy from 'fuzzy-search';

export class NewActivity extends React.Component {
  constructor (props) {
    super(props);
    this.fuzzy = new Fuzzy(Object.keys(emoji.emojiList), [], { sort: true });
    this.state = {
      results: []
    };
  }

  search (event) {
    event.persist();
    this.setState(state => ({
      results: this.fuzzy.search(event.target.value).slice(0, 5)
    }));
  }

  render () {
    return (
      <form>
        <input id="search_emoji" onInput={this.search.bind(this)}/>
        <ol>
        { this.state.results.length > 0 &&
          this.state.results.map(result => <li>{ emoji.shortnameToUnicode(result) }</li>)
        }
        </ol>
      </form>
    );
  }
}
