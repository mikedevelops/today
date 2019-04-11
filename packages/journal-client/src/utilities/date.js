import moment from 'moment';

export const getDatesInRange = (start, end) => {
    const startMoment = moment(start);
    const endMoment = moment(end);
    const dates = [];
    let lastMoment = startMoment;

    if (startMoment.isAfter(endMoment)) {
        throw new Error('Start date cannot be after the end date');
    }

    while (lastMoment.isBefore(endMoment)) {
        dates.push(lastMoment);
        lastMoment = lastMoment.clone().add(1, 'd');
    }

    return dates;
};
