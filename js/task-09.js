function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  let bodyColor = getRandomHexColor();

  document.body.style.backgroundColor = bodyColor;
  colorName.textContent = bodyColor;
}
