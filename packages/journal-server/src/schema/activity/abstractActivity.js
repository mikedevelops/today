const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    icon: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String },
}, { discriminatorKey: 'type', collection: 'activities' });

module.exports = schema;
