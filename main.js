const display = document.querySelector(".counter-preview");
const allBtns = document.querySelector("#allBtns");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
allBtns.addEventListener("click", counter);
let value = 0;
if (localStorage.getItem("countValue")) {
  value = Number(localStorage.getItem("countValue"));
}
function counter(e) {
  const btn = e.target.id;
  if (btn === "increment") {
    value += 1;
  } else if (btn === "decrement") {
    value -= 1;
  } else {
    value = 0;
  }

  display.textContent = value;
  localStorage.setItem("countValue", value);
}

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

window.onload = function () {
  display.textContent = localStorage.getItem("countValue");
};
