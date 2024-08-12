/*Navigation*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
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

/*NavBar Auto Hide*/
let lastScrollTop = 0;
const autoHideNavs = document.getElementsByClassName("navbar");

function handleScroll() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  for (let i = 0; i < autoHideNavs.length; i++) {
    const autoHideNav = autoHideNavs[i];

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      autoHideNav.style.top = "-100px";
    } else {
      // Scrolling up
      autoHideNav.style.top = "0";
    }
  }

  lastScrollTop = scrollTop;
}

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
    for (let i = 0; i < autoHideNavs.length; i++) {
      autoHideNavs[i].style.top = "0";
    }
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);

/*Section Background change*/

/*Home Background Change*/
const homeSection = document.getElementById("home");

const images = [
  "images/home.gif",
  "images/home2.gif",
  "images/home3.gif",
  "images/home4.gif",
];

let homeBackgroundIndex = 0;

function changeBackgroundImage() {
  homeSection.style.backgroundImage = `url(${images[homeBackgroundIndex]})`;
  homeBackgroundIndex = (homeBackgroundIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 6000);

changeBackgroundImage();

/*Contacts Background Change*/
const contactsSection = document.getElementById("contacts");

const imagesContacts = [
  "images/contacts.gif",
  "images/contacts2.gif",
  "images/contacts3.gif",
];

let contactsBackgroundIndex = 0;

function contactBackgroundChange() {
  contactsSection.style.backgroundImage = `url(${imagesContacts[contactsBackgroundIndex]})`;
  contactsBackgroundIndex =
    (contactsBackgroundIndex + 1) % imagesContacts.length;
}

setInterval(contactBackgroundChange, 3000);

contactBackgroundChange();

/*Name Color Change*/
const nameUser = document.getElementById("userName");

const colors = ["#004aa4", "#666666", "#c64800", "#6d028c", "#198c24"];

let colorIndex = 0;

function changeFontColor() {
  nameUser.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeFontColor, 2000);

/*Explore Button*/
document.getElementById("explore").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

/*Change home strong word*/
const change = document.querySelector("#changeWords");
const words = [
  "Front-End Developer",
  "Freelancer",
  "Video and Photo Editor",
  "Future Software Developer",
];

let wordIndex = 0;

function changeWord() {
  change.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
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
