const menuCardsContainer = document.getElementById("menu-cards-container");

const menuItems = [
  {
    itemTitle: "Veg Thali",
    itemDesc: "Rice, dal, sabzi, roti, salad & dessert",
    itemPrice: "₹120",
  },
  {
    itemTitle: "Non-Veg Thali",
    itemDesc: "Rice, chicken curry, dal, roti, salad & dessert",
    itemPrice: "₹160",
  },
  {
    itemTitle: "Paneer Butter Masala",
    itemDesc: "Paneer cubes in creamy tomato gravy with roti",
    itemPrice: "₹140",
  },
  {
    itemTitle: "Masala Dosa",
    itemDesc: "Crispy dosa with spiced potato filling and chutneys",
    itemPrice: "₹80",
  },
  {
    itemTitle: "Chole Bhature",
    itemDesc: "Spicy chickpeas with fried bread and salad",
    itemPrice: "₹100",
  },
  {
    itemTitle: "Jeera Rice & Dal Tadka",
    itemDesc: "Fragrant cumin rice with tempered dal",
    itemPrice: "₹90",
  },
];

const renderMenuCards = menuItems.forEach((element) => {
  menuCardsContainer.innerHTML += `
  <div class="menu-card">
 <img src="./../images/photos/veg-thali.jpg" alt="Veg Thali" class="menu-card-image">
         <div class="menu-card-devider"></div>
        <div class="menu-card-content">
            <h3 class="menu-card-heading">${element.itemTitle}</h3>
            <p>${element.itemDesc}</p>
            <div class="price-btn-container">
                <p class="item-price">${element.itemPrice}</p>
                <button>Add</button>
            </div>
        </div>
</div>
`;
});
