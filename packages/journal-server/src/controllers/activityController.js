const activityTransformer = require('../transformer/activityTransformer');
const ActivityVersion = require('../models/activity/ActivityVersion');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getActivities = async (req, res) => {
    const version = await ActivityVersion.findOne().populate('activities').exec();

    res.send(version.activities.map(activityTransformer));
};
