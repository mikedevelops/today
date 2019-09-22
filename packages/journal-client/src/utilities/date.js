/**
 * @param {moment.Moment} start
 * @param {moment.Moment} end
 * @returns {Array}
 */
export const getDatesInRange = (start, end) => {
  const dates = [];
  let lastMoment = start;

  if (start.isAfter(end)) {
    throw new Error('Start date cannot be after the end date');
  }

  while (lastMoment.isBefore(end)) {
    dates.push(lastMoment);
    lastMoment = lastMoment.clone().add(1, 'd');
  }

  dates.push(end.clone());

  return dates;
};

/**
 * @param a
 * @param b
 */
export const sortByDateAsc = (a, b) => {
  return b.createdAt.format('YYYYMMDD') - a.createdAt.format('YYYYMMDD');
};
