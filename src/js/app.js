import CountUp from "./countUp.js";

const yearCountUp = new CountUp("year", 0, 2015);
const storesCountUp = new CountUp("stores", 0, 23);
const companiesCountUp = new CountUp("companies", 0, 155);
const clientsCountUp = new CountUp("clients", 0, 10, 0, 2, {
  suffix: "K+",
});

const target = document.getElementById("results");

const results = [yearCountUp, storesCountUp, companiesCountUp, clientsCountUp];
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      results.forEach((item) => {
        item.start();
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);

const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

const handleClickMenu = () => {
  const path = document.location.href;
  console.log(path);

  if (menu.classList.contains("active")) {
    menuIcon.src = "./assets/icons/burger-menu.svg";
    menu.classList.remove("active");
  } else {
    menuIcon.src = "./assets/icons/cross.svg";
    menu.classList.add("active");
  }
};

menuIcon.addEventListener("click", handleClickMenu);

const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.remove("active");
    menuIcon.src = "./assets/icons/burger-menu.svg";
  });
}
