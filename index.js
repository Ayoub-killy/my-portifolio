  //JavaScript for animations & dark mode
    // Scroll reveal
    const sections = document.querySelectorAll("section");
    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealSection);
    window.addEventListener("load", revealSection);

    // Dark mode toggle
    const toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light";
      } else {
        toggleBtn.textContent = "🌙 Dark";
      }
    });
