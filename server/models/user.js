 
// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose

//schema

var userSchema = new mongoose.Schema({
  password: String, //todo: hash this
  email: String
})

//return
module.exports = restful.model('Users', userSchema)
