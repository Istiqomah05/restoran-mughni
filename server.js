const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_restoran_mughni'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected');
});

// API Endpoint: Ambil data menu
app.get('/menu', (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Selamat datang di Restoran Mughni! Silakan akses /menu untuk melihat daftar menu.');
  });