function addNewBook() {
  // Get a reference to the form element
  const formData = document.getElementById("form-data");

  // Get form input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const image = document.getElementById("image").value;

  if (title.trim() !== "" && author.trim() !== "" && image.trim() !== "") {
    // Create a new book object
    const newBook = {
      title: title,
      author: author,
      image: image,
    };

    // Add the new book to the books array
    books.push(newBook);

    // Clear the form inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("image").value = "";

    // Close the modal (you can use Bootstrap's modal close method)
    $("#addBookModal").modal("hide");
    // formData.submit();
  } else {
    // alert("Enter required data :)");
  }
  // });
  // Update the displayed menu
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
}

// Attach the event listener to the form's submit event
const addBookForm = document.querySelector("form");
addBookForm.addEventListener("submit", addNewBook);
