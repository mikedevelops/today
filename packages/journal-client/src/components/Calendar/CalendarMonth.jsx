import React from 'react'
import { getCalendarDaysInMonth } from '../../utilities/date'
import { CalendarWeek } from './CalendarWeek'

export const CalendarMonth = ({ month, year }) => {
    const days = getCalendarDaysInMonth(month, year);
    const weeks = [];
    let weekDays = [];
    let d = 1;

    days.forEach((day) => {
        weekDays.push({ date: day, entry: null });

        if (d === 7) {
           weeks.push(<CalendarWeek key={'week_' + day.getTime()} days={weekDays}/>);
           weekDays = [];
           d = 1;

           return;
        }

        d++;
    });

    weeks.push(<CalendarWeek key="leftovers" days={weekDays}/>);

    return <div className="calendar-month">{ weeks }</div>;
}
