const mongoose = require('mongoose');
const schema = require('../../schema/user/user');

const User = mongoose.model('User', schema);

module.exports = User;
