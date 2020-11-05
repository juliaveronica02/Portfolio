var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', taskSchema);