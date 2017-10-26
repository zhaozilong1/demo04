var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.send({
    name: req.body.ues ,
    hua: req.body.val
  });
});

module.exports = router;
