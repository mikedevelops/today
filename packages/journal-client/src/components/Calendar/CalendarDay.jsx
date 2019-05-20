import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {moment.Moment} date
 * @param {Entry} entry
 * @param {moment.Moment} today
 * @constructor
 */
export const CalendarDay = ({ date, entry, today }) => {
    const label = date.format('DD');
    const isToday = today.isSame(date, 'date');
    const link = isToday || entry;

    return (
        <div className={'calendar-day' + (link ? ' calendar-day--entry' : '')}>
            { link ?
                <Link to={
                    isToday || today.isSame(entry.getDate()) ?
                        '/' :
                        `/entry/${entry.date.format('DD-MM-YYYY')}`
                }>{ label }</Link> :
                <span>{ label }</span>
            }
        </div>
    );
};
