const ActivityVersion = require('../models/activity/ActivityVersion');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getActivities = async (req, res) => {
    const version = await ActivityVersion.findOne().populate('activities').exec();

    res.send(version.activities.map(a => ({
        icon: a.icon,
        name: a.name,
        type: a.type,
        defaultValue: a.defaultValue,
    })));
};
