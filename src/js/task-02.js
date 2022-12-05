const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
ingredients.map((product) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = `${product}`;
  list.append(ingredient);
});
