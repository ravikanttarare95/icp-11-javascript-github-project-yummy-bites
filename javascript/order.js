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
                <button class="btn-inc-dec" id="minus" onclick="dec()">-</button>   
                <p id="quantity">1</p>   
                <button class="btn-inc-dec" id="plus" onclick="inc()">+</button>
            </div> 
             <p class="cart-item-price"><strong>${element.price}</strong></p>
             <img src="../images/icons/delete.png" id="delete-icon" alt="Delete Icon"/> 
    </div>`;
  });
}

let itemQuantity = document.getElementById("quantity");

function inc() {
  itemQuantity.innerText = parseInt(itemQuantity.innerText) + 1;
}

function dec() {
  if (itemQuantity.innerText == 1) {
    return alert("Quantity cannot be 0");
  }
  itemQuantity.innerText = parseInt(itemQuantity.innerText) - 1;
}
