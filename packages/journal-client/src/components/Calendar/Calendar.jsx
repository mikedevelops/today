import React from 'react';
import { CalendarMonth } from './CalendarMonth'

export const Calendar = ({ today }) => {
    const months = [];

    for (let m = 0; m <= today.getMonth(); m++) {
        months.push(<CalendarMonth key={'month_' + m} entries={[]} month={m} year={today.getFullYear()}/>)
    }

    return (
        <div className="calendar">
            { months }
        </div>
    );
};
