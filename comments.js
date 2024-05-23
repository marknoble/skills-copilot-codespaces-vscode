// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create server
const app = express();
const PORT = 3000;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load data
const data = fs.readFileSync('comments.json');
const comments = JSON.parse(data);

// Define routes
app.get('/', (req, res) => {
  res.render('index', { comments });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/new', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});