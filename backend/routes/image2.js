// routes/image.js
const express = require('express');
const multer = require('multer');
const Image2 = require('../models/image2');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload-emb', upload.single('image'), async (req, res) => {
  try {
    console.log("📦 File received:", req.file);
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const newImage = new Image2({
      image2: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.status(200).json({ message: 'Image uploaded successfully!' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});
// routes/image.js
router.get('/api/embrodery', async (req, res) => {
  try {
    const images = await Image2.find(); // Image is your model

    const formatted = images.map(img => ({
      imageUrl: `data:${img.contentType};base64,${img.image2.toString('base64')}`
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});
router.delete('/delete2/:id', async (req, res) => {
  try {
    const image = await Image2.findByIdAndDelete(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
