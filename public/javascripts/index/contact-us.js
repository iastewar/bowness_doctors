var selectField = function() {
  if (doctor) {
    if (doctor === "Dr. Lakshmi Visvanatha") {
      return "<select name='doctor' class='form-control'> \
        <option disabled hidden style='display: none' value=''></option> \
        <option value='Dr. Joan Knight'>Dr. Joan Knight</option> \
        <option selected value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> \
      </select>";
    } else {
      return "<select name='doctor' class='form-control'> \
        <option disabled hidden style='display: none' value=''></option> \
        <option selected value='Dr. Joan Knight'>Dr. Joan Knight</option> \
        <option value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> \
      </select>";
    }
  } else {
    return "<select name='doctor' class='form-control'> \
      <option selected disabled hidden style='display: none' value=''></option> \
      <option value='Dr. Joan Knight'>Dr. Joan Knight</option> \
      <option value='Dr. Lakshmi Visvanatha'>Dr. Lakshmi Visvanatha</option> \
    </select>";
  }
}

var contactUs =
"<div id='contact-form' class='row'> \
    <div class='box'> \
        <div class='col-lg-12'> \
            <hr> \
            <h2 class='intro-text text-center'><strong>Contact us</strong></h2> \
            <hr> \
            <p> \
              Please contact us at 403-288-3733 or send us an email using the contact form below. \
              Emails can be used for requesting non-urgent appointments only.  Please use the following form and do not send \
              private medical information via email. \
            </p> \
            <br> \
            <form action='/contact' method='post'> \
                <div class='row'> \
                    <div class='form-group col-lg-3'> \
                      <label>Doctor</label>" +
                      selectField() +
                    "</div> \
                    <div class='form-group col-lg-3'> \
                        <label>Name</label> \
                        <input type='text' name='name' class='form-control' value='" + name + "'> \
                    </div> \
                    <div class='form-group col-lg-3'> \
                        <label>Email Address</label> \
                        <input type='email' name='email' class='form-control' value='" + email + "'> \
                    </div> \
                    <div class='form-group col-lg-3'> \
                        <label>Phone Number</label> \
                        <input type='tel' name='phone' class='form-control' value='" + phone + "'> \
                    </div> \
                    <div class='clearfix'></div> \
                    <div class='form-group col-lg-12'> \
                        <label>Message</label> \
                        <textarea name='message' class='form-control' rows='6'>" + message + "</textarea> \
                    </div> \
                    <div class='form-group col-lg-12'> \
                        <input type='hidden' name='save' value='contact'> \
                        <button type='submit' class='btn btn-primary'>Submit</button> \
                    </div> \
                </div> \
            </form> \
        </div> \
    </div> \
</div>";

module.exports = contactUs;
