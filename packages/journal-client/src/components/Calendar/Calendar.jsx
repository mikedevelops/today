import React from 'react';
import Range from '../../entities/calendar/Range';
import Month from '../../entities/calendar/Month';
import Week from '../../entities/calendar/Week';
import { CalendarMonth } from './CalendarMonth';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDay } from './CalendarDay';
import moment from 'moment';

export default class Calendar extends React.Component {
    constructor (props) {
        super(props);

        /**
         * @type {Range}
         */
        this.calendar = this.updateCalendar(props);
   }

    componentWillUpdate (nextProps) {
        this.calendar = this.updateCalendar(nextProps);
    }

    updateCalendar(props) {
        const calendar = new Range();

        props.entries.forEach((entry) => {
            const date = entry.getDate();
            let month = calendar.getMonth(date.month());

            if (month === undefined) {
                month = new Month(date.month());
                calendar.addMonth(month);
            }

            let week = month.getWeek(date.week());

            if (week === undefined) {
                week = new Week(date.week());
                month.addWeek(week);
            }

            week.addEntry(entry);
        });

        return calendar;
    }

    render() {
        const months = [...this.calendar.months].reverse();

        return months.map((month) => (
            <CalendarMonth key={month.month}>
                <pre>{ moment().month(month.month).format('MMMM') }</pre>
                { month.weeks.reverse().map(week => (
                     <CalendarWeek key={week.week}>
                         { week.entries.reverse().map(entry => (
                             <CalendarDay key={entry.getDate().unix()} entry={entry}/>
                         )) }
                     </CalendarWeek>
                 )) }
             </CalendarMonth>
         ));
    }
};
