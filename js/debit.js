function showicon() {
  const input = document.querySelector(".input").value;
  const cancel = document.querySelector(".delete-icon");

  if (input.lenght <= 0) document.body.classList.remove("active");
  else document.body.classList.add("active");

  cancel.addEventListener("click", () => {
    document.querySelector(".input").value = "";
    document.body.classList.add("active");
  });
}
