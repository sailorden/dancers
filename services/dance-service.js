var Dance = require('../models/dance');

exports.addDance = function (dance, next) {
  var newDance = new Dance({
  });

  newDance.save(function(err) {
    if (err) {
      return next(err);
    }
  });

  next(null)
};
