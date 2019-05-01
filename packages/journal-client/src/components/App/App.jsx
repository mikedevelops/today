import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { hasEntry } from '../../utilities/entry';
import moment from 'moment';
import TodayContainer from '../Entry/TodayContainer';

export default class App extends React.Component {
    render () {
        const entries = this.props.entry.items;
        const today = this.props.date.today;

        return (
            <BrowserRouter>
                <div className="app">
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
                    <div className="sidebar">
                        <CalendarContainer/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
