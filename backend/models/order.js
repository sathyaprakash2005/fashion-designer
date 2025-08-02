const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  image: String,
  name: String,
  phone: String,
  address: String,
  date: String
});

module.exports = mongoose.model('Order', orderSchema);
