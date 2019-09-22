const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  icon: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  lastUsed: { type: Date, required: true },
});

// TODO: figure the index out so activities are unique by name and user
// schema.index({ user: 1, type: 1 }, { unique: true, sparse: true });

module.exports = schema;
