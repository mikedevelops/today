const ActivityVersion = require('../models/activity/ActivityVersion');
const { handleMongooseException } = require('../utilities/errors');
const logger = require('../services/logger');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getActivities = (req, res) => {
    ActivityVersion.find({ user: req.user.id }).sort({ version: -1 }).limit(1)
        .exec((error, [activity]) => {
            if (error !== null) {
                return handleMongooseException(error, res, logger);
            }

            if (activity === undefined) {
                return res.send('No ActivityVersion found');
            }

            res.json(activity.toObject());
        });
};
