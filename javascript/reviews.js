const form = document.getElementById("review-form");
    const container = document.getElementById("review-container");
    const filterSelect = document.getElementById("filter-select");

    const starImgs = [
      document.getElementById("star-1-img"),
      document.getElementById("star-2-img"),
      document.getElementById("star-3-img"),
      document.getElementById("star-4-img"),
      document.getElementById("star-5-img")
    ];

    let selectedRating = 0;

    function shiningstar(rating) {
      selectedRating = rating;
      for (let i = 0; i < 5; i++) {
        starImgs[i].src = i < rating ? "../images/icons/shine-star.png" : "../images/icons/star.png";
      }
    }

    let reviews = JSON.parse(localStorage.getItem("tiffinReviews")) || [
      { reviewer: "Shravani", meal: "Lunch", rating: 5, comment: "Delicious and healthy!" },
      { reviewer: "Sneha", meal: "Breakfast", rating: 4, comment: "Great taste, on time!" },
      { reviewer: "Soham", meal: "Dinner", rating: 3, comment: "Okay, needs improvement." }
    ];

    function saveToLocalStorage() {
      localStorage.setItem("tiffinReviews", JSON.stringify(reviews));
    }

    function renderReviews() {
      const filter = filterSelect.value;
      container.innerHTML = "";

      const filtered = filter === "All" ? reviews : reviews.filter(r => r.meal === filter);

      filtered.forEach((review) => {
        const card = document.createElement("div");
        card.className = "review-card";

        // Create stars HTML
        let starsHtml = "";
        for (let i = 0; i < 5; i++) {
          starsHtml += `<img src="${i < review.rating ? '../images/icons/shine-star.png' : '../images/icons/star.png'}" class="stars-img" style="width:20px;">`;
        }

        card.innerHTML = `
          <h3>${review.reviewer}</h3>
          <p>${review.comment}</p>
          <p><strong>Meal: </strong> ${review.meal}</p>
          <p>${starsHtml}</p>
          
        `;
        container.appendChild(card);
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (selectedRating === 0) {
        alert("Please select a star rating.");
        return;
      }

      const newReview = {
        reviewer: document.getElementById("reviewer").value,
        meal: document.getElementById("meal-type").value,
        rating: selectedRating,
        comment: document.getElementById("comment").value
      };

      reviews.push(newReview);
      saveToLocalStorage();
      form.reset();
      selectedRating = 0;
      glowstar(0); // Reset stars
      renderReviews();
    });

    filterSelect.addEventListener("change", renderReviews);
    renderReviews();