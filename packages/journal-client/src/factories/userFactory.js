import User from '../entities/User';
import Activity from '../entities/Activity';

/**
 * @param {string} id
 * @param {string} username
 * @param {string} token
 * @param activities
 * @return {User}
 */
export default (id, username, token, activities = []) => {
    const userActivities = activities.map((activity) => {
        return new Activity(
            activity.id,
            activity.icon,
            activity.type,
            activity.name,
            activity.value,
            activity.label,
            activity.enabled,
        );
    });

    return new User(id, token, username, userActivities);
};
