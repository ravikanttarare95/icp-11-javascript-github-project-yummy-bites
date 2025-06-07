const orderCartContainer = document.querySelector(".order-cart-container");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCartFromLocalStorage() {
  let total = 0;
  orderCartContainer.innerHTML = "";

  if (cart.length === 0) {
    orderCartContainer.innerHTML = "<p>Your cart is empty.</p>";

    document.getElementById("cart-total").innerText = "0";
  } else {
    cart.forEach((element, index) => {
      total += parseInt(element.price);

      orderCartContainer.innerHTML += `
    <div class="order-cart-item">
            <p class="cart-item-name"><strong>${element.itemName}</strong></p> 
            <div class="inc-dec-container">
                <button class="btn-inc-dec minus">-</button>   
                <p class="quantity">1</p>   
                <button class="btn-inc-dec plus">+</button>
            </div> 
             <p class="cart-item-price"><strong class="item-price-cart" data-base-price="${element.price}">₹${element.price}</strong></p>
             <img src="../images/icons/delete.png" class="delete-icon" data-index="${index}" alt="Delete Icon"/> 
    </div>`;
    });

    document.getElementById("cart-total").innerText = total;
  }
}

loadCartFromLocalStorage();

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
    if (parseInt(quantityElement.innerText) === 1) {
      return alert("Quantity cannot be 0");
    }
    quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
    updatePrice(closestItem);
  }

  if (e.target.classList.contains("delete-icon")) {
    const closestItem = e.target.closest(".order-cart-item");
    const deleteElement = closestItem.querySelector(".delete-icon");
    const dataIndex = deleteElement.dataset.index;
    cart.splice(dataIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    orderCartContainer.innerHTML = "";
    loadCartFromLocalStorage();
  }
});

function updatePrice(closestItem) {
  const quantityElement = closestItem.querySelector(".quantity");
  const priceElement = closestItem.querySelector(".item-price-cart");

  const quantity = parseInt(quantityElement.innerText);
  const basePrice = parseInt(priceElement.dataset.basePrice);

  if (!isNaN(quantity) && !isNaN(basePrice)) {
    priceElement.innerText = `₹${basePrice * quantity}`;
  } else {
    console.error("Invalid quantity or base price");
  }
}
