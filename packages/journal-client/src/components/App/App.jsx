import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { hasEntry } from '../../utilities/entry';
import moment from 'moment';

export default class App extends React.Component {
    render () {
        const entries = this.props.entry.items;

        return (
            <BrowserRouter>
                <div className="app">
                    <div className="main">
                        <Route path="/entry/:date" component={(props) => {
                            const date = moment(props.match.params.date, 'DD-MM-YYYY');

                            if (hasEntry(date.toDate(), entries)) {
                                return <EntryContainer date={props.match.params.date}/>
                            }

                            return <pre>404</pre>
                        }}/>
                        <Route path="/" component={() => <pre>today</pre>}/>
                    </div>
                    <div className="sidebar">
                        <CalendarContainer/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
