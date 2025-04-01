import CountUp from "./countUp.js";

const yearCountUp = new CountUp("year", 0, 2015);
const storesCountUp = new CountUp("stores", 0, 23);
const companiesCountUp = new CountUp("companies", 0, 155);
const clientsCountUp = new CountUp("clients", 0, 10, 0, 2, {
  suffix: "K+",
});

yearCountUp.start();
storesCountUp.start();
companiesCountUp.start();
clientsCountUp.start();

const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

const handleClick = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  } else {
    menu.classList.add("active");
    document.body.classList.add("overflow-hidden");
  }
}

menuIcon.addEventListener("click", handleClick);
