const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8000;

const users = [
  {
    username: 'admin',
    password: 'root' 
  }
];

const secretKey = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjMyNTMxNywiaWF0IjoxNzIyMzI1MzE3fQ.J1vnqLdAcv6tMZOVsRy2V3mKP2pl07KZzLDWLQwBhtY';

app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}${ext}`); // Save file as logo, hero, service1, service2, service3, or about with original extension
  },
});
const upload = multer({ storage });

// Middleware to check JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }

  const accessToken = jwt.sign({ username: user.username }, secretKey);
  res.json({ accessToken });
});

// Endpoint to handle logo upload
app.post('/upload-logo', authenticateToken, upload.single('logo'), (req, res) => {
  res.json({ message: 'Logo uploaded successfully', filePath: `/uploads/logo${path.extname(req.file.originalname)}` });
});

// Endpoint to handle hero image upload
app.post('/upload-hero', authenticateToken, upload.single('hero'), (req, res) => {
  res.json({ message: 'Hero image uploaded successfully', filePath: `/uploads/hero${path.extname(req.file.originalname)}` });
});

// Endpoint to handle service images upload
app.post('/upload-service1', authenticateToken, upload.single('service1'), (req, res) => {
  res.json({ message: 'Service 1 image uploaded successfully', filePath: `/uploads/service1${path.extname(req.file.originalname)}` });
});

app.post('/upload-service2', authenticateToken, upload.single('service2'), (req, res) => {
  res.json({ message: 'Service 2 image uploaded successfully', filePath: `/uploads/service2${path.extname(req.file.originalname)}` });
});

app.post('/upload-service3', authenticateToken, upload.single('service3'), (req, res) => {
  res.json({ message: 'Service 3 image uploaded successfully', filePath: `/uploads/service3${path.extname(req.file.originalname)}` });
});

// Endpoint to handle about image upload
app.post('/upload-about', authenticateToken, upload.single('about'), (req, res) => {
  res.json({ message: 'About Us image uploaded successfully', filePath: `/uploads/about${path.extname(req.file.originalname)}` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
