$(document).ready(function () {
  $(".log-btn").click(function () {
    $(".log-status").addClass("wrong-entry");
    $(".alert").fadeIn(500);
    setTimeout("$('.alert').fadeOut(1500);", 3000);
  });
  $(".form-control").keypress(function () {
    $(".log-status").removeClass("wrong-entry");
  });
  $(".see-password").click(function () {
    var input = $(".log-status input");
    input.attr("type", input.get(0).type === "text" ? "password" : "text");
  });
});
