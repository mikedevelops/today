const mongoose = require('mongoose');

module.exports.BOOLEAN_ACTIVITY = 'BooleanActivity';

module.exports.booleanActivitySchema = new mongoose.Schema({
    value: { type: Boolean, default: false },
}, { discriminatorKey: 'type', collection: 'activities' });
