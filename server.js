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

app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log('Hey there cowboy your up and running on %s', PORT);
});

//API ROUTES
app.get('/api/items', function(req, res) {
  // use mongoose to get all items in the database
  Items.find(function(err, items) {
    if (err)
      res.send(err);

    res.json(items); // return all items in JSON format
  });
});

app.get('/api/users', function(req, res) {
  // use mongoose to get all users in the database
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users); // return all items in JSON format
  });
});

//frontend routes =========================================================
// route to handle all angular requests
app.get('*', function(req, res) {
  res.send('./views/index.html'); // load our public/index.html file
});
