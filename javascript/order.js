const orderCartContainer = document.getElementById("order-cart-container");
const cart = JSON.parse(localStorage.getItem("cart"));

if (cart.length === 0) {
  orderCartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((element) => {
    orderCartContainer.innerHTML += `
    <div class="order-cart-item">
            <p class="cart-item-name"><strong>${element.itemName}</strong></p> 
            <div class="inc-dec-container">
                <button class="btn-inc-dec" id="minus">-</button>   
                <p id="quantity">Q</p>   
                <button class="btn-inc-dec" id="plus">+</button>
            </div> 
             <p class="cart-item-price"><strong>${element.price}</strong></p>
    </div>`;
  });
}
