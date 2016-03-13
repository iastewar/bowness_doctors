var express = require('express');
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser') ;//parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// route middleware to make sure user is logged in
var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}


var getDataSection = function(section, callback) {
  mongoose.model('Data').findOne({section: section}, function(err, data) {
    if (err || !data) {
      console.log(err);
      callback();
    } else {
      callback(data);
    }
  });
}

router.get('/:section/edit', isLoggedIn);

router.get('/:section/edit', function(req, res, next) {
  getDataSection(req.params.section, function(data) {
    res.render('datas/edit', {user: req.user, title: 'Edit Office Hours', data: data})
  });
});

router.put('/:section/edit', function(req, res, next) {
  var content = req.body.content;
  mongoose.model('Data').update({section: req.params.section}, {$set: {content: content}}, function(err, data) {
    if (err) {
      console.log(err);
      req.flash('errorMessage', 'Error: There was a problem updating the information in the database');
    } else {
      req.flash('successMessage', 'Succussfully updated ' + req.params.section);
    }
    if (req.params.section === "welcome") res.redirect('/');
    else res.redirect('/' + req.params.section);
  });
});

module.exports = router;
