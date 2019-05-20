import Entry from '../entities/Entry';

/**
 * @param {moment.Moment} date
 * @param {string} content
 * @param {Activity[]} activities
 * @param {string|null} id
 * @return {Entry}
 */
export default (date, content = '', activities = [], id = null) =>
    new Entry(date, content, activities, id);
