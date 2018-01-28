// dependencies
var express = require('express');
var router = express.Router();
var crypto = require('crypto')

// Models
var Project = require('../models/project');
Project.methods(['get','put','post','delete']);
Project.register(router, '/projects');

var User = require('../models/user');
User.methods(['get','post', 'delete']);
User.before('post', hash_password);
User.route('login.post', function(req, res, next) { 
  User.findOne(
    { 'email': req.body.email },
    function (err, user) {
      //todo handle err
      if(err || !user) {
        res.status(404).send("Something broke!");
      } else if (req.body.password == decrypt(user.password)){
        res.send("success");
      } else {
        res.status(500).send("Something broke!");
      }
    }
  );
});
User.register(router, '/users');


var Expert = require('../models/expert');
Expert.methods(['get','post']);
Expert.register(router, '/experts');

module.exports = router;


// Before action functions
function hash_password(req, res, next) {    
  req.body.password = encrypt(req.body.password);
  next();
}

function encrypt(text){
  var algorithm = 'aes-256-ctr';
  var  password = 'd6F3Efeq';
  var cipher = crypto.createCipher(algorithm,password);
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var algorithm = 'aes-256-ctr';
  var  password = 'd6F3Efeq';
  var decipher = crypto.createDecipher(algorithm,password);
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
