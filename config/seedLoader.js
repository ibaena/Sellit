var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost:27017/sellit');

var User = require('../models/user');
var Items = require('../models/items');

// Now, the interesting part:
data = [{
  "amount": 25,
  "name": "Harry Potter",
  "type": "Book",
  "description": "Best Book Series ever!",
  "rating": "4.8/5",
  "available": true
}, {
  "amount": 100,
  "name": "Hulk hogan",
  "type": "Wrestler",
  "description": "Best Wrestler ever!",
  "rating": "4/5",
  "available": true
}, {
  "amount": 78,
  "name": "Vacumm",
  "type": "appliance",
  "description": "Best Vacumm ever!",
  "rating": "4.4/5",
  "available": true
}, {
  "amount": 10,
  "name": "Gatorade",
  "type": "Drink",
  "description": "Best Sports Drink ever!",
  "rating": "4.7/5",
  "available": true
}, {
  "amount": 600,
  "name": "Computer",
  "type": "Computer",
  "description": "Best Computer ever!",
  "rating": "4.2/5",
  "available": true
},{
  "amount": 1000,
  "name": "Golf Kart",
  "type": "Auto",
  "description": "Best Golf cart ever!",
  "rating": "4.8/5",
  "available": true
}, {
  "amount": 5,
  "name": "Glasses",
  "type": "accessories",
  "description": "Best Glasses ever!",
  "rating": "3.5/5",
  "available": true
},{
  "amount": 12,
  "name": "Jeans",
  "type": "clothes",
  "description": "Best Jeans ever!",
  "rating": "4.8/5",
  "available": true
}]

;

Items.collection.insert(data, function(err, r) {
  console.log('Successfully loaded Seed Data!');
});
