import React from 'react';
import { ViewEntry } from './ViewEntry';

/**
 * @param {Entry} entry
 * @returns {React.Element}
 */
export default ({ entry }) => {
    return (
        <div className="entry">
            <h2>{ entry.date.format('Do MMMM YYYY') }</h2>
            <ViewEntry entry={entry}/>
        </div>
    )
};
