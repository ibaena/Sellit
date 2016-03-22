var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

var bodyParser = require('body-parser'),
  db = require('./config/mongoose'),
  morgan = require('morgan'),
  session = require('express-session'),
  passport = require('passport'),
  passport = require('./config/passport'),
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

//CREATE SECRET FOR USER LOGIN
app.use(session({
  secret: 'DarkKnight',
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 10
  },
  saveUninitialized: true,
  resave: true
}));

//PASSPORT INITIALIZE
app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, function() {
  console.log('Hey there cowboy your up and running on %s', PORT);
});

//API ROUTES
app.get('/api/items', function(req, res) {
  Items.find(function(err, items) {
    if (err)
      res.send(err);
    res.json(items);
  });
});

app.get('/api/users', function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
});

//REGISTER
app.post('/register', passport.authenticate('local-signup'), function(req, res) {
  res.send(req.user);
});

//LOGIN
app.post('/login', passport.authenticate('local-login'), function(req, res) {
  res.send(req.user);
});

//UPDATE BANK
app.post('/updatebank/:id', function(req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    bank: req.body.bank
  }, {
    new: true
  }, function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(doc);
      res.send(doc);
    }
  });
});

//frontend routes =========================================================
// route to handle all angular requests
app.get('*', function(req, res) {
  res.send('./views/index.html'); // load public/index.html file
});
