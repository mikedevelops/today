const { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } = require('../schema/activity/activityBlueprint');

/**
 * @param activity
 */
module.exports = (activity) => {
    switch (activity.type) {
        case ACTIVITY_BOOLEAN:
            return {
                icon: activity.icon,
                name: activity.name,
                type: activity.type,
                defaultValue: activity.defaultValue,
            };
        case ACTIVITY_CHOICE:
            return {
                icon: activity.icon,
                name: activity.name,
                type: activity.type,
                defaultValue: activity.defaultValue,
                choices: activity.choices,
            };
        default:
            return {};
    }
};
