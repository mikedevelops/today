import React from 'react';
import { formatToday } from '../../utilities/date';

export const Today = ({ date }) => {
    return <pre>{ formatToday(date) }</pre>;
};
