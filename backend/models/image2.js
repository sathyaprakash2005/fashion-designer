const mongoose = require('mongoose');

const imageSchema3 = new mongoose.Schema({
  image2: Buffer,
  contentType: String,
});

module.exports = mongoose.model('Image2', imageSchema3);
