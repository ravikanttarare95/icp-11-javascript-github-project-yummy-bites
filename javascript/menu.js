const menuCardsContainer = document.getElementById("menu-cards-container");

const menuItems = [
  {
    itemImageURL: "./../images/photos/veg-thali.jpg",
    itemTitle: "Veg Thali",
    itemDesc: "Rice, dal, sabzi, roti, salad & dessert",
    itemPrice: "₹120",
  },
  {
    itemImageURL: "./../images/photos/non-veg-thali.jpeg",
    itemTitle: "Non-Veg Thali",
    itemDesc: "Rice, chicken curry, dal, roti, salad & dessert",
    itemPrice: "₹160",
  },
  {
    itemImageURL: "./../images/photos/paneer-butter-masala.jpeg",
    itemTitle: "Paneer Butter Masala",
    itemDesc: "Paneer cubes in creamy tomato gravy with roti",
    itemPrice: "₹140",
  },
  {
    itemImageURL: "./../images/photos/masala-dosa.jpeg",
    itemTitle: "Masala Dosa",
    itemDesc: "Crispy dosa with spiced potato filling and chutneys",
    itemPrice: "₹80",
  },
  {
    itemImageURL: "./../images/photos/chole-bhature.jpeg",
    itemTitle: "Chole Bhature",
    itemDesc: "Spicy chickpeas with fried bread and salad",
    itemPrice: "₹100",
  },
  {
       itemImageURL: "./../images/photos/jeera-rice-and-daal.jpeg",
    itemTitle: "Jeera Rice & Dal Tadka",
    itemDesc: "Fragrant cumin rice with tempered dal",
    itemPrice: "₹90",
  },
];

const renderMenuCards = menuItems.forEach((element) => {
  menuCardsContainer.innerHTML += `
  <div class="menu-card">
 <img src="${element.itemImageURL}" alt="Item's Image" class="menu-card-image">
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
