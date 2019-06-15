import React from 'react';
import { Route } from 'react-router';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';

export default class Dashboard extends React.Component {
    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.location !== this.props.location) {
            this.props.resetReadonly();
        }
    }

    render () {
        return (
            <div className="dashboard">
                <div className="main">
                    <EntryContainer entry={this.props.entry}/>
                </div>
                <div className="sidebar">
                    { this.props.user !== null && <Route path="/" component={CalendarContainer}/> }
                </div>
            </div>
        );
    }
}
