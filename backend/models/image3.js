const mongoose = require('mongoose');

const imageSchema4 = new mongoose.Schema({
  image3: Buffer,
  contentType: String,
});

module.exports = mongoose.model('Image3', imageSchema4);
