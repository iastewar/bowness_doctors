$(function() {
  $(".delete-btn").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    var thisDelBtn = this;

    $(thisDelBtn).text("Deleting...");

    var fileName = $(thisDelBtn).parent().find(".fileName").text();

    var success = function(res) {
      $(thisDelBtn).parent().fadeOut(500, function() {
        $(thisDelBtn).parent().remove();
      });
    }

    $.ajax({
      dataType: "json",
      url: "/resources/" + fileName,
      type: 'DELETE',
      success: success
    });
  });

  $(".resource").on("click", function() {
    var fileName = $(this).find(".fileName").text();
    window.location = '/resources/' + fileName;
  });
});
