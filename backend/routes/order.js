const express = require('express');
const router = express.Router();
const Order = require('../models/order'); // path to your order model

router.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (err) {
    console.error('Backend order error:', err.message);
    res.status(500).json({ error: 'Failed to save order' });
  }
});
// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 }); // latest first
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});
router.delete('/orders/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Order.findByIdAndDelete(id);
    res.json({ success: true, message: 'Order deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ success: false, message: 'Failed to delete order' });
  }
});


module.exports = router;
