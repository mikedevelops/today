import { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } from '../config/app.config';

/**
 * @param {ActivityBoolean} activity
 * @return {{id: string}}
 */
const transformBooleanActivity = (activity) => {
    return {
        id: activity.getId(),
        type: activity.getType(),
        name: activity.getName(),
        label: activity.getLabel(),
        value: activity.getValue(),
        icon: activity.getIcon(),
    };
};

/**
 * @param {ActivityChoice} activity
 * @return {{name: *, icon: *, id: string, label: (string|*), type: string, choices: *, value: *}}
 */
const transformChoiceActivity = (activity) => {
    return {
        id: activity.getId(),
        type: activity.getType(),
        name: activity.getName(),
        label: activity.getLabel(),
        value: activity.getValue(),
        icon: activity.getIcon(),
        choices: activity.getChoices(),
    };
};

/**
 * @param {AbstractActivity} activity
 */
export default (activity) => {
    switch (activity.getType()) {
        case ACTIVITY_BOOLEAN:
            return transformBooleanActivity(activity);
        case ACTIVITY_CHOICE:
            return transformChoiceActivity(activity);
        default:
            throw new Error(`Unable to transform activity "${activity.getType()}"`);
    }
};
