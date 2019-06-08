import React from 'react';
import Text from '../Form/Text';
import Activity from '../Activity/Activity';

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
        return (
            <div className="entry">
                <h2>{ this.props.entry.date.format('Do MMMM YYYY') }</h2>
                <div className="entry-view">
                    <form ref={this.form}>
                        <Text
                            value={this.props.entry.getContent()}
                            readonly={this.props.readonly}
                            onBlur={this.submitBound}
                        />

                        { this.props.entry.getActivities().map(activity =>
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
