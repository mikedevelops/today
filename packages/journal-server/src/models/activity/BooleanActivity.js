const { booleanActivitySchema } = require('../../schema/activity/booleanActivity');
const { activities } = require('../../schema/entry/entry');

const BooleanActivity = activities.discriminator('BooleanActivity', booleanActivitySchema);

module.exports = BooleanActivity;
