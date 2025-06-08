
  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const errorMessage = document.getElementById("errorMessage");

  
  const validUsername = "admin";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    errorMessage.textContent = "";
    alert("Login successful!");

    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
  