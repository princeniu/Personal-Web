// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // Initialize skill bars animation
  initSkillBars();

  // Initialize form handling
  initContactForm();

  // Initialize theme toggle
  initThemeToggle();

  // Scroll to top functionality
  initScrollToTop();

  // Lazy loading for images
  initLazyLoading();

  // Initialize portfolio filter
  initPortfolioFilter();

  // 添加滚动动画触发
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document.querySelectorAll(".card").forEach((el) => observer.observe(el));

  // 初始化轮播图
  const carousel = new bootstrap.Carousel(
    document.getElementById("aboutCarousel"),
    {
      interval: 3000, // 设置自动轮播间隔为3秒
      pause: "hover", // 鼠标悬停时暂停
      wrap: true, // 循环播放
      touch: true, // 支持触摸滑动
    }
  );

  // 添加手势支持
  let touchStartX = 0;
  let touchEndX = 0;
  const carouselElement = document.getElementById("aboutCarousel");

  carouselElement.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.touches[0].clientX;
    },
    false
  );

  carouselElement.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].clientX;
      handleGesture();
    },
    false
  );

  function handleGesture() {
    if (touchEndX < touchStartX) {
      carousel.next();
    }
    if (touchEndX > touchStartX) {
      carousel.prev();
    }
  }

  // 添加键盘支持
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      carousel.prev();
    }
    if (e.key === "ArrowRight") {
      carousel.next();
    }
  });

  // 语言切换功能
  initLanguageToggle();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll behavior
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Initialize skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  const skillsSection = document.querySelector("#skills");

  const animateSkillBars = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillBars.forEach((bar) => {
          bar.style.width = bar.style.getPropertyValue("--skill-percentage");
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const skillsObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5,
  });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
}

// Initialize contact form
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("#submit-btn");
    const buttonText = submitBtn.querySelector(".button-text");
    const spinner = submitBtn.querySelector(".spinner-border");

    // Disable button and show loading state
    submitBtn.disabled = true;
    buttonText.textContent = "Sending...";
    spinner.classList.remove("d-none");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        showFormMessage("Message sent successfully!", "success");
        form.reset();
      } else {
        // Show error message
        showFormMessage(
          "Oops! There was a problem sending your message.",
          "error"
        );
      }
    } catch (error) {
      showFormMessage(
        "Oops! There was a problem sending your message.",
        "error"
      );
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      buttonText.textContent = "Send Message";
      spinner.classList.add("d-none");
    }
  });
}

// Show form message
function showFormMessage(message, type) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `alert alert-${
    type === "success" ? "success" : "danger"
  } mt-3`;
  messageDiv.textContent = message;

  const form = document.querySelector("#contact-form");
  form.parentNode.insertBefore(messageDiv, form.nextSibling);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Theme switching functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  // 移除系统主题检测，直接设置为浅色模式
  const currentTheme = localStorage.getItem("theme") || "light";

  // 设置初始主题
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // Theme toggle click handler
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);

    // Trigger AOS refresh for smooth transitions
    AOS.refresh();
  });
}

// Update theme icon
function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (theme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Scroll to top functionality
function initScrollToTop() {
  const scrollBtn = document.getElementById("scroll-top");
  const scrollThreshold = 400; // Show button after scrolling this many pixels

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Lazy loading for images
function initLazyLoading() {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px 0px",
    }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));
}

// Add performance optimization for animations
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize portfolio filter
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        // Show all items if filter is 'all', otherwise check category
        if (filterValue === "all" || filterValue === itemCategory) {
          item.classList.remove("hidden");
          // Trigger AOS animation
          if (item.getAttribute("data-aos")) {
            item.setAttribute("data-aos-delay", "0");
            AOS.refresh();
          }
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

// Add smooth animation for portfolio grid
function updatePortfolioLayout() {
  const portfolioGrid = document.getElementById("portfolio-grid");
  const visibleItems = portfolioGrid.querySelectorAll(
    ".portfolio-item:not(.hidden)"
  );

  visibleItems.forEach((item, index) => {
    // Reset any inline styles
    item.style.transition = "all 0.5s ease";
    item.style.transform = "scale(1)";
    item.style.opacity = "1";

    // Add delay to the animation
    if (item.getAttribute("data-aos")) {
      item.setAttribute("data-aos-delay", (index * 100).toString());
    }
  });
}

// Update the existing window scroll event
const debouncedScroll = debounce(() => {
  const navbar = document.querySelector(".navbar");
  const scrollBtn = document.getElementById("scroll-top");
  const scrollY = window.scrollY;

  // Handle navbar
  if (scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

  // Handle scroll-to-top button
  if (scrollY > 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }

  // Update portfolio layout
  updatePortfolioLayout();
}, 10);

// Replace existing scroll event listener with debounced version
window.addEventListener("scroll", debouncedScroll);

// 语言切换功能
function initLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  const currentLang = localStorage.getItem("language") || "en";

  // 设置初始语言
  document.documentElement.setAttribute("lang", currentLang);
  updateLanguage(currentLang);
  updateLangButtonText(currentLang);

  // 语言切换点击处理
  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "zh" : "en";

    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("language", newLang);
    updateLanguage(newLang);
    updateLangButtonText(newLang);
  });
}

// 更新语言按钮文本
function updateLangButtonText(lang) {
  const langText = document.querySelector(".lang-text");
  langText.textContent = lang === "en" ? "中文" : "English";
}

// 更新页面文本
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// 保时捷项目语言切换
function initPorscheLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  const currentLang = localStorage.getItem("language") || "en";

  // 设置初始语言
  document.documentElement.setAttribute("lang", currentLang);
  updatePorscheLanguage(currentLang);
  updateLangButtonText(currentLang);

  // 语言切换点击处理
  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "zh" : "en";

    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("language", newLang);
    updatePorscheLanguage(newLang);
    updateLangButtonText(newLang);
  });
}

// 更新保时捷项目文本
function updatePorscheLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n-porsche]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-porsche");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// 姿势检查器项目语言切换
function initPostureCheckerLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  const currentLang = localStorage.getItem("language") || "en";

  // 设置初始语言
  document.documentElement.setAttribute("lang", currentLang);
  updatePostureCheckerLanguage(currentLang);
  updateLangButtonText(currentLang);

  // 语言切换点击处理
  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "zh" : "en";

    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("language", newLang);
    updatePostureCheckerLanguage(newLang);
    updateLangButtonText(newLang);
  });
}

// 更新姿势检查器项目文本
function updatePostureCheckerLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n-posture-checker]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-posture-checker");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// little lemon项目语言切换
function initLittleLemonLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  const currentLang = localStorage.getItem("language") || "en";

  // 设置初始语言
  document.documentElement.setAttribute("lang", currentLang);
  updateLittleLemonLanguage(currentLang);
  updateLangButtonText(currentLang);

  // 语言切换点击处理
  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "zh" : "en";

    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("language", newLang);
    updateLittleLemonLanguage(newLang);
    updateLangButtonText(newLang);
  });
}

// 更新little lemon项目文本
function updateLittleLemonLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n-little-lemon]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-little-lemon");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}
