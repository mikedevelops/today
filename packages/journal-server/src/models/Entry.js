const mongoose = require('mongoose');
const schema = require('../schema/entry');

const Entry = mongoose.model('Entry', schema);

module.exports = Entry;
