const mongoose = require('mongoose');
const activitySchema = require('../../schema/activity/activity');

const Activity = mongoose.model('AbstractActivity', activitySchema);

module.exports = Activity;
