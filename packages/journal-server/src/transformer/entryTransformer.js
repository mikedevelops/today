const activityTransformer = require('../transformer/activityTransformer');

module.exports = (entry) => {
    return Object.assign({}, entry.toObject(), {
        activities: entry.activities.map(activityTransformer),
    });
};
