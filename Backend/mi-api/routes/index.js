var express = require('express');
var router = express.Router();

/* GET Main Path */
router.get('/', function(req, res, next) {
  res.json({message: 'Welcome to the API'});
});

module.exports = router;
