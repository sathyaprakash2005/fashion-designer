// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/image'); 
const auth1Routes= require('./routes/auth1');
const image1Routes=require('./routes/image1');
const image2Routes=require('./routes/image2');
const image3Routes=require('./routes/image3');
const orderRoutes=require('./routes/order')

const app = express();
const PORT = 5000;
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));


// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // allow React frontend
  methods: ['GET', 'POST','DELETE']
}));
app.use(express.json()); // to parse JSON body

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/registerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


// Routes
app.use('/api', authRoutes);
app.use('/api', imageRoutes);
app.use('/api',auth1Routes);
app.use('/api',image1Routes);
app.use('/api',image2Routes);
app.use('/api',image3Routes);
app.use('/api',orderRoutes);

// Test route (optional)
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const imageSchema1 = new mongoose.Schema({
  image: Buffer,
  contentType: String
});
const imageSchema2 = new mongoose.Schema({
  image1: Buffer,
  contentType: String
});
const imageSchema3 = new mongoose.Schema({
  image2: Buffer,
  contentType: String
});
const imageSchema4 = new mongoose.Schema({
  image3: Buffer,
  contentType: String
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema1);
const Image1 = mongoose.models.Image1 || mongoose.model('Image1',imageSchema2);
const Image2 = mongoose.models.Image2 || mongoose.model('Image2',imageSchema3);
const Image3 = mongoose.models.Image3 || mongoose.model('Image3',imageSchema4);


// ✅ Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Upload route (POST /upload)
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      image: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.json({ message: '✅ Image uploaded successfully!' });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// ✅ View route (GET /images)
app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();

    const formatted = images
      .filter(img => img.image && img.image.toString) // ✅ only images with data
      .map(img => ({
        _id: img._id,
        image: `data:${img.contentType};base64,${img.image.toString('base64')}`
      }));

    res.json(formatted);
  } catch (err) {
    console.error('❌ Error fetching images:', err);
    res.status(500).json({ error: 'Server error while fetching images' });
  }
});
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const deleted = await Image.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/upload-chudi', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image1({
      image1: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.json({ message: '✅ Image uploaded successfully!' });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// ✅ View route (GET /images)
app.get('/images1', async (req, res) => {
  try {
    const images = await Image1.find();

    const formatted = images
      .filter(img => img.image1 && img.image1.toString) // ✅ only images with data
      .map(img => ({
        _id: img._id,
        image: `data:${img.contentType};base64,${img.image1.toString('base64')}`
      }));

    res.json(formatted);
  } catch (err) {
    console.error('❌ Error fetching images:', err);
    res.status(500).json({ error: 'Server error while fetching images' });
  }
});
app.delete('/api/delete1/:id', async (req, res) => {
  try {
    const deleted = await Image1.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/upload-emb', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image2({
      image2: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.json({ message: '✅ Image uploaded successfully!' });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// ✅ View route (GET /images)
app.get('/images2', async (req, res) => {
  try {
    const images = await Image2.find();

    const formatted = images
      .filter(img => img.image2 && img.image2.toString) // ✅ only images with data
      .map(img => ({
        _id: img._id,
        image: `data:${img.contentType};base64,${img.image2.toString('base64')}`
      }));

    res.json(formatted);
  } catch (err) {
    console.error('❌ Error fetching images:', err);
    res.status(500).json({ error: 'Server error while fetching images' });
  }
});
app.delete('/api/delete2/:id', async (req, res) => {
  try {
    const deleted = await Image2.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/upload-nighty', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image3({
      image3: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.json({ message: '✅ Image uploaded successfully!' });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// ✅ View route (GET /images)
app.get('/images3', async (req, res) => {
  try {
    const images = await Image3.find();

    const formatted = images
      .filter(img => img.image3 && img.image3.toString) // ✅ only images with data
      .map(img => ({
        _id: img._id,
        image: `data:${img.contentType};base64,${img.image3.toString('base64')}`
      }));

    res.json(formatted);
  } catch (err) {
    console.error('❌ Error fetching images:', err);
    res.status(500).json({ error: 'Server error while fetching images' });
  }
});
app.delete('/api/delete3/:id', async (req, res) => {
  try {
    const deleted = await Image3.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Start server
app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});