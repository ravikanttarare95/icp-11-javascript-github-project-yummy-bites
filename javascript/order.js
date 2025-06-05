const orderCartContainer = document.getElementById("order-cart-container");
const cart = JSON.parse(localStorage.getItem("cart"));

if (cart.length === 0) {
  orderCartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((element) => {
    orderCartContainer.innerHTML += `
    <div class="order-cart-item">
<p><strong>${element.itemName} - ${element.price}</strong></p>
    </div>`;
  });
}
