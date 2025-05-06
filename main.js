// burger btn
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const setupMobileMenu = () => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenuContainer = document.querySelector(
      ".mobile-menu-container"
    );
    const mobileMenuClose = document.querySelector(".mobile-menu-close");

    if (mobileMenuToggle && mobileMenuContainer && mobileMenuClose) {
      mobileMenuToggle.addEventListener("click", function () {
        mobileMenuContainer.classList.add("active");
      });

      mobileMenuClose.addEventListener("click", function () {
        mobileMenuContainer.classList.remove("active");
      });

      document
        .querySelectorAll(".mobile-menu-nav .nav-link-custom")
        .forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenuContainer.classList.remove("active");
          });
        });

      mobileMenuContainer.addEventListener("click", function (e) {
        if (e.target === mobileMenuContainer) {
          mobileMenuContainer.classList.remove("active");
        }
      });
    }
  };

  // Initialize
  setupMobileMenu();
});

// Animation trigger
document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".sold-block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  blocks.forEach((block) => {
    observer.observe(block);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "assets/Model-4.png",
    "assets/Model-5.jpg",
    "assets/Model-3.jpg",
  ];
  images.forEach((img) => {
    new Image().src = img;
  });
});
