const status = require('http-status');
const Entry = require('../models/entry/Entry');
const logger = require('../services/logger');
const { handleMongooseException } = require('../utilities/errors');
const entryTransformer = require('../transformer/entryTransformer');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.listEntries = async (req, res) => {
  const entries = await Entry.find({ user: req.user.id });

  return res.json(entries.map(entryTransformer));
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getEntry = async (req, res) => {
  const { id } = req.params;

  const entry = await Entry.findById(id).populate('activities').exec();

  return res.json(entryTransformer(entry));
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.saveEntry = async (req, res) => {
  const { content, createdAt } = req.body;

  try {
    const entry = await Entry.create({
      content,
      createdAt,
      user: req.user.id,
    });

    return res.json(entryTransformer(entry));
  } catch (error) {
    handleMongooseException(error, res, logger);

    return res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

/**
 * @param req
 * @param res
 */
module.exports.updateEntry = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  try {
    const entry = await Entry.findById(id);

    if (entry === undefined) {
      return res.sendStatus(status.NOT_FOUND);
    }

    const updatedEntry = await Entry.findOneAndUpdate({ _id: id }, { content }, { new: true });

    return res.json(entryTransformer(updatedEntry));
  } catch (e) {
    logger.error(e.message);
    return res.sendStatus(status.INTERNAL_SERVER_ERROR);
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
