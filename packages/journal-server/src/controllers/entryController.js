const mongoose = require('mongoose');
const status = require('http-status');
const Entry = require('../models/entry/Entry');
const Activity = require('../models/activity/Activity');
const logger = require('../services/logger');
const { handleMongooseException, handleResourceNotFound } = require('../utilities/errors');
const entryTransformer = require('../transformer/entryTransformer');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.listEntries = async (req, res) => {
    const entries = await Entry.find({ user: req.user.id }).populate('activities').exec();

    res.json(entries.map(entryTransformer));
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getEntry = async (req, res) => {
    const { id } = req.params;

    const entry = await Entry.findById(id).populate('activities').exec();

    res.json(entryTransformer(entry));
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.saveEntry = async (req, res) => {
    const { content, date, activities, id } = req.body;

    try {
        let entry = null;

        if (id !== null) {
            entry = await Entry.findById(id);
        }

        if (!entry) {
            entry = new Entry();
        }

        entry.content = content;
        entry.date = date;
        entry.lastUpdated = new Date();
        entry.user = req.user.id;
        entry.activities = await Promise.all(activities.map(async activity => {
            let a = await Activity.findById(activity.id);

            if (!a) {
                a = new Activity();
            }

            a.icon = activity.icon;
            a.name = activity.name;
            a.type = activity.type;
            a.value = activity.value;
            a.choices = activity.choices;
            a.label = activity.label;

            return a.save({ new: true });
        }));

        entry = await entry.save({ new: true });

        return res.json(entryTransformer(entry));
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

        res.json(entryTransformer(entry));
    });
};
