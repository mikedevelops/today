import React from 'react';
import { EditEntry } from './EditEntry'
import { ViewEntry } from './ViewEntry'

export const Entry = ({ submit, edit, editMode, entry }) => {
    const handleSubmit = event => {
        const data = new FormData(event.target);

        event.preventDefault();
        submit(data.get('entry'));
    };

    const handleEdit = event => {
        event.preventDefault();
        edit();
    }

    return (
        <div className="entry">
            { !editMode && <button onClick={handleEdit} className="entry__edit">Edit</button> }

            { editMode ?
                <EditEntry submit={handleSubmit} entry={entry}/> :
                <ViewEntry entry={entry}/>
            }
        </div>
    )
};
