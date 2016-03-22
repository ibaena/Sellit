var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
      type : String,
      required : true,
      unique : true
    },
    password : {
      type : String,
      required : true,
    },
    bank : {
      type : Number,
      default: 0,
      currency: 'USD'
    },
    createdDate : {
      type : Date,
      default : Date.now()
    },
    items: [{
       type : Schema.Types.ObjectId,
        ref : 'Items'
      }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
