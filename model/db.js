var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bownessdoctorsdb');

module.exports = mongoose;
