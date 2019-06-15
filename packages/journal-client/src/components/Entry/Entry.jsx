import React from 'react';
import Activity from '../Activity/Activity';
import EntryTools from './EntryToolsContainer';
import TextArea from '../Form/Text';

export default class Entry extends React.Component {
    constructor (props) {
        super(props);

        this.form = React.createRef();
        this.submitBound = this.submit.bind(this);
    }

    submit (event = null) {
        // We should never be able to modify an entry if it is readonly
        if (this.props.readonly) {
            return;
        }

        const data = new FormData(this.form.current);

        if (event !== null) {
            event.preventDefault();
        }

        this.props.entry.setContent(data.get('entry_content'));

        if (!this.props.entry.isDirty()) {
            return;
        }

        this.props.submit(this.props.entry, this.props.user.getToken());
        this.props.entry.clean();
    }

    render () {
        const mergedActivities = [...this.props.user.getActivities(), ...this.props.entry.getActivities()];
        const uniqueActivities = mergedActivities.reduce((unique, activity) => {
            if (unique.length === 0) {
                return [activity];
            }

            const existing = unique.find(a => a.isSame(activity));

            if (existing !== undefined) {
                return unique;
            }

            return [...unique, activity];
        }, []);

        // TODO: fix entry text area problem...
        return (
            <div className="entry">
                <EntryTools entry={this.props.entry}/>
                <button disabled={!this.props.readonly} onClick={this.props.toggleReadonly}>Edit</button>
                <div className="entry-view">
                    <form ref={this.form}>
                        <TextArea
                            value={this.props.entry.getContent()}
                            readonly={this.props.readonly}
                            onBlur={this.submitBound}
                            save={this.submitBound}
                        />

                        { this.props.entry.getLastUpdated() !== null &&
                            <pre>{ this.props.entry.getLastUpdated().local().format() }</pre>
                        }

                        { uniqueActivities.map(activity =>
                            <Activity
                                key={activity.getName()}
                                readonly={this.props.readonly}
                                submit={this.submitBound}
                                activity={activity}
                            />) }
                    </form>
                </div>
            </div>
        )
    }
}
