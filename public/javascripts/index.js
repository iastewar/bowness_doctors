var welcome = require('./index/welcome');
var contactUs = require('./index/contact-us');
var afterHoursCare = require('./index/after-hours-care');
var officeHours = require('./index/office-hours');
var officePolicy = require('./index/office-policy');
var patientServices = require('./index/patient-services');
var uninsuredServices = require('./index/uninsured-services');
// var aboutUs = require('./index/about-us');

var setInitialPage = function() {
  setPage(page);
}

var setPage = function(p) {
  switch (p) {
    case "welcome":
      welcomeBtn();
      break;
    case "contact-us":
      contactUsBtn();
      break;
    case "office-hours":
      officeHoursBtn();
      break;
    case "after-hours-care":
      afterHoursBtn();
      break;
    case "patient-services":
      patientServicesBtn();
      break;
    case "uninsured-services":
      uninsuredServicesBtn();
      break;
    case "office-policy":
      officePolicyBtn();
      break;
  }
}

var toggleSmallNavbar = function() {
  if ($(".navbar-toggle").css("display") !== "none")
    $(".navbar-toggle").trigger("click");
}

var welcomeBtn = function() {
  toggleSmallNavbar();
  $("#container").html(welcome);
}

var contactUsBtn = function() {
  toggleSmallNavbar();
  $("#container").html(contactUs);
}

var officeHoursBtn = function() {
  toggleSmallNavbar();
  $("#container").html(officeHours);
}

var afterHoursBtn = function() {
  toggleSmallNavbar();
  $("#container").html(afterHoursCare);
}

var patientServicesBtn = function() {
  toggleSmallNavbar();
  $("#container").html(patientServices);
}

var uninsuredServicesBtn = function() {
  toggleSmallNavbar();
  $("#container").html(uninsuredServices);
}

var officePolicyBtn = function() {
  toggleSmallNavbar();
  $("#container").html(officePolicy);
}

window.onpopstate = function(e) {
  if(e.state){
    document.getElementById('container').innerHTML = e.state.html;
    document.title = e.state.pageTitle;
  }
};

$(function() {
  setInitialPage();

  $("#menu-toggle").on("click", function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $(".welcome-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    welcomeBtn();
    document.title = "Bowness Doctors";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors"},"", "/");
  });

  $(document).on("click", ".contact-us-btn", function(e) {
    e.preventDefault();

    $("#messages").html("");
    contactUsBtn();
    document.title = "Bowness Doctors - Contact Us";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - Contact Us"},"", "/contact-us");
  });

  $(".office-hours-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    officeHoursBtn();
    document.title = "Bowness Doctors - Office Hours";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - Office Hours"},"", "/office-hours");
  });

  $(".after-hours-care-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    afterHoursBtn();
    document.title = "Bowness Doctors - After Hours Care";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - After Hours Care"},"", "/after-hours-care");
  });

  $(".patient-services-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    patientServicesBtn();
    document.title = "Bowness Doctors - Patient Services";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - Patient Services"},"", "/patient-services");
  });

  $(".uninsured-services-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    uninsuredServicesBtn();
    document.title = "Bowness Doctors - Uninsured Services";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - Uninsured Services"},"", "/uninsured-services");
  });

  $(".office-policy-btn").on("click", function(e) {
    e.preventDefault();

    $("#messages").html("");
    officePolicyBtn();
    document.title = "Bowness Doctors - Office Policy";
    window.history.pushState({"html": document.getElementById('container').innerHTML, "pageTitle": "Bowness Doctors - Office Policy"},"", "/office-policy");
  });
});
