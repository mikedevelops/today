import React from 'react';

export const CalendarWeek = ({ days }) => {
    return (
        <div className="calendar__week">
            { days.map(d => {
                const className = 'calendar__day' + (d.entry ? ' calendar__day--entry' : '');
                const date = new Date(d.date).getDate();

                return <span className={className} key={d.date}>{ date }</span>;
            }) }
        </div>
    )
};
