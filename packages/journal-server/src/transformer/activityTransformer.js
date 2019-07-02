const { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } = require('../schema/activity/activityBlueprint');

/**
 * @param activity
 * @return {{name: *, icon: *, id: *, label: *, type: *, value: *}}
 */
const transformBooleanActivity = (activity) => {
    return {
        id: activity.id,
        name: activity.name,
        icon: activity.icon,
        type: activity.type,
        label: activity.label,
        value: activity.value,
    };
};

/**
 * @param activity
 * @return {{name: *, icon: *, id: *, label: *, type: *, choices: *, value: *}}
 */
const transformChoiceActivity = (activity) => {
    return {
        id: activity.id,
        name: activity.name,
        icon: activity.icon,
        type: activity.type,
        label: activity.label,
        value: activity.value,
        choices: activity.choices,
    };
};

module.exports = (activity) => {
    switch (activity.type) {
        case ACTIVITY_BOOLEAN:
            return transformBooleanActivity(activity);
        case ACTIVITY_CHOICE:
            return transformChoiceActivity(activity);
        default:
            throw new Error(`Unable to transform activity with type ${activity.type}`);
    }
};
