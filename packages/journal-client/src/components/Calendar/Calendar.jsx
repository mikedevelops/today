import React from 'react';
import { CalendarMonth } from './CalendarMonth';
import { getDatesInRange } from '../../utilities/date';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDay } from './CalendarDay';
import moment from 'moment';

export default class Calendar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            hydrated: false,
        };
    }

    componentDidMount () {
        this.props.hydrate(this.props.user.token);
    }

    render () {
        const dates = getDatesInRange(this.props.today.clone().startOf('year'), this.props.today);
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
                                                    entry={this.props.entries[d.unix()]}
                                                    today={this.props.today}
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
    }
};
