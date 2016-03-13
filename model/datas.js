var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  section: {type: String, required: true, unique: true},
  content: String
});

mongoose.model('Data', dataSchema);
