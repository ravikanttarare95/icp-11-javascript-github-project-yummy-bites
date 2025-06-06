const orderCartContainer = document.querySelector(".order-cart-container");
const cart = JSON.parse(localStorage.getItem("cart"));

if (cart.length === 0) {
  orderCartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((element) => {
    orderCartContainer.innerHTML += `
    <div class="order-cart-item">
            <p class="cart-item-name"><strong>${element.itemName}</strong></p> 
            <div class="inc-dec-container">
                <button class="btn-inc-dec minus">-</button>   
                <p class="quantity">1</p>   
                <button class="btn-inc-dec plus">+</button>
            </div> 
             <p class="cart-item-price"><strong>${element.price}</strong></p>
             <img src="../images/icons/delete.png" class="delete-icon" alt="Delete Icon"/> 
    </div>`;
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    const closestItem = e.target.closest(".order-cart-item");
    const quantityElement = closestItem.querySelector(".quantity");
    quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
    updatePrice(closestItem);
  }

  if (e.target.classList.contains("minus")) {
    const closestItem = e.target.closest(".order-cart-item");
    const quantityElement = closestItem.querySelector(".quantity");
    if (quantityElement.innerText == 1) {
      return alert("Quantity cannot be 0");
    }
    quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
    updatePrice(closestItem);
  }
});
