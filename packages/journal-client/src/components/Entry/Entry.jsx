import React from 'react';
import { EditEntry } from './EditEntry'
import entryFactory from '../../factories/entryFactory';

export default ({ submit}) => {
    const handleSubmit = event => {
        const data = new FormData(event.target);

        event.preventDefault();
        submit(entryFactory(new Date(), data.get('entry')));
    };

    return (
        <div className="entry">
            <EditEntry submit={handleSubmit} entry={''}/>
        </div>
    )
};
