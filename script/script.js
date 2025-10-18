// Smooth scroll
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
// Make sure to include EmailJS SDK in your HTML:
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
// <script>emailjs.init("YOUR_EMAILJS_USER_ID");</script>

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Redirect to WhatsApp with order details
  const name = this.name.value;
  const product = this.product.value;
  const quantity = this.quantity.value;
  const message = this.message.value;

  const whatsappText = `Hello, I want to order the following product:\nName: ${name}\nProduct: ${product}\nQuantity: ${quantity}\nMessage: ${message}`;
  const whatsappURL = `https://wa.me/917806951071?text=${encodeURIComponent(whatsappText)}`;
  window.open(whatsappURL, "_blank");
});

// Contact Form via EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_11zwmka', 'template_mslby8k', this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    });
});

// Smooth fade-out splash page after 10 seconds
setTimeout(() => {
  const splash = document.getElementById('splash');

  // Start fade out by adding opacity transition
  splash.style.transition = "opacity 0.1s ease";
  splash.style.opacity = 0;

  // Wait for the transition to finish, then hide splash and show main content
  splash.addEventListener('transitionend', () => {
    splash.style.display = 'none';
    document.getElementById('mainContent').classList.remove('d-none');
  });
}, 2000); //0 seconds

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  const contactForm = document.getElementById("contactForm");
  const popup = document.getElementById("popupMessage");

  function showPopup() {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 5000);
  }

  [orderForm, contactForm].forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showPopup();
      form.reset();
    });
  });
});
