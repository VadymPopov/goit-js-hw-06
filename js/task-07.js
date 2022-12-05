const input = document.querySelector("#font-size-control");
const span = document.querySelector("span#text");
console.log(span);
input.addEventListener("input", onInputRange);

function onInputRange(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}
