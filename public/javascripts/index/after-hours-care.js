var editButton = "";
if (user) editButton = "<a href='/datas/after-hours-care/edit' class='btn btn-warning'>Edit</a>"

var afterHoursCare = function(content) {
  return "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>After hours</strong></h2> \
              <hr> \
              <div>" + content + "</div> \
          </div> \
      </div> \
  </div>";

}


// "<div class='row'> \
//     <div class='box'> \
//         <div class='col-lg-12'> \
//             <hr> \
//             <h2 class='intro-text text-center'><strong>After hours</strong></h2> \
//             <hr> \
//             <p> \
//               <strong>For emergencies please call 911</strong> \
//             </p> \
//             <br> \
//             <p> \
//               Dr. Knight and Visvanatha are part of the <strong>Calgary Foothills Primary Care Network</strong>. \
//               There is an after hours clinic that is available to our patients and the clinic is called Access 365. \
//               If you are ill during the evenings or weekends and need information or would like to be seen \
//               by a doctor please contact health link at 811. \
//             </p> \
//         </div> \
//     </div> \
// </div>";

module.exports = afterHoursCare;
