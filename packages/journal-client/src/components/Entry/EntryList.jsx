import React from 'react';
import { EntryView } from './EntryView';
import { sortByDateAsc } from '../../utilities/date';

export const EntryList = ({ entries }) => {
  return (
    <ol className="entry-list">
      { entries.sort(sortByDateAsc).map(entry =>
        <li key={entry.id}><EntryView entry={entry}/></li>
      )}
    </ol>
  )
};
