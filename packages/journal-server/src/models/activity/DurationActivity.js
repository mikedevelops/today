const schema = require('../../schema/activity/durationActivity');
const { activities } = require('../../schema/activity/activityVersion');

const DurationActivity = activities.discriminator('DurationActivity', schema);

module.exports = DurationActivity;
