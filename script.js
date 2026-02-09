// Simple Reveal Animation on Scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".skill-card, .project-item");

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state for JS animation
document.querySelectorAll(".skill-card, .project-item").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease-out";
});
