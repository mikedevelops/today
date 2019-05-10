import Entry from '../entities/Entry';

/**
 * @param {moment.Moment} date
 * @param {string} content
 * @return {Entry}
 */
export default (date, content = '') => new Entry(date, content);
