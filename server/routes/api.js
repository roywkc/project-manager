// dependencies
var express = require('express');
var router = express.Router();

// Models
var Project = require('../models/project');
Project.methods(['get','put','post','delete']);
Project.register(router, '/projects');

var User = require('../models/user');
User.methods(['get','post']);
User.register(router, '/users');

var Expert = require('../models/expert');
Expert.methods(['get','post']);
Expert.register(router, '/experts');

module.exports = router;