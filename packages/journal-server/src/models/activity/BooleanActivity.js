const { booleanActivitySchema } = require('../../schema/activity/booleanActivity');
const { activities } = require('../../schema/activity/activityVersion');

const BooleanActivity = activities.discriminator('BooleanActivity', booleanActivitySchema);

module.exports = BooleanActivity;
