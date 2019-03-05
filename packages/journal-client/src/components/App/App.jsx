import React from 'react';
import { EntryContainer } from '../Entry/EntryContainer';

export class App extends React.Component {
    render () {
        return (
            <div className="app">
                <EntryContainer/>
            </div>
        )
    }
}
