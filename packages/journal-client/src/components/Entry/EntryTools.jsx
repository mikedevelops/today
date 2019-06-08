import React from 'react';
import { NavLink } from 'react-router-dom';
import { getNextEntry, getPreviousEntry } from '../../utilities/entry';

export class EntryTools extends React.Component {
    render () {
        const prev = getNextEntry(this.props.entry, this.props.entries);
        const next = getPreviousEntry(this.props.entry, this.props.entries);
        const getLink = entry => entry === null ? '/' : entry.getSlug();

        return (
            <div>
                <h2>{ this.props.entry.getDate().format('Do MMMM YYYY') }</h2>
                <NavLink to={getLink(prev)}>Previous</NavLink>
                <NavLink to={getLink(next)}>Next</NavLink>
            </div>
        )
    }
}
