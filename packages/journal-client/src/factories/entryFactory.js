import Entry from '../entities/Entry';

/**
 * @param {Moment.moment} date
 * @param {string} content
 * @return {Entry}
 */
export default (date, content = '') => new Entry(date, content);
