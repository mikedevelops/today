const { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } = require('../schema/activity/activityBlueprint');

/**
 * @param activity
 * @return {{name: *, icon: *, id: *, label: *, type: *, value: *}}
 */
const transformBooleanActivityBlueprint = (activity) => {
    return {
        id: activity.id,
        name: activity.name,
        icon: activity.icon,
        type: activity.type,
        label: activity.label,
        defaultValue: activity.defaultValue,
    };
};

/**
 * @param activity
 * @return {{name: *, icon: *, id: *, label: *, type: *, choices: *, value: *}}
 */
const transformChoiceActivityBlueprint = (activity) => {
    return {
        id: activity.id,
        name: activity.name,
        icon: activity.icon,
        type: activity.type,
        label: activity.label,
        defaultValue: activity.defaultValue,
        choices: activity.choices,
    };
};

module.exports = (activity) => {
    switch (activity.type) {
        case ACTIVITY_BOOLEAN:
            return transformBooleanActivityBlueprint(activity);
        case ACTIVITY_CHOICE:
            return transformChoiceActivityBlueprint(activity);
        default:
            throw new Error(`Unable to transform activity with type ${activity.type}`);
    }
};
