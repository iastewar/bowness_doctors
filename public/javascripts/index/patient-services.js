var editButton = "";
if (user) editButton = "<a href='/datas/patient-services/edit' class='btn btn-warning'>Edit</a>"

var patientServices = function(content) {
  return "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Patient Services</strong></h2> \
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
//             <h2 class='intro-text text-center'><strong>Patient Services</strong></h2> \
//             <hr> \
//             <p> \
//               <strong>Behavior Health Consultant</strong><br> \
//               Our team has a behavioral health consultant who is available to discus your health concerns and \
//               provide short term support. Meet with the BHC for help with: \
//             </p> \
//             <ul> \
//               <li>Coping with loss</li> \
//               <li>Motivation for lifestyle changes</li> \
//               <li>Managing stress, anxiety, or depression</li> \
//               <li>Advice on care giving, parenting or relationships.</li> \
//             </ul> \
//             <p> \
//               Talk with your doctor about how the BHC can support you. \
//               Rhoda is our BHC and  is in our office on Tuesday mornings. A visit with her can be booked through our office by phone or email. There is no extra fee to see Rhoda. \
//               <strong>Please contact us if you need to cancel an existing appointment with Rhoda.</strong> \
//             </p> \
//             <br> \
//             <p> \
//               Dr. Visvanatha and Dr. Knight are affiliated with the <strong>Calgary Foothills Primary Care Network</strong>. \
//               You can view their website at <a href='https://cfpcn.ca/'>CFPCN.ca</a>. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Resources</strong><br> \
//               <a href='resources/Addictions_1_.pdf'>Addictions support group</a><br> \
//               <a href='resources/Counceling_1_.pdf'>Counceling resources in Calgary</a><br> \
//               <a href='resources/physio_1_.pdf'>Physiotherapy clinics in Calgary</a><br> \
//               <a href='https://myhealth.alberta.ca/'>myhealth.alberta.ca</a> is the new website by Alberta Health Services \
//                 with lots of information! \
//             </p> \
//         </div> \
//     </div> \
// </div>";

module.exports = patientServices;
