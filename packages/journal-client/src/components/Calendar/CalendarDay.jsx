import React from 'react';
import { leadingZero } from '../../utilities/number'

export const CalendarDay = ({ date, entry }) => {
    return (
        <div className={'calendar-day' + (entry ? ' calendar-day--entry' : '')} key={date.toString()}>
            <pre>{ leadingZero(date.getDate()) }</pre>
        </div>
    );
};
