const mongoose = require('mongoose');
const schema = require('../schema/user');

const User = mongoose.model('User', schema);

module.exports = User;
