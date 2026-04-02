const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');

router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    const itemsList = order.items?.length
      ? order.items.map(i => `• ${i.itemName} — ${i.quantity} ${i.unit}`).join('\n')
      : order.itemsRaw;
    const msg = `🛒 *New Order — Jain Babu Haat*\n\n👤 ${order.customerName}\n📞 ${order.phone}\n🏘️ ${order.village}\n\n📦 *Items:*\n${itemsList}\n\n💳 Payment: ${order.paymentMethod?.toUpperCase()}\n📝 Notes: ${order.notes || 'None'}\n\n_Order ID: ${order._id}_`;
    const waUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER || '919934468181'}?text=${encodeURIComponent(msg)}`;
    res.status(201).json({ order, whatsappUrl: waUrl });
  } catch (e) { res.status(400).json({ message: e.message }); }
});

router.get('/', protect, async (req, res) => {
  try { res.json(await Order.find().sort({ createdAt: -1 })); }
  catch (e) { res.status(500).json({ message: e.message }); }
});

router.put('/:id', protect, async (req, res) => {
  try { res.json(await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (e) { res.status(400).json({ message: e.message }); }
});

module.exports = router;
