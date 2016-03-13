var editButton = "";
if (user) editButton = "<a href='/datas/welcome/edit' class='btn btn-warning'>Edit</a>"

var welcome = function(content) {
  return "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Welcome</strong></h2> \
              <hr> \
              <div>" + content + "</div> \
          </div> \
      </div> \
  </div> \
  <div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'> \
              <!-- <hr> \
              <h2 class='intro-text text-center'><strong>Contact us</strong></h2> \
              <hr> --> \
          </div> \
          <div class='col-md-8'> \
              <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! --> \
              <iframe width='100%' height='400' frameborder='0' style='border:0' \
                src='https://www.google.com/maps/embed/v1/place?q=104-6404%20Bowness%20Road%20NW%20Calgary%2C%20Alberta%20T3B%200E7&key=AIzaSyDNGDchqTodtel2eO-493KbLv4mtFcx4Kw' allowfullscreen></iframe> \
          </div> \
          <div class='col-md-4'> \
              <p>Phone: \
                  <strong>403-288-3733</strong> \
              </p> \
              <p>Fax: \
                  <strong>403-288-8081</strong> \
              </p> \
              <p>Email: \
                  <strong><a href='mailto:info@bownessdoctors.com'>info@bownessdoctors.com</a></strong> \
              </p> \
              <p>Address: \
                  <strong>104-6404 Bowness Road NW \
                      <br>Calgary, Alberta T3B 0E7</strong> \
              </p> \
              <p> \
                We are located in the back of the Hextall Place building. \
                There is free parking and we have wheelchair access. \
              </p> \
              <button class='btn btn-primary contact-us-btn'>Contact Us</button> \
          </div> \
          <div class='clearfix'></div> \
      </div> \
  </div>";
}
// "<div class='row'> \
//     <div class='box'> \
//         <div class='col-lg-12'> \
//             <hr> \
//             <h2 class='intro-text text-center'><strong>Welcome</strong></h2> \
//             <hr> \
//             <!-- <img class='img-responsive img-border img-left' src='dependencies/bootstrap/img/intro-pic.jpg' alt=''> --> \
//             <!-- <hr class='visible-xs'> --> \
//             <p> \
//               <strong>Welcome</strong> to the web site for the office of Dr. Joan Knight and Dr. Lakshmi Visvanatha - Family Physicians. \
//               Our administrative assistants are Deana and Michelle. \
//               Our patients can contact us through this web site for non-urgent appointments and general information regarding our office. \
//             </p> \
//             <br> \
//             <p> \
//               We are pleased to assist the University of Calgary in training future doctors. \
//               With your consent, students may accompany your doctor at the office visit.  We thank you for your consideration. \
//             </p> \
//         </div> \
//     </div> \
// </div> \
// <div class='row'> \
//     <div class='box'> \
//         <div class='col-lg-12'> \
//             <!-- <hr> \
//             <h2 class='intro-text text-center'><strong>Contact us</strong></h2> \
//             <hr> --> \
//         </div> \
//         <div class='col-md-8'> \
//             <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! --> \
//             <iframe width='100%' height='400' frameborder='0' style='border:0' \
//               src='https://www.google.com/maps/embed/v1/place?q=104-6404%20Bowness%20Road%20NW%20Calgary%2C%20Alberta%20T3B%200E7&key=AIzaSyDNGDchqTodtel2eO-493KbLv4mtFcx4Kw' allowfullscreen></iframe> \
//         </div> \
//         <div class='col-md-4'> \
//             <p>Phone: \
//                 <strong>403-288-3733</strong> \
//             </p> \
//             <p>Fax: \
//                 <strong>403-288-8081</strong> \
//             </p> \
//             <p>Email: \
//                 <strong><a href='mailto:info@bownessdoctors.com'>info@bownessdoctors.com</a></strong> \
//             </p> \
//             <p>Address: \
//                 <strong>104-6404 Bowness Road NW \
//                     <br>Calgary, Alberta T3B 0E7</strong> \
//             </p> \
//             <p> \
//               We are located in the back of the Hextall Place building. \
//               There is free parking and we have wheelchair access. \
//             </p> \
//             <button class='btn btn-primary contact-us-btn'>Contact Us</button> \
//         </div> \
//         <div class='clearfix'></div> \
//     </div> \
// </div>";

module.exports = welcome;
