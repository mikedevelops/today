const Activity = require('../models/activity/Activity');
const activityTransformer = require('../transformer/activityTransformer');

module.exports.getActivitiesForUser = async (req, res) => {
  const activities = await Activity.find({ user: req.user.id }, { lastUsed: 1 });
  return res.json(activities.map(activityTransformer));
};

module.exports.saveActivity = async (req, res) => {
  const { icon, name } = req.body;
  const activity = await Activity.create({
    icon,
    name,
    user: req.user.id,
    lastUsed: new Date(),
  });
  return res.json(activityTransformer(activity));
};
