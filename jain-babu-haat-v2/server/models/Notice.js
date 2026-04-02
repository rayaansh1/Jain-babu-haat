const mongoose = require('mongoose');
const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleHi: String,
  body: String,
  bodyHi: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });
module.exports = mongoose.model('Notice', noticeSchema);
