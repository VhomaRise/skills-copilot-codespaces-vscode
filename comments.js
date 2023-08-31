// Create web server to handle comments
//
// ------------------------------------------------

// Import required modules
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// Read comments from json file
var commentsPath = path.join(__dirname, '../data/comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

// Add body-parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET /comments
router.get('/', function(req, res, next) {
  res.json(comments);
});

// POST /comments
router.post('/', function(req, res, next) {
  var newComment = {
    id: Date.now(),