const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');
const { protect } = require('../middleware/authMiddleware');
router.get('/', async (req, res) => {
  try { res.json(await Notice.find({ isActive: true }).sort({ createdAt: -1 })); }
  catch (e) { res.status(500).json({ message: e.message }); }
});
router.post('/', protect, async (req, res) => {
  try { res.status(201).json(await Notice.create(req.body)); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.delete('/:id', protect, async (req, res) => {
  try { await Notice.findByIdAndUpdate(req.params.id, { isActive: false }); res.json({ message: 'Removed' }); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
module.exports = router;
