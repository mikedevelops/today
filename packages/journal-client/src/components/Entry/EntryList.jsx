import React from 'react';
import { EntryView } from './EntryView';

export const EntryList = ({ entries }) => {
  return (
    <ol className="entry-list">
      { entries.map(entry =>
        <li key={entry.id}><EntryView entry={entry}/></li>
      )}
    </ol>
  )
};
