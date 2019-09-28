const Entry = require('../models/entry/Entry');
const Activity = require('../models/activity/Activity');
const activityTransformer = require('../transformer/activityTransformer');

module.exports.createEntry = async (createdAt, content, user, activities) => {
  return Entry.create({
    createdAt,
    content,
    user,
    activities: activities.map(a => a.id),
  });
};

module.exports.updateEntry = async (id, content, activities) => {
  return Entry.findOneAndUpdate(
    { _id: id },
    { content, activities: activities.map(a => a.id) },
    { new: true },
  );
};

/**
 * @param {{ icon: string, name: string, id: string }[] }activities
 * @param {{ id: string }} user
 * @return {Promise<*>}
 */
module.exports.addActivities = async (activities, user) => {
  const newActivities = activities.filter(a => a.id === null);
  const newActivityPromises = newActivities.map(activity => Activity.create({
    icon: activity.icon,
    user: user.id,
    name: activity.name,
    lastUsed: new Date(),
  }));
  const newActivityEntities = await Promise.all(newActivityPromises);
  return activities
    .filter(a => a.id !== null)
    .concat(newActivityEntities.map(activityTransformer));
};
