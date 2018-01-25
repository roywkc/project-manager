
// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose

//schema

var projectSchema = new mongoose.Schema({
  name: String,
  experts: Array,
  startDate: Date,
  status: String
})

//return
module.exports =restful.model('Projects', projectSchema)
