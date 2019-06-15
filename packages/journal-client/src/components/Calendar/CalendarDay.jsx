import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {Entry} entry
 * @constructor
 */
export const CalendarDay = ({ entry }) => {
    return (
        <div className={'calendar-day calendar-day--entry'}>
            <Link to={entry.getSlug()}>{ entry.getDate().format('DD') }</Link>
        </div>
    );
};
