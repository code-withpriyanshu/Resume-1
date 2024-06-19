const button = document.querySelector(".slider");
const body = document.querySelector("body");
const links = document.querySelectorAll("a");
let isDarkMode = true;

const scroll = new LocomotiveScroll({
  el: document.querySelector('.resume'),
  smooth: true
});


button.addEventListener("click", function (e) {
  if (isDarkMode) {
    body.style.background =
      "white";  // dark mode
    body.style.color = "black";
    body.style.backgroundSize = "cover";
    links.forEach((link) => {
      link.style.color = "rgb(23, 88, 192);";
    });
  } else {
    body.style.color = "white";
    body.style.background =
      "black"; // Dark mode // Dark mode
    body.style.backgroundSize = "cover";
    links.forEach((link) => {
      link.style.color = "rgb(72, 146, 220)";
    });
  }
  isDarkMode = !isDarkMode; // Toggle the mode
});
