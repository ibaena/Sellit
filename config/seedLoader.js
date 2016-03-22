//THIS IS ONLY INTENED TO LOAD SEED DATA RUN BY ITSELF

var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost:27017/sellit');

var User = require('../models/user');
var Items = require('../models/items');

// Now, the interesting part:
data = [{
  "username": "Zorro",
  "password": "abc123",
  "bank": 100,
  "items":[]
}, {
  "username": "Superman",
  "password": "abc123",
  "bank": 2000,
  "items":[]
}, {
  "username": "Batman",
  "password": "abc123",
  "bank": 4500,
  "items":[]
}, {
  "username": "The Joker",
  "password": "abc123",
  "bank": 20,
  "items":[]
}, {
  "username": "Micky",
  "password": "Jennifer_Jerome",
  "bank": 600,
  "items":[]
}, {
  "username": "Bruce",
  "password": "bruce",
  "bank": 90,
  "items":[]
}, {
  "username": "Shaggy Rogers",
  "password": "Shaggy",
  "bank": 5,
  "items":[]
}, {
  "username": "Fred Rubble",
  "password": "Rubble",
  "bank": 230,
  "items":[]
}, {
  "username": "Space Ghost",
  "password": "Xhou_Ta",
  "bank": 10000,
  "items":[]
}]


;

User.collection.insert(data, function(err, r) {
  console.log('Successfully loaded Seed Data!');
});
