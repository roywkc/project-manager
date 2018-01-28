
// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose

//schema

var projectSchema = new mongoose.Schema({
  name: String,
  experts: Object, //todo solve http issue where arrayOfHash isnt rendered correctly
  startDate: Date,
  status: String
})

//return
module.exports = restful.model('Projects', projectSchema)
