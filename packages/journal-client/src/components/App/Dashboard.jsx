import React from 'react';
import { EntryList } from '../Entry/EntryList';
import moment from 'moment';
import { NewEntryDraft } from '../Entry/NewEntryDraft';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.today = moment().startOf('day');
  }

  componentDidMount() {
    this.props.hydrate(this.props.token);
  }

  handleSaveEntry (entry) {
    this.props.saveEntry(entry, this.props.token);
  }

  render () {
    const today = this.props.entries.find(entry =>
      entry.createdAt.isSame(this.today, 'day'));
    const entriesExcludingToday = this.props.entries
      .filter(entry => today === undefined || entry.id !== today.id);

    return (
      <div className="dashboard">
        <div className="main">
          <EntryList entries={entriesExcludingToday}>
            {/*<NewEntryDraft*/}
            {/*  entry={today || null}*/}
            {/*  saveEntry={this.handleSaveEntry.bind(this)}*/}
            {/*/>*/}
          </EntryList>
        </div>
      </div>
    );
  }
}
