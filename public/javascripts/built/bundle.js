!function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n=o(7),s=o(2),a=o(1),i=o(3),r=o(4),c=o(5),l=o(6),d=function(){u(page)},u=function(t){switch(t){case"welcome":h();break;case"contact-us":m();break;case"office-hours":f();break;case"after-hours-care":p();break;case"patient-services":g();break;case"uninsured-services":b();break;case"office-policy":w()}},v=function(){"none"!==$(".navbar-toggle").css("display")&&$(".navbar-toggle").trigger("click")},h=function(){v(),$("#container").html(n)},m=function(){v(),$("#container").html(s)},f=function(){v(),$("#container").html(i)},p=function(){v(),$("#container").html(a)},g=function(){v(),$("#container").html(c)},b=function(){v(),$("#container").html(l)},w=function(){v(),$("#container").html(r)};window.onpopstate=function(t){t.state&&(document.getElementById("container").innerHTML=t.state.html,document.title=t.state.pageTitle)},$(function(){d(),$("#menu-toggle").on("click",function(t){t.preventDefault(),$("#wrapper").toggleClass("toggled")}),$(".welcome-btn").on("click",function(){$("#messages").html(""),h(),document.title="Bowness Doctors",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors"},"","/")}),$(document).on("click",".contact-us-btn",function(){$("#messages").html(""),m(),document.title="Bowness Doctors - Contact Us",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - Contact Us"},"","/contact-us")}),$(".office-hours-btn").on("click",function(){$("#messages").html(""),f(),document.title="Bowness Doctors - Office Hours",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - Office Hours"},"","/office-hours")}),$(".after-hours-care-btn").on("click",function(){$("#messages").html(""),p(),document.title="Bowness Doctors - After Hours Care",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - After Hours Care"},"","/after-hours-care")}),$(".patient-services-btn").on("click",function(){$("#messages").html(""),g(),document.title="Bowness Doctors - Patient Services",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - Patient Services"},"","/patient-services")}),$(".uninsured-services-btn").on("click",function(){$("#messages").html(""),b(),document.title="Bowness Doctors - Uninsured Services",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - Uninsured Services"},"","/uninsured-services")}),$(".office-policy-btn").on("click",function(){$("#messages").html(""),w(),document.title="Bowness Doctors - Office Policy",window.history.pushState({html:document.getElementById("container").innerHTML,pageTitle:"Bowness Doctors - Office Policy"},"","/office-policy")})})},function(t,e){var o="";user&&(o="<a href='/datas/after-hours-care/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>After hours</strong></h2> 	              <hr> 	              <div>"+data["after-hours-care"]+"</div> 	          </div> 	      </div> 	  </div>";t.exports=n},function(t,e){var o=function(){return doctor?"Dr. Lakshmi Visvanatha"===doctor?"<select name='doctor' class='form-control'> 	        <option disabled hidden style='display: none' value=''></option> 	        <option value='Dr. Joan Knight'>Dr. Joan Knight</option> 	        <option selected value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> 	      </select>":"<select name='doctor' class='form-control'> 	        <option disabled hidden style='display: none' value=''></option> 	        <option selected value='Dr. Joan Knight'>Dr. Joan Knight</option> 	        <option value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> 	      </select>":"<select name='doctor' class='form-control'> 	      <option selected disabled hidden style='display: none' value=''></option> 	      <option value='Dr. Joan Knight'>Dr. Joan Knight</option> 	      <option value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> 	    </select>"},n="<div id='contact-form' class='row'> 	    <div class='box'> 	        <div class='col-lg-12'> 	            <hr> 	            <h2 class='intro-text text-center'><strong>Contact us</strong></h2> 	            <hr> 	            <p> 	              Please contact us at 403-288-3733 or send us an email using the contact form below. 	              Emails can be used for requesting non-urgent appointments only.  Please use the following form and do not send 	              private medical information via email. 	            </p> 	            <br> 	            <form action='/contact' method='post'> 	                <div class='row'> 	                    <div class='form-group col-lg-3'> 	                      <label>Doctor</label>"+o()+"</div> 	                    <div class='form-group col-lg-3'> 	                        <label>Name</label> 	                        <input type='text' name='name' class='form-control' value='"+name+"'> 	                    </div> 	                    <div class='form-group col-lg-3'> 	                        <label>Email Address</label> 	                        <input type='email' name='email' class='form-control' value='"+email+"'> 	                    </div> 	                    <div class='form-group col-lg-3'> 	                        <label>Phone Number</label> 	                        <input type='tel' name='phone' class='form-control' value='"+phone+"'> 	                    </div> 	                    <div class='clearfix'></div> 	                    <div class='form-group col-lg-12'> 	                        <label>Message</label> 	                        <textarea name='message' class='form-control' rows='6'>"+message+"</textarea> 	                    </div> 	                    <div class='form-group col-lg-12'> 	                        <input type='hidden' name='save' value='contact'> 	                        <button type='submit' class='btn btn-primary'>Submit</button> 	                    </div> 	                </div> 	            </form> 	        </div> 	    </div> 	</div>";t.exports=n},function(t,e){var o="";user&&(o="<a href='/datas/office-hours/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>Office hours</strong></h2> 	              <hr> 	              <div>"+data["office-policy"]+"</div> 	          </div> 	      </div> 	  </div>";t.exports=n},function(t,e){var o="";user&&(o="<a href='/datas/office-policy/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>Office policy</strong></h2> 	              <hr> 	              <div>"+data["office-policy"]+"</div> 	          </div> 	      </div> 	  </div>";t.exports=n},function(t,e){var o="";user&&(o="<a href='/datas/patient-services/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>Patient Services</strong></h2> 	              <hr> 	              <div>"+data["patient-services"]+"</div> 	          </div> 	      </div> 	  </div>";t.exports=n},function(t,e){var o="";user&&(o="<a href='/datas/uninsured-services/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>Uninsured Services</strong></h2> 	              <hr> 	              <div>"+data["uninsured-services"]+"</div> 	          </div> 	      </div> 	  </div>";t.exports=n},function(t,e){var o="";user&&(o="<a href='/datas/welcome/edit' class='btn btn-warning'>Edit</a>");var n="<div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'>"+o+"<hr> 	              <h2 class='intro-text text-center'><strong>Welcome</strong></h2> 	              <hr> 	              <div>"+data.welcome+"</div> 	          </div> 	      </div> 	  </div> 	  <div class='row'> 	      <div class='box'> 	          <div class='col-lg-12'> 	              <!-- <hr> 	              <h2 class='intro-text text-center'><strong>Contact us</strong></h2> 	              <hr> --> 	          </div> 	          <div class='col-md-8'> 	              <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! --> 	              <iframe width='100%' height='400' frameborder='0' style='border:0' 	                src='https://www.google.com/maps/embed/v1/place?q=104-6404%20Bowness%20Road%20NW%20Calgary%2C%20Alberta%20T3B%200E7&key=AIzaSyDNGDchqTodtel2eO-493KbLv4mtFcx4Kw' allowfullscreen></iframe> 	          </div> 	          <div class='col-md-4'> 	              <p>Phone: 	                  <strong>403-288-3733</strong> 	              </p> 	              <p>Fax: 	                  <strong>403-288-8081</strong> 	              </p> 	              <p>Email: 	                  <strong><a href='mailto:info@bownessdoctors.com'>info@bownessdoctors.com</a></strong> 	              </p> 	              <p>Address: 	                  <strong>104-6404 Bowness Road NW 	                      <br>Calgary, Alberta T3B 0E7</strong> 	              </p> 	              <p> 	                We are located in the back of the Hextall Place building. 	                There is free parking and we have wheelchair access. 	              </p> 	              <button class='btn btn-primary contact-us-btn'>Contact Us</button> 	          </div> 	          <div class='clearfix'></div> 	      </div> 	  </div>";t.exports=n}]);