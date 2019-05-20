const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    duration: { type: Number, required: true },
}, { discriminatorKey: 'type' });

module.exports = schema;
