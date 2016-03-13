var editButton = "";
if (user) editButton = "<a href='/datas/uninsured-services/edit' class='btn btn-warning'>Edit</a>"

var uninsuredServices =
  "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Uninsured Services</strong></h2> \
              <hr> \
              <div>" + data['uninsured-services'] + "</div> \
          </div> \
      </div> \
  </div>";

module.exports = uninsuredServices;
