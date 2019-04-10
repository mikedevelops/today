import React from 'react';
import { CalendarDay } from './CalendarDay'

export const CalendarWeek = ({ days })=> {
    return (
        <div className="calendar-week">
            { days.map(d => <CalendarDay key={'day_' + d.date.getTime()} date={d.date} entry={d.entry}/>) }
        </div>
    );
};
