import React from 'react';
import entryFactory from '../../factories/entryFactory';
import { ComposeEntry } from './ComposeEntry';
import Activity from '../Activity/Activity';

export default class Today extends React.Component {
    constructor (props) {
        super(props);

        this.submitEntryBound = this.submitEntry.bind(this);
        this.entry = props.entry !== undefined ?
            props.entry :
            entryFactory(null, props.date, '', props.user.getActivities());
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
        this.props.submit(entry, this.props.user.getToken());
    }

    buildActivities () {
        return this.props.user.getActivities().map(activity => {
            const key = activity.getId() !== undefined ? activity.getId() : 'today_activity';
            return <Activity
                key={key}
                activity={activity}
                user={this.props.user}
                entry={this.entry}
                submit={this.submitEntryBound}
            />;
        });
    }

    render () {
        return (
            <div>
                <ComposeEntry
                    user={this.props.user}
                    entry={this.entry}
                    submit={this.submitEntryBound}
                    handleInput={this.handleInput.bind(this)}
                />
            </div>
        );
    }
}
