import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import { hasEntry } from '../../utilities/entry';
import moment from 'moment';
import TodayContainer from '../Entry/TodayContainer';
import LoginContainer from '../Authentication/LoginContainer';
import LogoutContainer from '../Authentication/LogoutContainer';

export default class App extends React.Component {
    render () {
        const entries = this.props.entry.items;
        const today = this.props.date.today;
        const { user } = this.props;

        return (
            <BrowserRouter>
                {/* Clear storage and redirect */}
                <Route path="/logout" component={LogoutContainer}/>

                <div className="app">
                    { user.token !== null && <Link to="/logout">logout</Link> }

                    <div className="main">
                        <Route path="/login" component={LoginContainer}/>

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

                    <Route path="/" component={() => {
                        return <div className="sidebar"><CalendarContainer/></div>;
                    }}/>
                </div>
            </BrowserRouter>
        )
    }
}
