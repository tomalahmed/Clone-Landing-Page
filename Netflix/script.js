document.addEventListener("DOMContentLoaded", () => {
  const accordions = Array.from(document.querySelectorAll(".accordion__item"));
  const form = document.getElementById("cta-form");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("cta-message");
  const pills = Array.from(document.querySelectorAll(".pill"));
  const languageSelector = document.getElementById("language-selector");

  // Accordion functionality
  accordions.forEach((item) => {
    item.addEventListener("click", () => {
      const isOpen = item.getAttribute("aria-expanded") === "true";
      accordions.forEach((el) => el.setAttribute("aria-expanded", "false"));
      item.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  // Form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (!email) {
      message.textContent = "Please enter a valid email.";
      message.style.color = "#ff6b6b";
      return;
    }
    message.textContent = "Great! We will email a sign-up link to " + email + ". Netflix Bangladesh welcomes you!";
    message.style.color = "#c5c6ce";
    form.reset();
  });

  // Pill filter functionality
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => {
        p.classList.remove("pill--active");
        p.setAttribute("aria-pressed", "false");
      });
      pill.classList.add("pill--active");
      pill.setAttribute("aria-pressed", "true");
    });
  });

  // Language selector enhancement
  if (languageSelector) {
    languageSelector.addEventListener("change", (e) => {
      const lang = e.target.value;
      if (lang === "bn") {
        console.log("Bengali language selected - Would load Bengali translations");
        // In a real app, this would load Bengali translations
      } else {
        console.log("English language selected");
      }
    });
  }

  // Pricing card interactions
  const pricingCards = Array.from(document.querySelectorAll(".pricing-card"));
  pricingCards.forEach((card) => {
    const btn = card.querySelector(".btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const planName = card.querySelector(".plan-badge").textContent;
        alert(`You selected the ${planName} plan for Bangladesh! Redirecting to sign up...`);
      });
    }
  });
});
