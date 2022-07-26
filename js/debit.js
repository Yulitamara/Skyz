// let btnClear = document.querySelector(".delete-icon");
// let inputs = document.querySelectorAll(".input");
// btnClear.addEventListener("click", () => {
//   inputs.forEach((input) => (input.value = ""));
// });

// Configuration
// Message
$(function () {
  $(".message").hide();
});

$("#message").click(function () {
  $(".message").toggle();
});

// Rquired
$(function () {
  $(".rquired").hide();
});

$("#rquired").click(function () {
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
  $(".label-icon, .label").toggleClass("change-label-text");
});

// Edit

$("#edit").click(function () {
  $(".label-container, .input-right").toggleClass("label-edit");
  $(".field-container").toggleClass("field-container-edit");
  $(".field-type, .field-icon").toggleClass("white-text");
});

// Remove icons
$("#no-icons").click(function () {
  $(".field-icon").toggle();
  $(".field-icon-container").toggle();
});

// Remove background and borders
$("#no-background").click(function () {
  $(".label-container, .input-right").toggleClass("no-background");
  $(".field-container").toggleClass("no-border");
  $(".field-type, .field-icon, .label-container").toggleClass("dark-text");
});

// Chip
$("#hide-img").click(function () {
  $(".chip-head").toggle();
});

$(".unchecked").click(function () {
  $(this).addClass("active");
  $(".checked").toggleClass("active");
});

$(".checked").click(function () {
  $(this).addClass("active");
  $(".unchecked").toggleClass("active");
});

// Change icon to X
$("#close").click(function () {
  $(".close").toggleClass("active");
  $(".unchecked, .checked").addClass("active");
});

$("#height").click(function () {
  $(".chip").toggleClass("height-chip");
});
