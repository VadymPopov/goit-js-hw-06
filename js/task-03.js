const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
list.style =
  "display: flex; align-items: center; justify-content: center; list-style: none; margin: 0px; padding: 0px;";

// images.map((image) => {
//   const item = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.src = `${image.url}`;
//   imageEl.alt = `${image.alt}`;
//   imageEl.width = "320";
//   item.appendChild(imageEl);
//   list.append(imageEl);
// });

const markup = images
  .map(({ url, alt }) => {
    return `<li style = "width:320px; margin:10px"  ><img src=${url} alt=${alt} width ="320px" height ="180px"></li>`;
  })
  .join("");
list.insertAdjacentHTML("beforeend", markup);
