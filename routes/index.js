var express = require('express');
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser') ;//parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var nodemailer = require('nodemailer');
var multer  = require('multer');
var fs = require('fs');
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

var storage = multer.diskStorage({
  destination: 'public/resources',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage, limits: {files: 1, fileSize: 26214400} });



// mongoose.model('Data').create({section: 'welcome', content: '<div>Welcome</div>'});
// mongoose.model('Data').create({section: 'after-hours-care', content: '<div>After Hours Care</div>'});
// mongoose.model('Data').create({section: 'office-hours', content: '<div>Office Hours</div>'});
// mongoose.model('Data').create({section: 'office-policy', content: '<div>Office Policy</div>'});
// mongoose.model('Data').create({section: 'patient-services', content: '<div>Patient Services</div>'});
// mongoose.model('Data').create({section: 'uninsured-services', content: '<div>Uninsured Services</div>'});

// route middleware to make sure user is logged in
var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}

var getData = function(callback) {
  mongoose.model('Data').find({}, function(err, datas) {
    if (err) {
      console.log(err);
      callback();
    } else {
      callback(datas);
    }
  });
}

var attrs = function(req, additional) {
  var ret = {user: req.user, doctor: '', name: '', email: '', phone: '', message: '', errorMessage: req.flash('errorMessage'), successMessage: req.flash('successMessage')};
  for (var key in additional) {
    if (additional.hasOwnProperty(key)) {
      ret[key] = additional[key];
    }
  }
  return ret;
}

/* GET welcome page. */
router.get('/', function(req, res, next) {
  getData(function(data) {
    res.format({
      html: function() {
        res.render('index', attrs(req, {title: 'Bowness Doctors', page: 'welcome'}));
      },
      json: function() {
        res.json({data: data});
      }
    });
  });
});

router.get('/contact-us', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - Contact Us', page: 'contact-us'}));
  });
});

router.get('/office-hours', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - Office Hours', page: 'office-hours'}));
  });
});

router.get('/after-hours-care', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - After Hours Care', page: 'after-hours-care'}));
  });
});

router.get('/patient-services', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - Patient Services', page: 'patient-services'}));
  });
});

router.get('/uninsured-services', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - Uninsured Services', page: 'uninsured-services'}));
  });
});

router.get('/office-policy', function(req, res, next) {
  getData(function(data) {
    res.render('index', attrs(req, {title: 'Bowness Doctors - Office Policy', page: 'office-policy'}));
  });
});

router.post('/contact', function(req, res) {
  var doctor = req.body.doctor;
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;

  if (!(doctor && name && email && phone && message)) {
    res.render('index', { user: req.user, title: 'Bowness Doctors - Contact Us', page: 'contact-us', doctor: doctor, name: name, email: email, phone: phone, message: message, errorMessage: 'All fields must be filled in', successMessage: ''});
    return;
  }

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'test@test.com',
      pass: 'test'
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: name + ' <' + email + '>',
      to: 'iastewar555@gmail.com',
      subject: 'Website Submission',
      text: 'You have received an email submission with the following details:\n' +
            'Doctor: ' + doctor + '\n' +
            'Name: ' + name + '\n' +
            'Email Address: ' + email + '\n' +
            'Phone Number: ' + phone + '\n' +
            'Message: ' + message,
      html: '<p>You have received an email submission with the following details:</p>' +
            '<p><strong>Doctor</strong>: ' + doctor + '</p>' +
            '<p><strong>Name</strong>: ' + name + '</p>' +
            '<p><strong>Email Address</strong>: ' + email + '</p>' +
            '<p><strong>Phone Number</strong>: ' + phone + '</p>' +
            '<p><strong>Message</strong>: ' + message + '</p>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
          req.flash('errorMessage', 'Error: the email was not sent. It seems there was a server side problem.');
      } else {
        console.log('Email Sent: ' + info.response);
        req.flash('successMessage', 'Your email has been sent!');
      }
      res.redirect('/');
  });
});

// for admins editing specific things on site (no need for signup)
router.get('/login', function(req, res) {
  res.status("unauthenticated");
  res.format({
    html: function() {
      res.render('users/login.ejs', { title: 'Login', message: req.flash('loginMessage'), user: req.user});
    },
    json: function() {
      res.json({user: req.user});
    }
  });
});

////////// make sure to comment this out in production
router.get('/signup', function(req, res) {
  res.format({
    html: function() {
      res.render('users/signup.ejs', { title: 'Signup', message: req.flash('signupMessage'), user: req.user});
    },
    json: function() {
      res.json({user: req.user});
    }
  });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));
//////////

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/upload', isLoggedIn);

router.post('/upload', upload.single('upload'), function(req, res) {
  if (!req.file) {
    req.flash('errorMessage', 'Error: file was not uploaded. No file was selected.');
  } else {
    req.flash('successMessage', 'File was uploaded!');
  }
  res.redirect('/resources');
});

router.get('/resources', isLoggedIn);

router.get('/resources', function(req, res) {
  fs.readdir('public/resources', function(err, fileNames) {
    res.render('resources', {user: req.user, title: 'Resources', fileNames: fileNames, errorMessage: req.flash('errorMessage'), successMessage: req.flash('successMessage')});
  });
});

router.delete('/resources/:name', isLoggedIn);

router.delete('/resources/:name', function(req, res) {
  var path = 'public/resources/' + req.params.name;

  fs.unlink(path, function() {
    res.format({
      html: function() {
        req.flash('successMessage', 'File was deleted!');
        res.redirect('/resources');
      },
      json: function() {
        res.json({deleted: true});
      }
    });
  });

});


module.exports = router;
