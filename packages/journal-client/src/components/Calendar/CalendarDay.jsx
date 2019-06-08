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
    const isLink = entry !== undefined;
    const getLink = entry => entry.isDate(today) ? '/' : entry.getSlug();

    return (
        <div className={'calendar-day' + (isLink ? ' calendar-day--entry' : '')}>
            { isLink ?
                <Link to={getLink(entry)}>{ label }</Link> :
                <span>{ label }</span>
            }
        </div>
    );
};
