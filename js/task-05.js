const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const { value } = event.currentTarget;
  if (!value.trim()) {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
