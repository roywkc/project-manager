//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoDB
mongoose.connect('mongodb://localhost/testdb');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//api routing
app.use('/api', require('./server/routes/api'));

//angular routing
app.get('*', function(req, res) {
  res.sendfile('./app/views/index.html');
});

//server
app.listen(3000);
console.log('running on 3000');