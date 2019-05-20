const mongoose = require('mongoose');
const schema = require('../../schema/activity/abstractActivity');

const AbstractActivity = mongoose.model('AbstractActivity', schema);

module.exports = AbstractActivity;
