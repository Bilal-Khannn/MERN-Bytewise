let openbtn = document.getElementById("open-btn");
let closebtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");

openbtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closebtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
