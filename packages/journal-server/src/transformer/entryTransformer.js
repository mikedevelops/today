const activityTransformer = require('./activityTransformer');

module.exports = (entry) => {
  return {
    id: entry._id,
    content: entry.content,
    createdAt: entry.createdAt,
    activities: entry.activities.map(activityTransformer),
  };
};
