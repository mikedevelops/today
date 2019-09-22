const mongoose = require('mongoose');
const schema = require('../../schema/activity/activity');

const Activity = mongoose.model('Activity', schema);

module.exports = Activity;
