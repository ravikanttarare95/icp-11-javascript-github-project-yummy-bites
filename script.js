const hiddenNavItemsContaier = document.querySelector(
  ".hidden-nav-items-conatiner"
);
hamburgerMenu = document
  .querySelector(".hamburger-menu")
  .addEventListener("click", () => {
    if (hiddenNavItemsContaier.style.display === "none") {
      hiddenNavItemsContaier.style.display = "block";
    } else {
      hiddenNavItemsContaier.style.display = "none";
    }
    hiddenNavItemsContaier.innerHTML = `
          <div class="nav-items-hidden">
                <p><a href="../index.html">Home</a></p>
                <p><a href="../pages/about-us.html">About Us</a></p>
                <p><a href="../pages/menu.html">Menu</a></p>
                <p><a href="../pages/order.html">Order</a></p>
                <p><a href="../pages/reviews.html">Reviews</a></p>
                <p><a href="../pages/login.html"><i class="fa-solid fa-arrow-right-to-bracket login-icon" style="color: #6e0e0a;"></i>Login</a></p>
          </div>
    `;
  });

const scrollTop = document.getElementById("top-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
