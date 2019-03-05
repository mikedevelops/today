import React from 'react';
import { EntryContainer } from '../Entry/EntryContainer';
import { Today } from '../Date/Today'

export class App extends React.Component {
    render () {
        return (
            <div className="app">
                <Today date={new Date()}/>
                <EntryContainer/>
            </div>
        )
    }
}
