"use strict";
/**
 * request animation
 */

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

$(document).ready(function () {
  // img scroll blur
  if ($(".innerbannerwrap .innerbanner").length) {
    var scrollOptions = {
      test: $(".innerbannerwrap .innerbanner")
    };
    var scrolling = new Scroller();
    scrolling.init(scrollOptions);
  } // form validation


  $(".formcontact").submit(function (event) {
    event.preventDefault();
    var formdata = $(".formcontact").serializeArray();
    $.ajax({
      url: "php/contact.php",
      type: "POST",
      async: true,
      data: formdata
    }).done(function (data) {
      $(".formcontact .form-message").removeClass("hidden").html(data);
      $(".formcontact .btn").attr("disabled", "disabled");
      $(".formcontact").each(function () {
        this.reset(); //CLEARS THE FORM AFTER SUBMISSION
      });
    });
  });
});