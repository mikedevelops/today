import React from 'react';
import moment from 'moment';
import { Redirect, Route } from 'react-router';
import { hasEntry } from '../../utilities/entry';
import EntryContainer from '../Entry/EntryContainer';
import TodayContainer from '../Entry/TodayContainer';
import CalendarContainer from '../Calendar/CalendarContainer';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div className="dashboard">
                <div className="main">
                    <Route path="/entry/:date" component={(props) => {
                        const date = moment(props.match.params.date, 'DD-MM-YYYY');
                        const id = date.unix();

                        if (date.isSame(this.props.today) || !hasEntry(id, this.props.entries)) {
                            return <Redirect to="/"/>;
                        }

                        return <EntryContainer date={date}/>
                    }}/>

                    <Route exact={true} path="/" component={TodayContainer}/>
                </div>

                <div className="sidebar">
                    { this.props.user !== null && <Route path="/" component={CalendarContainer}/> }
                </div>
            </div>
        );
    }
}
