let counterValue = 0;

const valueEl = document.querySelector("#value");
const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');

btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

btnIncr.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
