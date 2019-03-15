import React from 'react';

export const EditEntry = ({ submit, entry }) => {
    return (
        <form onSubmit={submit}>
            <textarea name="entry" defaultValue={entry.join('\n')}/>
            <button>Submit</button>
        </form>
    );
};
