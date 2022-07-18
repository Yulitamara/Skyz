document
  .querySelectorAll(".input-container[data-error] .input")
  .forEach((inpEl) => {
    inpEl.addEventListener("input", () =>
      inpEl.parentElement.removeAttribute("data-error")
    );
  });
