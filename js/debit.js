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
  $(".rquired").toggle();
});

// Narrow
$("#narrow").click(function () {
  $(".narrow").toggle();
});

// Flex direction
$("#flex-direction").click(function () {
  $(".form-container").css("flex-direction", "column");
});
