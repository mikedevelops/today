module.exports = (activity) => {
  return {
    id: activity._id,
    icon: activity.icon,
    name: activity.name,
  };
};
