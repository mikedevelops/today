import Activity from '../entities/Activity';

/**
 * @param {string} id
 * @param {string} type
 * @param {string} name
 * @param {string} icon
 * @param {*|null} value
 * @param {string|null} label
 * @return {Activity}
 */
export default (id, type, name, icon, value = null, label = null) => {
    return new Activity(id, icon, type, name, value, label);
};
