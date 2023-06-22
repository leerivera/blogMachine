// blogpost.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');
const BlogPost = require('../models/BlogPost');

// Here you will define your endpoints for creating, reading, updating and deleting blog posts

module.exports = router;
