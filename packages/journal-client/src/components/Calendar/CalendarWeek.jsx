import React from 'react';

export const CalendarWeek = ({ days }) => {
    return (
        <div className="calendar-week">
            { days.map(d => {
                const date = new Date(d.date).toDateString();

                return (
                    <div className={'calendar-day' + (d.entry ? ' calendar-day--entry' : '')} key={d.date}>
                        <span className="visually-hidden">{ date }</span>
                        <div className={'calendar-day__icon' + (d.entry ? ' calendar-day__icon--entry' : '') }/>
                    </div>
                );
            }) }
        </div>
    )
};
