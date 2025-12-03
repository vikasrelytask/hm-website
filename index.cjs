// backend/index.js
// load backend.env explicitly so local env file `backend.env` is used
require('dotenv').config({ path: './backend.env' });
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// simple root + health
app.get('/', (req, res) => {
  res.send('API server running. Try /api/ping or /api/contact (GET/POST)');
});
app.get('/api/ping', (req, res) => res.json({ ok: true }));

// DB connection using .env
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'hminnovation.in',
  user: process.env.DB_USER || 'u573887888_HMMAINDB',
  password: process.env.DB_PASS || 'Vikas@7727',
  database: process.env.DB_NAME || 'u573887888_HMMAINDB',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

db.connect((err) => {
  if (err) {
    console.error('DB Connection Error:', err);
    return;
  }
  console.log('MySQL Connected');
});

/**
 * GET /api/contact
 * Returns all contact rows (ordered by date desc)
 */
app.get('/api/contact', (req, res) => {
  const sql = 'SELECT * FROM contact ORDER BY date DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('DB error (GET /api/contact):', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

/**
 * POST /api/contact
 * Expects JSON body: { name, email, phone_no, company, message }
 */
app.post('/api/contact', (req, res) => {
  const { name, email, phone_no, company, message } = req.body;

  // basic validation
  if (!name || !email || !phone_no || !company || !message) {
    return res.status(400).json({ error: 'All fields required: name, email, phone_no, company, message' });
  }

  const sql = `INSERT INTO contact (name, email, phone_no, company, message) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, email, phone_no, company, message], (err, result) => {
    if (err) {
      console.error('DB error (POST /api/contact):', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, id: result.insertId });
  });
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Backend running on http://hminnovation.in:${PORT}`);
});

