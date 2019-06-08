import React from 'react';
import moment from 'moment';
import { Redirect, Route } from 'react-router';
import { hasEntry } from '../../utilities/entry';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div className="dashboard">
                <div className="main">
                    <Route path="/entry/:date" component={(props) => {
                        const date = moment(props.match.params.date, 'DD-MM-YYYY');
                        const id = date.unix();
                        const isToday = date.isSame(this.props.today);

                        if (isToday || !hasEntry(id, this.props.entries)) {
                            return <Redirect to="/"/>;
                        }

                        return <EntryContainer entry={this.props.entries[id]}/>
                    }}/>

                    <Route exact={true} path="/" component={(props) => {
                        return <EntryContainer entry={this.props.entries[this.props.today.unix()]}/>
                    }}/>
                </div>

                <div className="sidebar">
                    { this.props.user !== null && <Route path="/" component={CalendarContainer}/> }
                </div>
            </div>
        );
    }
}
