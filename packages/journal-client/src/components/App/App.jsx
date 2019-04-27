import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';

export default class App extends React.Component {
    render () {
        return (
            <div className="app">
                <div className="main">
                    <EntryContainer/>
                </div>
                <div className="sidebar">
                    <CalendarContainer/>
                </div>
            </div>
        )
    }
}
