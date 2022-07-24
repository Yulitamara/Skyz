let btnClear = document.querySelector(".delete-icon");
let inputs = document.querySelectorAll(".input");
btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

// Configuration
// Message
$(function () {
  $(".message").hide();
});

// $(document).ready(function () {
//   $("#message").click(function () {
//     $(".message").toggle();
//   });
// });

$("#message").click(function () {
  $(".message").toggle();
});

// Rquired
$(function () {
  $(".rquired").hide();
});

$("#rquired").click(function () {
  $(".label").toggleClass("rquired-color");
  $(".rquired").toggleClass("rquired-color");
  $(".rquired").toggle();
});

// Narrow
$("#narrow").click(function () {
  $(".field-container").toggleClass("max-content");
});

// remove lable text
$("#remove-lable-text").click(function () {
  $(".label").toggle();
});

// Flex direction
$("#flex-direction").click(function () {
  $(".field-container").toggleClass("flex");
  $(".label-icon").toggleClass("change-label-text");
  $(".label").toggleClass("change-label-text");
});

// Edit

$("#edit").click(function () {
  //   $(".lable-container").toggleClass({ "background-color": "#3d1188" });
  $(".label-container").toggleClass("label-edit");
  $(".label-icon").toggleClass("label-icon-edit");
  $(".field-container").toggleClass("field-container-edit");
});

// Remove icons
$("#no-icons").click(function () {
  $(".field-icon").toggle();
});

// Remove background and borders
$("#no-background").click(function () {
    $(".label-container").toggleClass("no-background");
    $(".field-container").toggleClass("no-border");
  });
  