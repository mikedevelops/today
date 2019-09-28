import React from 'react';
import { EntryView } from './EntryView';
import { sortByDateAsc } from '../../utilities/date';

export const EntryList = ({ entries, children }) => {
  return (
    <ol className="entry-list">
      { children !== undefined &&
        React.Children.map(children, child => <li className="entry-list__item">{ child }</li> )
      }
      { entries.sort(sortByDateAsc).map(entry =>
        <li className="entry-list__item" key={entry.id}><EntryView entry={entry}/></li>
      )}
    </ol>
  )
};
