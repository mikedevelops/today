const status = require('http-status');
const Entry = require('../models/Entry');
const logger = require('../services/logger');
const { handleMongooseException, handleResourceNotFound } = require('../utilities/errors');

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
module.exports.saveEntry = (req, res) => {
    const { content, date } = req.body;
    const { id } = req.user;

    Entry.create({ content, date: new Date(date), user: id }, (error, entry) => {
        // TODO: handle duplicate key here better
        if (error !== null) {
            return res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
        }

        res.json(entry.toObject());
    });
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
