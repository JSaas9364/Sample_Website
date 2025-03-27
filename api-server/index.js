// Import required libraries
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Initialize express app
const app = express();
const port = 3001;
const SECRET = 'supersecretkey'; // Change this in production

// Middleware
app.use(express.json());
app.use(cors());

// Initialize SQLite Databases
const dataDb = new sqlite3.Database('./data.db'); // For form submissions
const authDb = new sqlite3.Database('./auth.db'); // For authentication

// Create tables if they don't exist in `data.db`
dataDb.run(`CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT
)`);

// Create tables if they don't exist in `auth.db`
authDb.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)`);

// JWT Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// User Registration Route
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    // Insert the new user into the `auth.db` database
    authDb.run(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword],
      function (err) {
        if (err) {
          if (err.code === 'SQLITE_CONSTRAINT') {
            return res.status(400).json({ message: 'Username already exists' });
          }
          return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  });
});

// Login Route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the `auth.db` database
  authDb.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err || !row) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare entered password with the hashed password in the database
    bcrypt.compare(password, row.password, (err, match) => {
      if (err || !match) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: row.id }, SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

// Get all messages (protected route)
app.get('/api/messages', authenticateToken, (req, res) => {
  dataDb.all('SELECT * FROM messages', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a new message
app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body;
  dataDb.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email, message });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});