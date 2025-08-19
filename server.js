const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();

app.use(logger('dev'));
// Process data in body of request if 
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());

// Configure both serve favicon and static files when built
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the build folder
  app.use(express.static(path.join(__dirname, 'build')));
}

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));

// Protect all routes in the items and orders routers
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
