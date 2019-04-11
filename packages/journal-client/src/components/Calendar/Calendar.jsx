import React from 'react'
import { CalendarMonth } from './CalendarMonth'
import { getDatesInRange } from '../../utilities/date'
import { CalendarWeek } from './CalendarWeek'
import { CalendarDay } from './CalendarDay'

export default ({ today, entries }) => {
    /**
     * @type {Moment[]}
     */
    const dates = getDatesInRange(new Date(today.getFullYear(), 0), new Date());
    const calendarMatrix = {};

    dates.forEach(date => {
        if (calendarMatrix[date.month()] === undefined) {
            calendarMatrix[date.month()] = {};
        }

        if (calendarMatrix[date.month()][date.week()] === undefined) {
            calendarMatrix[date.month()][date.week()] = [];
        }

        calendarMatrix[date.month()][date.week()].push(date);
    });

    return (
        <div className="calendar">
            {
                Object.keys(calendarMatrix).map(m =>
                    <CalendarMonth key={`month_${m}`}>
                        {
                            Object.keys(calendarMatrix[m]).map(w =>
                                <CalendarWeek key={`month_${m}_week_${w}`}>
                                    {
                                        calendarMatrix[m][w].map(d =>
                                            <CalendarDay
                                                key={`month_${m}_week_${w}_day_${d}`}
                                                date={d.toDate()}
                                                entry={entries[d.toDate()]}
                                            />
                                        )
                                    }
                                </CalendarWeek>
                            )
                        }
                    </CalendarMonth>
                )
            }
        </div>
    );
};
