const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    contents: { type: String, unique: true },
    date: { type: Date, unique: true },
});
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
