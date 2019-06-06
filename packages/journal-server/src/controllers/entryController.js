const status = require('http-status');
const Entry = require('../models/entry/Entry');
const logger = require('../services/logger');
const { handleMongooseException, handleResourceNotFound } = require('../utilities/errors');
const activityManager = require('../managers/activityManager');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.listEntries = (req, res) => {
    Entry.find({ user: req.user.id }, (error, entries) => {
        if (error !== null) {
            return handleMongooseException(error, res, logger);
        }

        res.json(entries.map(e => e.toObject()));
    });
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getEntry = (req, res) => {
    const { id } = req.params;

    Entry.findById(id, (error, entry) => {
        if (error !== null) {
            return handleMongooseException(error, res, logger);
        }

        if (entry === null) {
            return handleResourceNotFound('Entry', res, logger);
        }

        res.json(entry.toObject());
    });
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.saveEntry = async (req, res) => {
    const { content, date, activities, id } = req.body;

    try {
        let entry = id !== null
            ? await Entry.findById(id)
            : await Entry.create({ content, date, user: req.user.id });

        entry.activities = activities.map(activityManager.createActivity);
        entry.content = content;
        entry = await entry.save({ new: true });

        return res.json(entry.toObject());
    } catch (error) {
        handleMongooseException(error, res, logger);
        return res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.deleteEntry = (req, res) => {
    const { id } = req.params;

    Entry.findByIdAndRemove(id, (error, entry) => {
        if (error !== null) {
            return handleMongooseException(error, res, logger);
        }

        res.json(entry);
    });
};
