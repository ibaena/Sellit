var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
      type : String,
      required : true,
      unique : true
    },
    bank : {
      type : Number,
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
