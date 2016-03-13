var editButton = "";
if (user) editButton = "<a href='/datas/patient-services/edit' class='btn btn-warning'>Edit</a>"

var patientServices =
  "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Patient Services</strong></h2> \
              <hr> \
              <div>" + data['patient-services'] + "</div> \
          </div> \
      </div> \
  </div>";

module.exports = patientServices;
