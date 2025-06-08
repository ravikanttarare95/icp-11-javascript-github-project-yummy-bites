const faqs = [
  {
    question: "What type of meals do you provide?",
    answer: "We provide home-style vegetarian and non-vegetarian tiffins for breakfast, lunch, and dinner."
  },
  {
    question: "Can I customize my meal plan?",
    answer: "Yes, you can customize your plan to skip days, exclude ingredients, or change meal preferences."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 2-day free trial for first-time users to experience our service."
  },
  {
    question: "Do you offer monthly subscriptions?",
    answer: "Yes, we have weekly and monthly plans with discounts for regular customers."
  },
  {
    question: "How do I place an order?",
    answer: "You can place an order through our website or mobile app by selecting your preferred meal and delivery time."
  },
  {
    question: "What are the delivery timings?",
    answer: "Our standard delivery slots are from 7-9 AM for breakfast, 12-2 PM for lunch, and 7-9 PM for dinner."
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes, you can pause your subscription from your account dashboard or by contacting support."
  },
  {
    question: "Is your packaging eco-friendly?",
    answer: "We use biodegradable and recyclable packaging to ensure minimal environmental impact."
  },
  {
    question: "Do you serve meals on weekends?",
    answer: "Yes, our services are available 7 days a week including weekends and public holidays."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery in select areas."
  }
];

const faqContainer = document.getElementById("faq-container");

faqs.forEach(faq => {
  faqContainer.innerHTML += `
    <div class="faq-item" style="margin-bottom:19px; padding:15px; background:#fff; border-radius:8px; box-shadow:0 2px 5px #ccc;">
      <div class="faq-question" style="font-weight:bold; color:#205781; display:flex; justify-content:space-between; align-items:center;">
        ${faq.question}
        <span class="faq-icon" style="cursor:pointer;">
          <i class="fa-solid fa-plus" style="color:#124e78;"></i>
        </span>
      </div>
      <div class="faq-answer" style="display:none; margin-top:10px; color:#124e78;">
        ${faq.answer}
      </div>
    </div>
  `;
});

document.querySelectorAll(".faq-icon").forEach((icon, index) => {
  icon.onclick = () => {
    const answer = document.querySelectorAll(".faq-answer")[index];
    const isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
    icon.innerHTML = isVisible
      ? `<i class="fa-solid fa-plus" style="color:#124e78;"></i>`
      : `<i class="fa-solid fa-minus" style="color:#124e78;"></i>`;
  };
});
