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

//About section
const taglines = [
  "Bringing You a Taste of Home, Every Day !!",
  "Wholesome Meals, Just Like Mom Makes !!",
  "From Our Kitchen to Your Table !!",
  "Your Daily Dose of Ghar Ka Khana !!",
  "Where Every Bite Feels Like Home !!",
  "Healthy. Homely. Handmade !!",
  "Meals that Hug You from the Inside !!",
  "Comfort Food Delivered Daily !!",
  "Real Food. Real Flavors. Real Home !!",
];

const randomIndex = Math.floor(Math.random() * taglines.length);
document.getElementById("about-tagline").textContent = taglines[randomIndex];

showSlide();
setInterval(showSlide, 3000);

let cards = document.getElementsByClassName("mission-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    if (this.className.includes("expanded")) {
      this.className = this.className.replace("expanded", "").trim();
    } else {
      this.className += " expanded";
    }
  };
}

//Team section
const teamMembers = [
  {
    name: "Nisha Bhatiya",
    role: "Founder",
    image: "./../images/photos/founder.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Sahil Gade",
    role: "Manager",
    image: "./../images/photos/manager.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Anita Desai",
    role: "Assistant Manager",
    image: "./../images/photos/ass-manager.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Rahul Mehta",
    role: "Head Chef",
    image: "./../images/photos/member-1.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Kavita Joshi",
    role: "Sales Manager",
    image: "./../images/photos/member-2.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Amit Sharma",
    role: "Delivery Head",
    image: "./../images/photos/member-3.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Pooja Sinha",
    role: "Nutrition Expert",
    image: "./../images/photos/member-4.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

const container = document.getElementById("team-container");
const toggleButton = document.getElementById("toggle-button");

let isExpanded = false;
const initialCount = 3;

function renderTeam() {
  const visibleMembers = isExpanded
    ? teamMembers
    : teamMembers.slice(0, initialCount);
  container.innerHTML = ""; 

  visibleMembers.forEach((member) => {
    container.innerHTML += `
        <div class="team-card">
          <img src="${member.image}" alt="${member.name}">
          <div class="team-overlay">
            <div class="team-name">${member.name}</div>
            <div class="team-role">${member.role}</div>
            <div class="social-icons">
              <a href="${member.socials.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="${member.socials.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="${member.socials.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      `;
  });

  toggleButton.textContent = isExpanded ? "Show Less" : "Show More";
}
toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;
  renderTeam();
});
renderTeam(); 
