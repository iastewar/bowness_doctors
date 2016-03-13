var editButton = "";
if (user) editButton = "<a href='/datas/uninsured-services/edit' class='btn btn-warning'>Edit</a>"

var uninsuredServices = function(content) {
  return "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Uninsured Services</strong></h2> \
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
//             <h2 class='intro-text text-center'><strong>Uninsured Services</strong></h2> \
//             <hr> \
//             <p> \
//               <strong>Uninsured Services</strong><br> \
//               Not all services that are performed by your family doctor are paid by Alberta Health care. \
//               Examples of these services are sick notes, parking forms, drivers medical forms, tax forms, \
//               Telephone prescription to pharmacies, return to work forms, and employer disability forms and others. \
//               Payment can be made individually after these services are performed or you may wish to purchase a plan \
//               (individual or family)  that will cover these services for a year. \
// ​                          Please contact the office for information and to join the plan. \
//             </p> \
//             <br> \
//             <p> \
//             <a href='resources/Unisured_Services_Plan_2015.pdf'>Uninsured Services Plan</a><br> \
//             </p> \
//         </div> \
//     </div> \
// </div>";

module.exports = uninsuredServices;
