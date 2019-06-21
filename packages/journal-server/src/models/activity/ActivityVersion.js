const mongoose = require('mongoose');
const activityVersion = require('../../schema/activity/activityVersion');

const ActivityVersion = mongoose.model('ActivityVersion', activityVersion);

module.exports = ActivityVersion;
