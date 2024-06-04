const body = document.getElementsByTagName("body")[0];

const createCard = (text, imageUrl) => {
  const container = document.createElement("div");
  const p = document.createElement("p");
  const image = document.createElement("img");

  container.classList.add("container");

  image.src = imageUrl;
  image.width = 500;
  image.height = 500;

  p.innerText = text;

  container.appendChild(image);
  container.appendChild(p);

  body.appendChild(container);
};

createCard(
  "hello world",
  "https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=200x150&vertical=center"
);
createCard(
  "hello world 1",
  "https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=200x150&vertical=center"
);

const body1 = document.getElementsByTagName("body")[0];

const createCard1 = () => {
  const container = document.createElement("div");
  const p = document.createElement("p");
  const image = document.createElement("img");

  container.classList.add("container");

  // container.className.add('container')

  image.src = imageUrl;
  image.width = 500;
  image.height = 500;

  p.innerText = text;
};
