import React from 'react';
import { CalendarMonth } from './CalendarMonth';
import { getDatesInRange } from '../../utilities/date';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDay } from './CalendarDay';
import moment from 'moment';

export default ({ today, entries }) => {
    /**
     * @type {Moment[]}
     */
    const dates = getDatesInRange(today.clone().startOf('year'), today);
    const calendarMatrix = {};

    // Convert dates into a tree
    // TODO: this should be a util
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
                Object.keys(calendarMatrix).reverse().map(m =>
                    <CalendarMonth key={`month_${m}`}>
                        <h3 className="calendar-month__label">{ moment().month(m).format('MMMM') }</h3>
                        {
                            Object.keys(calendarMatrix[m]).reverse().map(w =>
                                <CalendarWeek key={`month_${m}_week_${w}`}>
                                    {
                                        calendarMatrix[m][w].reverse().map(d =>
                                            <CalendarDay
                                                key={`month_${m}_week_${w}_day_${d}`}
                                                date={d}
                                                entry={entries[d.unix()]}
                                                today={today}
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
