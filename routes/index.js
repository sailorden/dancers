var express = require('express');
var router = express.Router();

var _ = require('lodash');
var request = require('request');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('views/index.html', { title: 'dancers app' });
});

module.exports = router;
