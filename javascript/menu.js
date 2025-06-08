const menuCardsContainer = document.getElementById("menu-cards-container");

const menuItems = [
  {
    itemImageURL: "./../images/photos/veg-thali.jpeg",
    itemTitle: "Veg Thali",
    category: "veg",
    itemDesc: "Rice, dal, sabzi, roti, salad & dessert",
    itemPrice: "120",
  },
  {
    itemImageURL: "./../images/photos/non-veg-thali.jpeg",
    itemTitle: "Non-Veg Thali",
    category: "non-veg",
    itemDesc: "Rice, chicken curry, dal, roti, salad & dessert",
    itemPrice: "160",
  },
  {
    itemImageURL: "./../images/photos/paneer-butter-masala.jpeg",
    itemTitle: "Paneer Butter Masala",
    category: "veg",
    itemDesc: "Paneer cubes in creamy tomato gravy with roti",
    itemPrice: "140",
  },
  {
    itemImageURL: "./../images/photos/masala-dosa.jpeg",
    itemTitle: "Masala Dosa",
    category: "veg",
    itemDesc: "Crispy dosa with spiced potato filling and chutneys",
    itemPrice: "80",
  },
  {
    itemImageURL: "./../images/photos/chole-bhature.jpeg",
    itemTitle: "Chole Bhature",
    category: "veg",
    itemDesc: "Spicy chickpeas with fried bread and salad",
    itemPrice: "100",
  },
  {
    itemImageURL: "./../images/photos/jeera-rice-and-daal.jpeg",
    itemTitle: "Jeera Rice & Dal Tadka",
    category: "veg",
    itemDesc: "Fragrant cumin rice with tempered dal",
    itemPrice: "90",
  },
];

function renderMenu() {
  menuCardsContainer.innerHTML = "";
  const selectedCategory = document.getElementById("select-category").value;
  let filteredCard = menuItems;
  if (selectedCategory !== "all") {
    filteredCard = menuItems.filter((element) => {
      return element.category === selectedCategory;
    });
  }

  filteredCard.forEach((element) => {
    menuCardsContainer.innerHTML += `
    <div class="menu-card">
  <img src="${element.itemImageURL}" alt="Item's Image" class="menu-card-image">
          <div class="menu-card-content">
              <h3 class="menu-card-heading">${element.itemTitle}</h3>
              <p class="item-desc">${element.itemDesc}</p>
              <div class="price-btn-container">
                  <p class="item-price">₹${element.itemPrice}</p>
                  <button class="btn btn-primary btn-add">Add</button>
              </div>
          </div>
  </div>
  `;
  });
  // const orderCartContainer = document.getElementById("order-cart-container");
  menuCardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
      const card = e.target.closest(".menu-card");
      const itemName = card.querySelector(".menu-card-heading").textContent;
      const price = card
        .querySelector(".item-price")
        .textContent.replace("₹", "");
      const cartItem = { itemName, price };
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${itemName} added to cart!`);
    }
  });
}

renderMenu();

document
  .getElementById("select-category")
  .addEventListener("change", renderMenu);
