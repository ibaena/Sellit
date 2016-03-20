var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var itemSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

var Items = mongoose.model('Items', itemSchema);
module.exports = Items;
