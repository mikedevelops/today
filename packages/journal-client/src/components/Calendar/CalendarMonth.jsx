import React from 'react';
import { getCalendarDaysInMonth, getMonthLabel } from '../../utilities/date'
import { CalendarWeek } from './CalendarWeek';

export const CalendarMonth = ({ month, year, entries }) => {
    const days = getCalendarDaysInMonth(month, year);
    const weeks = [];
    let weekDays = [];

    days.forEach((day, index) => {
        weekDays.push({ date: day, entry: null });

        if (index + 1 % 7 === 0) {
           weeks.push(<CalendarWeek key={day} days={weekDays}/>);
           weekDays = [];
        }
    });

    weeks.push(<CalendarWeek key="leftovers" days={weekDays}/>);

    return <div className="calendar__month"><pre>{ getMonthLabel(month) }</pre>{ weeks }</div>;
}
