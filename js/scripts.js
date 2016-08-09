$(document).ready(function() {
  $("button#inv").click(function() {
    $("body").removeClass("normal");
    $("body").addClass("inverse");
  });
  $("button#norm").click(function() {
    $("body").removeClass("inverse");
    $("body").addClass("normal");
  });
});
