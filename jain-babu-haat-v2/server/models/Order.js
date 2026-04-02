const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  itemName: String,
  itemNameHi: String,
  category: String,
  quantity: Number,
  unit: String,
});
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  village: { type: String, required: true },
  address: String,
  items: [orderItemSchema],
  itemsRaw: String,
  paymentMethod: { type: String, enum: ['cod', 'upi'], default: 'cod' },
  status: { type: String, enum: ['pending', 'confirmed', 'out_for_delivery', 'delivered', 'cancelled'], default: 'pending' },
  totalItems: Number,
  notes: String,
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
