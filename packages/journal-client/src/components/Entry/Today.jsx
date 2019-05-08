import React from 'react';
import entryFactory from '../../factories/entryFactory';
import { ComposeEntry } from './ComposeEntry';

export default class TodayWrapper extends React.Component {
    constructor (props) {
        super(props);

        this.todaysEntry = props.entry !== undefined ? props.entry : entryFactory(props.date);
        this.state = {
            content: this.todaysEntry.getContents()
        };
    }

    handleInput (content) {
        this.setState({ content });
    }

    render () {
        return <ComposeEntry
            entry={this.todaysEntry}
            submit={this.props.submit}
            handleInput={this.handleInput.bind(this)}
        />;
    }
}
