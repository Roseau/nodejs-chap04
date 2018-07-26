var express = require('express');
var router = express.Router();

/* GET home page. */
//untuk menangani index
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Math Calculator' });
});

module.exports = router;
