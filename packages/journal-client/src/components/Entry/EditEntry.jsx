import React from 'react';

export const EditEntry = ({ submit, entry }) => {
    return (
        <form onSubmit={submit}>
            <textarea name="entry" defaultValue={''}/>
            <button>Submit</button>
        </form>
    );
};
