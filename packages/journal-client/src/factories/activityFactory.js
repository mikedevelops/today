import ActivityBoolean from '../entities/activities/ActivityBoolean';
import { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } from '../config/app.config';
import ActivityChoice from '../entities/activities/ActivityChoice';

/**
 * @param {string|null} id
 * @param {string} type
 * @param {string} name
 * @param {string} icon
 * @param {string|null} label
 * @param {*|null} value
 * @param {string[]} choices
 * @return {AbstractActivity}
 */
export default (id, type, name, icon, label = null, value = null, choices = []) => {
    switch (type) {
        case ACTIVITY_BOOLEAN:
            return new ActivityBoolean(id, icon, name, label, value);
        case ACTIVITY_CHOICE:
            return new ActivityChoice(id, icon, name, label, choices, value);
        default:
            throw new Error(`Cannot find activity type ${type}`);
    }
};
