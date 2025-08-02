const mongoose = require('mongoose');

const imageSchema2 = new mongoose.Schema({
  image: Buffer,
  contentType: String,
});

module.exports = mongoose.model('Image', imageSchema2);
