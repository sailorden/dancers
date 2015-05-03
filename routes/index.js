var db = require( '../db' ); //Mongo
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var request = require('request');
var moment = require('moment');

// Include Mongoose Schema
var Dance = require('../models/dance');
// var danceService = require('../services/dance-service');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('views/index.html', { title: 'dancers app' });
});

router.get('/api', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


// Return json from mongo database
router.get('/dances/am', getAllAmDances);
router.get('/dances/intl', getAllIntlDances);

function getAllAmDances(req, res) {
  Dance.American.find({}, { _id:0 }, function (err, docs) {
      if (err) throw err;
      res.render('views/index.html', { title:"American", dances:docs });
    });
}

function getAllIntlDances(req, res) {
  Dance.International.find({}, { _id:0 }, function (err, docs) {
      if (err) throw err;
      res.render('views/index.html', { title:"International", dances:docs });
    });
}

module.exports = router;
