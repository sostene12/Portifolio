const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");

const allSections = document.querySelector(".main-content");

// Buttons active class
sectBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeBtn = document.querySelector(".active-btn");
    activeBtn.classList.remove("active-btn");
    e.target.classList.add("active-btn");
  });
});

// sections active class

allSections.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other btns
    sectBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  // hide other sections
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const element = document.getElementById(id);
  element.classList.add("active");
});
