const mongoose = require('mongoose');
const { activityBlueprintSchema } = require('../../schema/activity/activityBlueprint');

const ActivityBlueprint = mongoose.model('ActivityBlueprint', activityBlueprintSchema);

module.exports = ActivityBlueprint;
