import React from 'react';
import { EditEntry } from './EditEntry'
import entryFactory from '../../factories/entryFactory';
import { ViewEntry } from './ViewEntry'

/**
 * @param {function} handleSubmit
 * @param {bool} edit
 * @param {Entry} entry
 * @param {function} handleEdit
 * @returns {React.Element}
 */
export default ({ handleSubmit, edit, entry, handleEdit }) => {
    const onSubmit = event => {
        const data = new FormData(event.target);

        event.preventDefault();
        handleSubmit(entryFactory(new Date(), data.get('entry')));
    };

    return (
        <div className="entry">
            { edit ?
                <EditEntry submit={onSubmit} entry={entry}/> :
                <ViewEntry handleEdit={handleEdit} entry={entry}/>
            }
        </div>
    )
};
