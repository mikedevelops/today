import React from 'react';
import entryFactory from '../../factories/entryFactory';
import { ComposeEntry } from './ComposeEntry';

export default class TodayWrapper extends React.Component {
    constructor (props) {
        super(props);

        this.submitEntryBound = this.submitEntry.bind(this);
        this.entry = props.entry !== undefined ? props.entry : entryFactory(props.date);
        this.state = {
            content: this.entry.getContent()
        };

    }

    componentWillUpdate (nextProps) {
        if (nextProps.entry !== undefined) {
            this.entry = nextProps.entry;
        }
    }

    handleInput (content) {
        this.setState({ content });
    }

    submitEntry (entry) {
        this.props.submit(entry, this.props.user.token);
    }

    render () {
        return <ComposeEntry
            entry={this.entry}
            submit={this.submitEntryBound}
            handleInput={this.handleInput.bind(this)}
        />;
    }
}
