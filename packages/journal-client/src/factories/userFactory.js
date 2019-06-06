import User from '../entities/User';
import activityFactory from './activityFactory';

/**
 * @param {string} id
 * @param {string} username
 * @param {string} token
 * @param activities
 * @return {User}
 */
export default (id, username, token, activities = []) => {
    const userActivities = activities.map((activity) => {
        const value = activity.value === undefined ? activity.defaultValue : activity.value;
        return activityFactory(
            activity.id,
            activity.type,
            activity.name,
            activity.icon,
            value,
            activity.label,
        );
    });

    return new User(id, token, username, userActivities);
};
