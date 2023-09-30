const books = [
  {
    title: "book1",
    author: "John Doe",
    image: "assets/img/book1.jpeg",
  },
  {
    title: "book1",
    author: "John Doe",
    image: "assets/img/book2.jpeg",
  },
  {
    title: "book1",
    author: "John Doe",
    image: "assets/img/book3.jpeg",
  },
];

const menuContainer = document.getElementById("wrapper-grid");
menuContainer.innerHTML = "";

books.forEach((book) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = `
          <img class="menu-item-image" src="${book.image}" alt="${book.image}.jpg" />
          <div class="menu-item-text">
              <h3 class="menu-item-heading">
                  <span class="menu-item-title">${book.title}</span>
                  <span class="menu-item-author">${book.author}</span>
              </h3>
          </div>
      `;
  menuContainer.appendChild(menuItem);
});
