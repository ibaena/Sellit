var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

var bodyParser = require('body-parser'),
  db = require('./config/mongoose'),
  morgan = require('morgan'),
  User = require('./models/user'),
  Items = require('./models/items');


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());

//SERVE FILES DIRs
app.use('/public', express.static(__dirname + "/public"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/controllers', express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/views"));
app.use("/views", express.static(__dirname + "/views"));


app.listen(PORT, function() {
  console.log('Hey there cowboy your up and running on %s', PORT);
});


app.get('/', function(req, res) {
  res.send('/views/index.html');
});
