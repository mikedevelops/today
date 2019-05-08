import React from 'react';
import { Redirect, Route } from 'react-router';
import moment from './App';
import { hasEntry } from '../../utilities/entry';
import EntryContainer from '../Entry/EntryContainer';
import TodayContainer from '../Entry/TodayContainer';
import CalendarContainer from '../Calendar/CalendarContainer';

export default () => {
    return (
        <div className="dashboard">
            <div className="main">
                <Route path="/entry/:date" component={(props) => {
                    const date = moment(props.match.params.date, 'DD-MM-YYYY');
                    const id = date.unix();

                    if (date.isSame(today) || !hasEntry(id, entries)) {
                        return <Redirect to="/"/>;
                    }

                    return <EntryContainer date={date}/>
                }}/>

                <Route exact={true} path="/" component={TodayContainer}/>
            </div>

            <Route path="/" exact={true} component={() => {
                return <div className="sidebar"><CalendarContainer/></div>;
            }}/>
        </div>
    );
};
