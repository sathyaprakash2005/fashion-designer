// routes/image.js
const express = require('express');
const multer = require('multer');
const Image3 = require('../models/image3');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload-nighty', upload.single('image'), async (req, res) => {
  try {
    console.log("📦 File received:", req.file);
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const newImage = new Image3({
      image3: req.file.buffer,
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
router.get('/api/nighty', async (req, res) => {
  try {
    const images = await Image3.find(); // Image is your model

    const formatted = images.map(img => ({
      imageUrl: `data:${img.contentType};base64,${img.image3.toString('base64')}`
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});
router.delete('/delete3/:id', async (req, res) => {
  try {
    const image = await Image3.findByIdAndDelete(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
