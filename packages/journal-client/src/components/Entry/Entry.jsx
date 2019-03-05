import React from 'react';

export const Entry = ({ submit }) => {
    const handleSubmit = event => {
        const data = new FormData(event.target);

        event.preventDefault();
        submit(data.get('entry'));
    };

    return (
        <div className="entry">
            <form onSubmit={handleSubmit}>
                <textarea name="entry"/>
                <button>Submit</button>
            </form>
        </div>
    )
};
