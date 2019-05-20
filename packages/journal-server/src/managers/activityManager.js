const { BOOLEAN_ACTIVITY } = require('../schema/activity/booleanActivity');
const BooleanActivity = require('../models/activity/BooleanActivity');
const { handleActivityModelNotFound } = require('../utilities/errors');

module.exports.createActivity = ({ type, name, icon, value, label }) => {
    if (label === undefined) {
        label = name;
    }

    switch (type) {
        case BOOLEAN_ACTIVITY:
            return new BooleanActivity({
                type,
                name,
                label,
                icon,
                value,
            });
        default:
            handleActivityModelNotFound(type);
    }
};
