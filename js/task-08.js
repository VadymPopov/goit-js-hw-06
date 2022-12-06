const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(formData);
    form.reset();
  }
}
