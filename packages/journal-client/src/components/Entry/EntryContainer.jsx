import React from 'react';
import { Entry } from './Entry'

export class EntryContainer extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmitBound = this.handleSubmit.bind(this);
    }

    handleSubmit (entry) {
       console.log(entry);
    }

    render () {
        return <Entry submit={this.handleSubmitBound}/>;
    }
}
