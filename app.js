const navigationMenu = document.querySelector(".navigationMenu");
const hamburgerIcon = document.querySelector(".hamburger_icon");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
hamburgerIcon.addEventListener("click", () => {
  if (navigationMenu.style.display === "flex") {
    body.style.overflowY = "visible";
    navigationMenu.style.display = "none";
    overlay.style.display = "none";
    hamburgerIcon.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="22px"
    height="22px"
  >
    <path
      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    />
  </svg>`;
  } else {
    body.style.overflowY = "hidden";
    navigationMenu.style.display = "flex";
    overlay.style.display = "block";
    hamburgerIcon.innerHTML = `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="21" 
    height="22"
    >
    <path  
      d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
    />
    </svg>`;
  }
});

//reviews slider
let slideIndex = 0,
  id;
const currentSlide = (n) => {
  slideIndex = n;
  clearTimeout(id);
  showSlides();
};

const showSlides = () => {
 
  const slidesContainer = document.querySelector(".slideshow-container");
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].style.backgroundColor = "white";
  });
  slideIndex > slides.length - 1 ? (slideIndex = 0) : 0;
  slides[slideIndex].style.display = "flex";
  if (window.innerWidth > 850) {
    slideIndex > slides.length - 2
      ? (slides[0].style.display = "flex")
      : (slides[slideIndex + 1].style.display = "flex");
    slideIndex > slides.length - 2
      ? (slidesContainer.style.flexDirection = "row-reverse")
      : (slidesContainer.style.flexDirection = "row");
  }
  if (window.innerWidth > 1050) {
    slideIndex > slides.length - 2
      ? (slides[1].style.display = "flex")
      : (slides[slideIndex + 2].style.display = "flex");
    slideIndex > slides.length - 2
      ? (slidesContainer.style.flexDirection = "row-reverse")
      : (slidesContainer.style.flexDirection = "row");
  }
  dots[slideIndex].style.backgroundColor = "hsl(12, 88%, 59%)";
  slideIndex++;
  id = setTimeout(showSlides, 2000);
};

showSlides();
//end of slider
