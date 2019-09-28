const Entry = require('../models/entry/Entry');
const Activity = require('../models/activity/Activity');
const entryTransformer = require('../transformer/entryTransformer');
const activityTransformer = require('../transformer/activityTransformer');
const entryManager = require('../managers/entryManager');
const activityManager = require('../managers/activityManager');

const MAX_ENTRIES = 10;

/**
 * @param {Request} req
 * @param {Response} res\
 */
module.exports.listEntries = async (req, res) => {
  const entries = await Entry
    .find({ user: req.user.id })
    .limit(MAX_ENTRIES)
    .populate('activities')
    .exec();
  const activities = await Activity.find({ user: req.user.id });

  return res.json({
    entries: entries.map(entryTransformer),
    activities: activities.map(activityTransformer),
  });
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getEntry = async (req, res) => {
  const { id } = req.params;
  const entry = await Entry.findOne({ _id: id })
    .populate('activities')
    .exec();

  return res.json(entryTransformer(entry));
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.saveEntry = async (req, res) => {
  const { content, createdAt, activities } = req.body;
  const updatedActivities = await activityManager.addActivities(activities, req.user);
  const entry = await entryManager.createEntry(createdAt, content, req.user, updatedActivities);
  const populatedEntry = await entry.populate('activities').execPopulate();
  return res.json(entryTransformer(populatedEntry));
};

/**
 * @param req
 * @param res
 */
module.exports.updateEntry = async (req, res) => {
  const { content, activities } = req.body;
  const { id } = req.params;
  const updatedActivities = await activityManager.addActivities(activities, req.user);
  const entry = await entryManager.updateEntry(id, content, updatedActivities);
  const populatedEntry = await entry.populate('activities').execPopulate();
  return res.json(entryTransformer(populatedEntry));
};

/**
 * @param req
 * @param res
 * @return {Promise<*>}
 */
module.exports.updateEntryActivities = async (req, res) => {
  const { activities } = req.body;
  const { id } = req.params;
  const updatedActivities = await activityManager.addActivities(activities, req.user);
  const entry = await entryManager.updateEntryActivities(id, updatedActivities);
  const populatedEntry = await entry.populate('activities').execPopulate();
  return res.json(entryTransformer(populatedEntry));
};
