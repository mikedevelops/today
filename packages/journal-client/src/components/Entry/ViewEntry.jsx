import React from 'react';

/**
 * @param {Entry} entry
 * @param {function} handleEdit
 * @returns {React.Element}
 * @constructor
 */
export const ViewEntry = ({ entry, handleEdit }) => {
    return (
        <div className="entry-view">
            <pre>{ entry.getContents() }</pre>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};
