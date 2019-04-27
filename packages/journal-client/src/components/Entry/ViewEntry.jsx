import React from 'react';

/**
 * @param {Entry} entry
 * @returns {React.Element}
 * @constructor
 */
export const ViewEntry = ({ entry }) => {
    return (
        <div className="entry-view">
            <span>{ entry.getContents() }</span>
        </div>
    );
};
