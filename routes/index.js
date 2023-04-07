var express = require('express');
const { genrateToken } = require('../util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/token", function(req, res, next) {
  res.send("token : " + genrateToken("User123456789"));
})


module.exports = router;
