import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {moment.Moment} date
 * @param {Entry} entry
 * @constructor
 */
export const CalendarDay = ({ date, entry }) => {
    const label = date.format('DD');
    return (
        <div className={'calendar-day' + (entry ? ' calendar-day--entry' : '')}>
            { entry ?
                <Link to={`/entry/${entry.date.format('DD-MM-YYYY')}`}>{ label }</Link> :
                <span>{ label }</span>
            }
        </div>
    );
};
