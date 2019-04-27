import React from 'react';
import EntryContainer from '../Entry/EntryContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="main">
                        <EntryContainer/>
                    </div>
                    <div className="sidebar">
                        <CalendarContainer/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
