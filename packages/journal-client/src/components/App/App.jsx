import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import { Today } from '../Date/Today'
import CalendarContainer from '../Calendar/CalendarContainer';

export default class App extends React.Component {
    render () {
        return (
            <div className="app">
                <div className="main">
                    <Today date={new Date()}/>
                    <EntryContainer/>
                </div>
                <div className="sidebar">
                    <CalendarContainer/>
                </div>
            </div>
        )
    }
}
