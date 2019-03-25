import React from 'react';

/**
 * @param {function} submit
 * @param {Entry} entry
 * @returns {React.Element}
 */
export const EditEntry = ({ submit, entry }) => {
    return (
        <form onSubmit={submit}>
            <textarea name="entry" defaultValue={entry === undefined ? '' : entry.getContents()}/>
            <button>Submit</button>
        </form>
    );
};
