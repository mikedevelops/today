import React from 'react';

export class Contents extends React.Component {
    render () {
        return (
            <div className="entry-contents">
                <p>{ this.props.content }</p>
            </div>
        );
    }
}
