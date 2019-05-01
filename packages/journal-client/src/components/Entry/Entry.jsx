import React from 'react';

/**
 * @param {Entry} entry
 * @param {React.Element[]} children
 * @returns {React.Element}
 */
export default ({ entry, View }) => {
    return (
        <div className="entry">
            <h2>{ entry.date.format('Do MMMM YYYY') }</h2>
            <View entry={entry}/>
        </div>
    )
};
