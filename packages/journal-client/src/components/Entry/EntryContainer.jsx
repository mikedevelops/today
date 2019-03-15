import React from 'react';
import { Entry } from './Entry'

export class EntryContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            editMode: true,
            entry: []
        };

        this.handleSubmitBound = this.handleSubmit.bind(this);
        this.handleEditBound = this.handleEdit.bind(this);
    }

    handleSubmit (entry) {
        this.setState({
            entry: entry.split('\n'),
            editMode: false
        });
    }


    handleEdit () {
        this.setState(state => ({
            editMode: !state.editMode
        }));
    }

    render () {
        return <Entry
            edit={this.handleEditBound}
            submit={this.handleSubmitBound}
            entry={this.state.entry}
            editMode={this.state.editMode}
        />;
    }
}
