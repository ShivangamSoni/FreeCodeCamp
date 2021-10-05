(function () {
  const form = document.querySelector("#survey-form");
  const container = document.querySelector("#container");
  const messageBox = document.querySelector("#message");

  const toggleSections = function () {
    container.classList.toggle("hide");
    messageBox.classList.toggle("active");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toggleSections();
    setTimeout(toggleSections, 5000);
  });
})();
