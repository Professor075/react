// // server.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const multer = require('multer'); // For handling file uploads

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Multer configuration for file uploads
// const upload = multer({ storage: multer.memoryStorage() }); // Store the file in memory as a buffer

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'pet_app'
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Add Pet (with BLOB image upload)
// app.post('/pets', upload.single('photo'), (req, res) => {
//   const { name, breed, age } = req.body;
//   const photoBuffer = req.file ? req.file.buffer : null; // Get the file buffer from multer

//   const query = 'INSERT INTO pets (id,name, breed, age, photo) VALUES (?,?, ?, ?, ?)';
//   db.query(query, [name, breed, age, photoBuffer], (err, result) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send('Pet added successfully');
//   });
// });

// // Get Pets (fetch photo as BLOB)
// app.get('/pets', (req, res) => {
//   const query = 'SELECT id, name, breed, age, photo FROM pets';
//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
    
//     // Convert BLOB to base64-encoded string to send in JSON
//     results.forEach(pet => {
//       if (pet.photo) {
//         pet.photo = Buffer.from(pet.photo).toString('base64');
//       }
//     });

//     res.json(results);
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// server.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const multer = require('multer'); // For handling file uploads

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Multer configuration for file uploads
// const upload = multer({ storage: multer.memoryStorage() }); // Store the file in memory as a buffer

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '28456',
//   database: 'pet_app'
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Add Pet (with BLOB image upload)
// app.post('/pets', upload.single('photo'), (req, res) => {
//   const { name, breed, age } = req.body;
//   const photoBuffer = req.file ? req.file.buffer : null; // Get the file buffer from multer

//   const query = 'INSERT INTO pets (id,name, breed, age, photo) VALUES (?,?, ?, ?, ?)';
//   db.query(query, [id,name, breed, age, photoBuffer], (err, result) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send('Pet added successfully');
//   });
// });

// // Get Pets (fetch photo as BLOB)
// app.get('/pets', (req, res) => {
//   const query = 'SELECT id, name, breed, age, photo FROM pets';
//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
    
//     // Convert BLOB to base64-encoded string to send in JSON
//     results.forEach(pet => {
//       if (pet.photo) {
//         pet.photo = Buffer.from(pet.photo).toString('base64');
//       }
//     });

//     res.json(results);
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer'); // For handling file uploads

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Multer configuration for file uploads
const upload = multer({ storage: multer.memoryStorage() }); // Store the file in memory as a buffer

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // MySQL host
  user: 'root', // MySQL username
  password: '', // MySQL password
  database: 'pet_app' // MySQL database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Add Pet (with BLOB image upload)
app.post('/pets', upload.single('photo'), (req, res) => {
  const { name, breed, age } = req.body;
  const photoBuffer = req.file ? req.file.buffer : null; // Get the file buffer from multer

  // Ensure that id is auto-incremented in MySQL, so we should not pass it here
  const query = 'INSERT INTO pets (name, breed, age, photo) VALUES (?, ?, ?, ?)';
  db.query(query, [name, breed, age, photoBuffer], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Pet added successfully');
  });
});

// Get Pets (fetch photo as BLOB)
app.get('/pets', (req, res) => {
  const query = 'SELECT id, name, breed, age, photo FROM pets';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    // Convert BLOB to base64-encoded string to send in JSON
    results.forEach(pet => {
      if (pet.photo) {
        pet.photo = Buffer.from(pet.photo).toString('base64'); // Convert BLOB to base64
      }
    });

    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
