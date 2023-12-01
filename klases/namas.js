import { NT } from "../klases/nt.js";
import { Adresas } from "../klases/adresas.js";
import { Agentas } from "../klases/agentas.js";

//sukuriame regionu masiva su objektais
const regionai = [
  {
    pavadinimas: "Vilnius",
    aprasymas: "Trecias pagal dydi miestas Lietuvoje",
  },
];
// priskiriame masyvo pirma elementa prie regionas
const adresas2 = {
  regionas: regionai[0],
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Puodžių g. 10",
  //koordinates: "82828, 8828582",
  namo_nr: 5,
  //buto_nr: 5
};

const agentas = new Agentas(
  "Jonas",
  "Jonaitis",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/Agent_J_MIB11.jpg"
);

class Namas extends NT {
  /**
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} array array with imageURLs
   * @param {Object} data.agentas - The agent object.
   * @param {number} data.sklypo_plotas - Plotas
   * @param {number} data.aukstu_sk - Aukstu skaicius
   * @param {number} kambariu_sk - kambariu skaicius
   * @param {string} sklypo_plotas - sklypo plotas su matavimo vienetais(hektarais)
   */
  constructor(data) {
    super(data);
    this.patalpu_plotas = data.patalpu_plotas;
    this.aukstu_sk = data.aukstu_sk;
    this.kambariu_sk = data.kambariu_sk;
    this.sklypo_plotas = data.sklypo_plotas;
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€`);
    return kainaDiv;
  }
  isvedimasPilnas() {
    const ntPilnas = document.createElement("div");
    ntPilnas.classList.add("nt-pilnas");
    const ntNouns = document.createElement("div");
    ntNouns.classList.add("nt-nouns");
    const ntNumbers = document.createElement("div");
    ntNumbers.classList.add("nt-numbers");
    const ntStats = document.createElement("div");
    ntStats.classList.add("nt-stats");
    const ntAprasymas = document.createElement("div");
    ntAprasymas.classList.add("nt-aprasymas");
    const ntNouns1 = document.createTextNode("ID:");
    const ntNouns2 = document.createTextNode("Patalpų plotas:");
    const ntNouns3 = document.createTextNode("Aukstu skaičius:");
    const ntNouns4 = document.createTextNode("Kambarių skaičius:");
    const ntNouns5 = document.createTextNode("Sklypo plotas:");
    ntNouns.append(
      ntNouns1,
      document.createElement("br"),
      ntNouns2,
      document.createElement("br"),
      ntNouns3,
      document.createElement("br"),
      ntNouns4,
      document.createElement("br"),
      ntNouns5,
      document.createElement("br")
    );
    ntNumbers.append(
      this.id,
      document.createElement("br"),
      this.patalpu_plotas,
      document.createElement("br"),
      this.aukstu_sk,
      document.createElement("br"),
      this.kambariu_sk,
      document.createElement("br"),
      this.sklypo_plotas,
      document.createElement("br")
    );
    ntAprasymas.append(this.aprasymas);
    const ntAdresas = this.adresas.nt();
    ntAdresas.append(this.regionai.nt());
    ntStats.append(ntNumbers, ntNouns);
    ntPilnas.append(
      ntStats,
      ntAprasymas,
      ntAdresas,
      this.galerija.galerijaNT(),
      this.kainaIsvedimas(),
      this.adresas.isvedimasPilnas(),
      this.agentas.nt()
    );
    return ntPilnas;
  }
  isvedimasTrumpas() {
    let katalogas = document.createElement("div");
    katalogas.append(this.adresas.isvedimasPilnas());
    katalogas.append(this.kainaIsvedimas());
    katalogas.append(
      this.galerija.isvedimasKataloguiNT(),
      document.createElement("br")
    );
    katalogas.append(this.patalpu_plotas);
    return katalogas;
  }
}

const namas = {
  id: 1,
  kaina: 25,
  aprasymas: "gražus namas",
  adresas: adresas2,
  galerija: [
    "https://images7.alphacoders.com/436/thumb-1920-436350.jpg",
    "https://wallpapers.com/images/featured/house-u7pcf18vqolaatio.jpg",
    "https://w.forfun.com/fetch/06/06e40a0a673edfcb9aaa5194cfb684a3.jpeg",
  ],
  agentas: agentas,
  patalpu_plotas: "45 kvadratiniai metrai",
  aukstu_sk: 3,
  kambariu_sk: 10,
  sklypo_plotas: "15 hektarų",
};

//testavimas

/*let NamasIsvedimas = new Namas(namas);

const isvedimas = document.getElementById("namas");

isvedimas.append(NamasIsvedimas.isvedimasTrumpas());*/

/**
 * NamasNuoma klasė, kuri pakeičia namas klasę, kad rodytų nuomos kainą.
 */
class NamasNuoma extends Namas {
  /**
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} array array with imageURLs
   * @param {Object} data.agentas - The agent object.
   * @param {number} data.patalpu_plotas- Plotas
   * @param {number} data.aukstu_sk - Aukstu skaicius
   * @param {number} data.kambariu_sk - kambariu skaicius
   * @param {string} data.sklypo_plotas - sklypo plotas su matavimo vienetais(hektarais)
   */
  constructor(data) {
    super(data);
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€ per mėnesį`);
    return kainaDiv;
  }
  isvedimasPilnas() {
    const ntPilnas = document.createElement("div");
    ntPilnas.classList.add("nt-pilnas");
    const ntNouns = document.createElement("div");
    ntNouns.classList.add("nt-nouns");
    const ntNumbers = document.createElement("div");
    ntNumbers.classList.add("nt-numbers");
    const ntStats = document.createElement("div");
    ntStats.classList.add("nt-stats");
    const ntAprasymas = document.createElement("div");
    ntAprasymas.classList.add("nt-aprasymas");
    const ntNouns1 = document.createTextNode("ID:");
    const ntNouns2 = document.createTextNode("Patalpų plotas:");
    const ntNouns3 = document.createTextNode("Aukstu skaičius:");
    const ntNouns4 = document.createTextNode("Kambarių skaičius:");
    const ntNouns5 = document.createTextNode("Sklypo plotas:");
    ntNouns.append(
      ntNouns1,
      document.createElement("br"),
      ntNouns2,
      document.createElement("br"),
      ntNouns3,
      document.createElement("br"),
      ntNouns4,
      document.createElement("br"),
      ntNouns5,
      document.createElement("br")
    );
    ntNumbers.append(
      this.id,
      document.createElement("br"),
      this.patalpu_plotas,
      document.createElement("br"),
      this.aukstu_sk,
      document.createElement("br"),
      this.kambariu_sk,
      document.createElement("br"),
      this.sklypo_plotas,
      document.createElement("br")
    );
    ntAprasymas.append(this.aprasymas);
    ntStats.append(ntNumbers, ntNouns);
    ntPilnas.append(
      ntStats,
      ntAprasymas,
      this.galerija.galerijaNT(),
      this.kainaIsvedimas(),
      this.adresas.isvedimasPilnas(),
      this.agentas.nt()
    );
    return ntPilnas;
  }
  isvedimasTrumpas() {
    let katalogas = document.createElement("div");
    katalogas.append(this.adresas.isvedimasPilnas());
    katalogas.append(this.kainaIsvedimas());
    katalogas.append(
      this.galerija.isvedimasKataloguiNT(),
      document.createElement("br")
    );
    katalogas.append(this.patalpu_plotas);
    return katalogas;
  }
}

let isvedimasNuoma = new NamasNuoma(namas);

const isvedimas2 = document.getElementById("namas");

isvedimas2.append(
  isvedimasNuoma.isvedimasPilnas(),
  isvedimasNuoma.isvedimasTrumpas()
);
