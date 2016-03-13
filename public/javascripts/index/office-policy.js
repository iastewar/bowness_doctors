var editButton = "";
if (user) editButton = "<a href='/datas/office-policy/edit' class='btn btn-warning'>Edit</a>"

var officePolicy = function(content) {
  return "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Office policy</strong></h2> \
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
//             <h2 class='intro-text text-center'><strong>Office policy</strong></h2> \
//             <hr> \
//             <p> \
//              At the present time, we are not taking new patients. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Appointments</strong> can be made by e-mail for non-urgent problems, annual health exam, or medication refills for Dr. Visvanatha and Dr. Knight. \
//               Please send us an email with your name and email address, your preference for appointment date and time, and your doctor. \
//               We will try to accommodate your needs and contact you by email or phone with an appointment. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Medication refills</strong>: We prefer to refill medications at your office visit. \
//               If you are absolutely unable to come in, than occasionly a prescription can be faxed \
//               to your pharmacy at the discretion of your doctor or if you have purchased the Uninsured Services Plan. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Cancellations</strong>: Please call or e-mail if you need to cancel an appointment at our office. \
//               There may be a fee for cancellations within 24 hours of an appointment and a fee for no-shows. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Test results</strong> will not be discussed by email. Your doctor will contact you with the results or ask for you to make an \
//               appointment to discuss the results in the office \
//             </p> \
//             <br> \
//             <p> \
//               <strong>Referrals</strong> to specialists or advanced tests such as CT scans and MRIs are made by your doctor and you will be notified of the \
//               appointment by phone or a letter in the mail.  Please ensure we have your correct contact information. \
//             </p> \
//             <br> \
//             <p> \
//               <strong>For after hours services, please contact Health Link at 811.</strong> \
//             </p> \
//         </div> \
//     </div> \
// </div>";

module.exports = officePolicy;
