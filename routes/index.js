var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/log', function(req, res, next) {
  console.log("Someone saw this comment");
  console.log(req);
  res.send(200);
});

module.exports = router;
