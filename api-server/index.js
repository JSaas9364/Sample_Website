const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./data.db');

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )`);
  

// Get all messages
app.get('/api/messages', (req, res) => {
  db.all('SELECT * FROM messages', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a new message
// Add a message
app.post('/api/messages', (req, res) => {
    const { name, email, message } = req.body;
    db.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, name, email, message });
    });
  });
  

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
