import React from 'react';
import { EntryContainer } from '../Entry/EntryContainer';
import { Today } from '../Date/Today'
import { Calendar } from '../Calendar/Calendar'

export class App extends React.Component {
    render () {
        return (
            <div className="app">
                <div className="main">
                    <Today date={new Date()}/>
                    <EntryContainer/>
                </div>
                <div className="sidebar">
                    <Calendar today={new Date(2019, 11, 31)}/>
                </div>
            </div>
        )
    }
}
