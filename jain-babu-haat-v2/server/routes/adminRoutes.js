const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/authMiddleware');

const genToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ _id: admin._id, name: admin.name, email: admin.email, token: genToken(admin._id) });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.post('/seed', async (req, res) => {
  try {
    if (await Admin.findOne({ email: process.env.ADMIN_EMAIL }))
      return res.json({ message: 'Admin already exists' });
    const a = await Admin.create({ name: 'Shailendra Narayan Singh', email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD });
    res.status(201).json({ message: 'Admin created', email: a.email });
  } catch (e) { res.status(400).json({ message: e.message }); }
});

router.get('/profile', protect, (req, res) => res.json(req.admin));
module.exports = router;
