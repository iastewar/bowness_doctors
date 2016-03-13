var editButton = "";
if (user) editButton = "<a href='/datas/after-hours-care/edit' class='btn btn-warning'>Edit</a>"

var afterHoursCare =
  "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>After hours</strong></h2> \
              <hr> \
              <div>" + data['after-hours-care'] + "</div> \
          </div> \
      </div> \
  </div>";

module.exports = afterHoursCare;
