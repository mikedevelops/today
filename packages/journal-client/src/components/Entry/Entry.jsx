import React from 'react';
import EntryTools from './EntryToolsContainer';
import TextArea from '../Form/Text';
import Activity from '../Activity/ActivityContainer';

export default class Entry extends React.Component {
    constructor(props) {
        super(props);

        this.form = React.createRef();
        this.submitBound = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.hydrateActivities(this.props.user.token);
    }

    componentWillUpdate (nextProps, nextState, nextContext) {
        nextProps.activities.forEach(activity => {
            if (nextProps.entry.hasActivity(activity)) {
                activity.setValue(activity.getValue());
                return;
            }

            nextProps.entry.addActivity(activity);
        });
    }

    submit(event = null) {
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

    render() {
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

                        {
                            this.props.entry.getLastUpdated() !== null &&
                                <pre>{ this.props.entry.getLastUpdated().local().format() }</pre>
                        }

                        {
                            this.props.entry.getActivities().map(activity =>
                                <Activity
                                    key={activity.name}
                                    readonly={this.props.readonly}
                                    submit={this.submitBound}
                                    activity={activity}
                                />)
                        }
                    </form>
                </div>
            </div>
        )
    }
}
