const mongoose = require('mongoose');

/**
 * Data Schema.
 */
const userSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Todo', userSchema); // Export and create model.