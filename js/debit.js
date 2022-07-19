let btnClear = document.querySelector(".delete-icon");
let inputs = document.querySelectorAll(".input");
btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

    