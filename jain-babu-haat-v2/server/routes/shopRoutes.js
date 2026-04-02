const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop');
const { protect } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try { res.json(await Shop.find({ isActive: true }).sort({ type: 1 })); }
  catch (e) { res.status(500).json({ message: e.message }); }
});
router.get('/:id', async (req, res) => {
  try { const s = await Shop.findById(req.params.id); s ? res.json(s) : res.status(404).json({ message: 'Not found' }); }
  catch (e) { res.status(500).json({ message: e.message }); }
});
router.post('/', protect, async (req, res) => {
  try { res.status(201).json(await Shop.create(req.body)); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.put('/:id', protect, async (req, res) => {
  try { res.json(await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.delete('/:id', protect, async (req, res) => {
  try { await Shop.findByIdAndUpdate(req.params.id, { isActive: false }); res.json({ message: 'Removed' }); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
module.exports = router;
