var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.get('/', function(req, res){
  res.send("hello world")
})

app.listen(3000);
console.log('running on 3000')