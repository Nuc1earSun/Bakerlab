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
