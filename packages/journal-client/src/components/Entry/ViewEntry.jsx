import React from 'react';

export const ViewEntry = ({ entry }) => {
    return (
        <div className="entry-view">
            { entry.map((e, i) => <p className="entry-view__paragraph" key={i}>{ e }</p>) }
        </div>
    )
};
