var mongoose = require('mongoose');
mongoose.set('debug', true);

//Mongo
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/dances';

mongoose.connect(uristring, function (err) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var db = mongoose.connection;
