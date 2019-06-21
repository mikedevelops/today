const mongoose = require('mongoose');
const activitySchema = require('../../schema/activity/activity');

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
