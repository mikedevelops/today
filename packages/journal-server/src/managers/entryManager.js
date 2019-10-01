const Entry = require('../models/entry/Entry');

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

module.exports.updateEntryActivities = async (id, activities) => {
  return Entry.findOneAndUpdate(
    { _id: id },
    { activities: activities.map(a => a.id) },
    { new: true },
  );
};
