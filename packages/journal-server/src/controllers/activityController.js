const activityBlueprintTransformer = require('../transformer/activityBlueprintTransformer');
const ActivityVersion = require('../models/activity/ActivityVersion');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getActivities = async (req, res) => {
    // TODO: this should be ordered by activity version name
    const version = await ActivityVersion.findOne().populate('activities').exec();

    res.send(version.activities.map(activityBlueprintTransformer));
};
