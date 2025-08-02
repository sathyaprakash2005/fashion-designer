const mongoose = require('mongoose');

const imageSchema1 = new mongoose.Schema({
  image1: Buffer,
  contentType: String,
});

module.exports = mongoose.model('Image1', imageSchema1);
