
  let currentIndex = 0;
  let interval;

  function showTestimonial(index) {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
    const content = document.querySelector(".testimonial-content");

    // Limit index
    if (index >= testimonials.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = testimonials.length - 1;
    } else {
      currentIndex = index;
    }

    // Slide effect using translateX
    content.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Highlight current
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[currentIndex].classList.add("active");

    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function changeTestimonial(n) {
    showTestimonial(currentIndex + n);
    resetInterval(); // Reset the timer when user interacts
  }

  function currentTestimonial(n) {
    showTestimonial(n);
    resetInterval(); // Reset the timer when user interacts
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => changeTestimonial(1), 5000); // 7 seconds
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(currentIndex);
    interval = setInterval(() => changeTestimonial(1), 7000); // Auto-slide every 7 seconds
  });

