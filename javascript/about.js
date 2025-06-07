var slides = document.getElementsByClassName("slide");
var index = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "slide"; 
  }

  slides[index].className = "slide active";

  index = index + 1;
  if (index >= slides.length) {
    index = 0;
  }
}
const taglines = [
    "Bringing You a Taste of Home, Every Day !!",
    "Wholesome Meals, Just Like Mom Makes !!",
    "From Our Kitchen to Your Table !!",
    "Your Daily Dose of Ghar Ka Khana !!",
    "Where Every Bite Feels Like Home !!",
    "Healthy. Homely. Handmade !!",
    "Meals that Hug You from the Inside !!",
    "Comfort Food Delivered Daily !!",
    "Real Food. Real Flavors. Real Home !!"
  ];

  const randomIndex = Math.floor(Math.random() * taglines.length);
  document.getElementById("about-tagline").textContent = taglines[randomIndex];

showSlide(); 
setInterval(showSlide, 3000); 

let cards = document.getElementsByClassName('mission-card');

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function() {
    if (this.className.includes('expanded')) {
      this.className = this.className.replace('expanded', '').trim();
    } else {
      this.className += ' expanded';
    }
  };
}