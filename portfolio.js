/*Navigation*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*Explore Button*/
document.getElementById("explore").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

/*Hamburger Menu*/
const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".navRight");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("show");
});
hamburger.addEventListener("touchstart", () => {
  navRight.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    e.target !== navRight &&
    e.target !== hamburger &&
    !navRight.contains(e.target)
  ) {
    navRight.classList.remove("show");
  }
});

/*Change home strong word*/
const change = document.querySelector("#changeWords");
const words = [
  "Front-End Developer",
  "Freelancer",
  "Video and Photo Editor",
  "Future Software Developer",
];
let currentIndex = 0;

function changeWord() {
  change.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(changeWord, 3000);

/*Project Buttons*/
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const projectsContent = document.querySelector(".projects-content");
const projectWidth = document.querySelector(".project").offsetWidth;

let currentProject = 0;

nextButton.addEventListener("click", () => {
  const maxProjects = document.querySelectorAll(".project").length;
  if (currentProject < maxProjects - 1) {
    currentProject++;
    projectsContent.style.left = `-${currentProject * projectWidth}px`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentProject > 0) {
    currentProject--;
    projectsContent.style.left = `-${currentProject * projectWidth}px`;
  }
});
