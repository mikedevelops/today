import Entry from '../entities/Entry';
import activityFactory from './activityFactory';

/**
 * @param {string|null} id
 * @param {moment.Moment} date
 * @param {moment.Moment} lastUpdated
 * @param {string} content
 * @param {{_id: string, type: string, name: string, icon: string, value: *|null, label: string|null, choices: string[]}[]} activities
 * @return {Entry}
 */
export default (id = null, date, lastUpdated, content = '', activities = []) => {
    const hydratedActivities = activities.map((activity) => {
        return activityFactory(
            activity._id,
            activity.type,
            activity.name,
            activity.icon,
            activity.label,
            activity.value,
            activity.choices,
        );
    });

    return new Entry(date, content, hydratedActivities, id, lastUpdated);
};
