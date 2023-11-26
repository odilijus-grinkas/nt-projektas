import { NT } from "../klases/nt.js";
import { Galerija } from "../klases/galerija.js";
import { Adresas } from "../klases/adresas.js";
import { Agentas } from "../klases/agentas.js";

const galerija_agentas = new Galerija(
    "https://upload.wikimedia.org/wikipedia/en/e/ee/Agent_J_MIB11.jpg",
)

const galerija = new Galerija(
  "https://wallpapers.com/images/featured/house-u7pcf18vqolaatio.jpg",
  "https://images7.alphacoders.com/436/thumb-1920-436350.jpg",
  "https://wallpapers.com/images/featured/beautiful-house-x1yu28g8twzle26l.jpg",
);

const adresas2 = new Adresas(
  "Klaipėdos apskritis",
  "Klaipėdos rajono savivaldybė",
  "Klaipėda",
  "Puodžių g. 10"
);

const agentas = new Agentas(
  "Jonas",
  "Jonaitis",galerija_agentas
);

class Namas extends NT {
  /**
   * @param {number} id 1
   * @param {number} kaina 100000
   * @param {string} aprasymas "grazus namas"
   * @param {Object} adresas adresas 2
   * @param {Object} galerija galerija
   * @param {Object} agentas  agentas
   * @param {string} patalpu_plotas "45 kvadratiniai metrai"
   * @param {number} aukstu_sk 5
   * @param {number} kambariu_sk 6
   * @param {string} sklypo_plotas "15 hektarų"
   */
  constructor(
    id,
    kaina,
    aprasymas,
    adresas,
    galerija,
    agentas,
    patalpu_plotas,
    aukstu_sk,
    kambariu_sk,
    sklypo_plotas
  ) {
    super(id, kaina, aprasymas, adresas, galerija, agentas);
    this.patalpu_plotas = patalpu_plotas;
    this.aukstu_sk = aukstu_sk;
    this.kambariu_sk = kambariu_sk;
    this.sklypo_plotas = sklypo_plotas;
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
    katalogas.append(this.galerija.isvedimasKataloguiNT());
    katalogas.append(this.patalpu_plotas);
    return katalogas;
}
}
//testavimas
/*const patalpos = new Namas(
  1,
  25,
  "gražus namas",
  adresas2,
  galerija,
  agentas,
  "45 kvadratiniai metrai",
  3,
  10,
  "15 hektarų"
);

const isvedimas = document.getElementById("namas");

isvedimas.append(patalpos.isvedimasPilnas(),patalpos.isvedimasTrumpas());*/

/**
 * NamasNuoma klasė, kuri pakeičia namas klasę, kad rodytų nuomos kainą.
 */
class NamasNuoma extends Namas {
    /**
     * @param {number} id 1
     * @param {number} kaina 100000
     * @param {string} aprasymas "grazus namas"
     * @param {Object} adresas adresas 2
     * @param {Object} galerija galerija
     * @param {Object} agentas  agentas
     * @param {string} patalpu_plotas "45 kvadratiniai metrai"
     * @param {number} aukstu_sk 5
     * @param {number} kambariu_sk 6
     * @param {string} sklypo_plotas "15 hektarų"
     */
    constructor(
      id,
      kaina,
      aprasymas,
      adresas,
      galerija,
      agentas,
      patalpu_plotas,
      aukstu_sk,
      kambariu_sk,
      sklypo_plotas
    ) {
      super(id, kaina, aprasymas, adresas, galerija, agentas);
      this.patalpu_plotas = patalpu_plotas;
      this.aukstu_sk = aukstu_sk;
      this.kambariu_sk = kambariu_sk;
      this.sklypo_plotas = sklypo_plotas;
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
      katalogas.append(this.galerija.isvedimasKataloguiNT());
      katalogas.append(this.patalpu_plotas);
      return katalogas;
  }
  }

//testavimas
/*const patalpos = new NamasNuoma(
  1,
  25,
  "gražus namas",
  adresas2,
  galerija,
  agentas,
  "45 kvadratiniai metrai",
  3,
  10,
  "15 hektarų"
);

const isvedimas = document.getElementById("namas");

isvedimas.append(patalpos.isvedimasPilnas(),patalpos.isvedimasTrumpas())*/