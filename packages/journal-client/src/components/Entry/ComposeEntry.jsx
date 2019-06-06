import React from 'react';
import Entry from './Entry';
import ActivityContainer from '../../components/Activity/ActivityContainer';

export class ComposeEntry extends React.Component {
    constructor (props) {
        super(props);

        this.form = React.createRef();
        this.content = React.createRef();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        this.content.current.focus();
    }

    submitEntry (event = null) {
        const data = new FormData(this.form.current);

        if (event !== null) {
            event.preventDefault();
        }

        // Do not submit if nothing has changed
        // TODO: implement dirty property on entry
        // if (data.get('content') === this.props.entry.getContent()) {
        //     return;
        // }

        this.props.entry.setContent(data.get('content'));
        this.props.submit(this.props.entry);
    }

    autosave () {
        this.submitEntry();
    }

    render () {
        const compose = () => {
            return (
                <div className="compose">
                    <form
                        ref={this.form}
                        onSubmit={this.submitEntry.bind(this)}>
                        <div className="entry-view">
                            <textarea
                                className="compose__entry-input"
                                ref={this.content}
                                onBlur={this.submitEntry.bind(this)}
                                name="content"
                                defaultValue={this.props.entry.getContent()}/>
                        </div>
                        { this.props.entry.getActivities().map(activity =>
                            <ActivityContainer
                                key={activity.getId()}
                                activity={activity}
                                submit={this.submitEntry.bind(this)}
                            />) }
                    </form>
                </div>
            );
        };

        return <Entry entry={this.props.entry} View={compose}/>
    };
}
