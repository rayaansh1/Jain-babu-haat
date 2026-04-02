const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nameHi: String,
  category: String,
  categoryHi: String,
  type: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
  complex: { type: String, default: 'Ravi Complex' },
  ownerName: { type: String, default: 'Shailendra Narayan Singh' },
  phone: String,
  description: String,
  descriptionHi: String,
  image: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });
module.exports = mongoose.model('Shop', shopSchema);
