import { Regionas } from "../klases/regionas.js";

const regionai = [];

const regionas1 = {
  pavadinimas: "Vilnius",
  aprasymas: "Lietuvos sostinė",
};
const regionas2 = {
  pavadinimas: "Panevezys",
  aprasymas: "Miestas",
};
const regionas3 = {
  pavadinimas: "Siauliai",
  aprasymas: "miestas",
};
const regionas4 = {
  pavadinimas: "Klaipeda",
  aprasymas: "Miestas",
};
const regionas5 = {
  pavadinimas: "Moletai",
  aprasymas: "Miestas",
};
const regionas6 = {
  pavadinimas: "Mazeikiai",
  aprasymas: "Miestas",
};
const regionas7 = {
  pavadinimas: "Kaunas",
  aprasymas: "Miestas",
};
const regionas8 = {
  pavadinimas: "Druskininkai",
  aprasymas: "Miestas",
};

regionai.push(new Regionas(regionas1));
regionai.push(new Regionas(regionas2));
regionai.push(new Regionas(regionas3));
regionai.push(new Regionas(regionas4));
regionai.push(new Regionas(regionas5));
regionai.push(new Regionas(regionas6));
regionai.push(new Regionas(regionas7));
regionai.push(new Regionas(regionas8));

export { regionai };
