var express = require('express');
var router = express.Router();

router.get('/projects', function(req,res){
  res.send('project api')
});

module.exports = router;