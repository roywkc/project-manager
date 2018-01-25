
// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose

//schema

var expertSchema = new mongoose.Schema({
  name: String
})

//return
module.exports = restful.model('Experts', expertSchema)
