var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/display/:message', function(req, res, next) {
  var message = req.params.message;
  console.log(message);
  res.render('index', { title: message });
});

module.exports = router;
