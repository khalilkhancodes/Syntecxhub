
// FAQ Data
const faqData = [
  {
    question: "How do I track my recent order?",
    answer: "You can track your order by logging into your account dashboard and navigating to the 'Orders' section. A tracking link will also be sent to your email once the item ships."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally! Shipping fees and delivery times vary depending on your location. You can view the exact costs at checkout before finalizing your purchase."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery. Items must be in their original condition with tags attached. Please contact our support team to initiate a return process."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team 24/7 via the live chat widget on our website, or by emailing khlilkhn6@gmail.com. We typically respond within 2-4 hours."
  }
];

const faqList = document.getElementById('faq-list');

// 1. Dynamically render FAQs
faqList.innerHTML = faqData.map((faq) => `
  <div class="faq-item">
    <div class="faq-header">
      <h3>${faq.question}</h3>
      <span class="faq-icon">+</span>
    </div>
    <div class="faq-answer-wrapper">
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
    <hr class="faq-divider" />
  </div>
`).join('');

// 2. Add interaction logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  
  header.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle the clicked FAQ
    item.classList.toggle('active');
  });
});