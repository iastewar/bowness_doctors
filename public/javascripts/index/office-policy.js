var editButton = "";
if (user) editButton = "<a href='/datas/office-policy/edit' class='btn btn-warning'>Edit</a>"

var officePolicy =
  "<div class='row'> \
      <div class='box'> \
          <div class='col-lg-12'>" +
              editButton +
              "<hr> \
              <h2 class='intro-text text-center'><strong>Office policy</strong></h2> \
              <hr> \
              <div>" + data['office-policy'] + "</div> \
          </div> \
      </div> \
  </div>";

module.exports = officePolicy;
