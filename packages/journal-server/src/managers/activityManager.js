const activityTransformer = require('../transformer/activityTransformer');

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
