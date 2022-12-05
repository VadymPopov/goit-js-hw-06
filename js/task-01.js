const list = document.querySelector("#categories");
const items = [...list.children];
console.log(`Number of categories: ${items.length}`);

items.map((item) => {
  const header = item.querySelector("h2");
  const items = item.querySelectorAll("li");
  console.log(`Category: ${header.textContent}\nElements: ${items.length}`);
});
