const schema = require('../../schema/activity/durationActivity');
const { doc } = require('./AbstractActivity');

const DurationActivity = doc.discriminator('DurationActivity', schema);

module.exports = DurationActivity;
