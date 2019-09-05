const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  content: { type: String, default: '' },
  createdAt: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

schema.index({ user: 1, createdAt: 1 }, { unique: true });

module.exports = schema;
