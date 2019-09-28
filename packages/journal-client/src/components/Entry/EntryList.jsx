import React from 'react';
import EntryViewContainer from './EntryViewContainer';
import { sortByDateAsc } from '../../utilities/date';

export const EntryList = ({ entries, children }) => {
  return (
    <ol className="entry-list">
      { children !== undefined &&
        React.Children.map(children, child => <li className="entry-list__item">{ child }</li> )
      }
      { entries.sort(sortByDateAsc).map(entry =>
        <li className="entry-list__item" key={entry.id}>
          <EntryViewContainer entry={entry}/>
        </li>
      )}
    </ol>
  )
};
