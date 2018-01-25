// dependencies
var express = require('express');
var router = express.Router();

// Models
var Project = require('../models/project');

Project.methods(['get','put','post','delete']);
Project.register(router, '/projects');

module.exports = router;