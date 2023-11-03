

  window.addEventListener("scroll", function () {
    let skillsContainer = document.querySelector(".skills-container");
    let heroSection = document.querySelector("#scroll");

    
    let heroSectionHeight = heroSection.clientHeight;

    
    if (window.scrollY > heroSectionHeight) {
      skillsContainer.classList.add("scrolled");
    } else {
      skillsContainer.classList.remove("scrolled");
    }
  });
