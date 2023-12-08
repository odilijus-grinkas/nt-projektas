import NT from "nt.js";
import Galerija from "galerija.js";
import Agentas from "agentas.js";

// @class
// @constructor
// @param {number} kaina specific
// @param {Adresas} adresas imported
// @param {Galerija} galerija imported
// @param {Object} agentas imported
// @param {number} patalpu_plotas 
// @param {number} aukstas
// @param {number} kambariu_sk
// @param {string} aprasymas
// ?  @param {Array<string>} imageURLs

class Butas extends NT {
    constructor(objektas) {
        super(objektas)
        this.patalpu_plotas = objektas.patalpu_plotas;
        this.aukstas = objektas.aukstas;
        this.kambariu_sk = objektas.kambariu_sk;
    }
    isvedimasPilnas() {
        let div = document.createElement("div");
        div.append(this.kaina);
        this.galerija = new Galerija();
        this.adresas = new Adresas();
        this.agentas = new Agentas();
        div.append(this.patalpu_plotas);
        div.append(this.aukstas);
        div.append(this.kambariu_sk);
        div.append(this.aprasymas);
        return div;
    }
    isvedimasKatalogui() {
        let div = document.createElement("div");
        div.append(kainaIsvedimas());
        this.galerija = new Galerija();
        this.adresas = new Adresas();
        this.agentas = new Agentas();
        return div;
    }
}

class NuomaButas extends Butas {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk)
    }
    kainaIsvedimas() {
        return `${this.kaina}€/mėn.`
    }
}

let butoObjektas = new Butas(
    "100,000$",
    "blablabla",
    "Pieniu gatve, Kaunas",
    "galerija",
    "Petriukas",
    "332",
    "patalpu_plotas",
    "aukstas",
    "3"
);

export {
    Butas,
    NuomaButas,
};

let butas = {
  id: 1,
  kaina: 120000, // simbolis?
  aprasymas: "Buildings stand as silent witnesses to the passage of time, embodying the ingenuity and aspirations of human civilization.",
  adresas: {
    regionas: "Dzukija",
    rajonas: "Rajonas",
    miestas: "Miestas",
    gatve: "Gatve"
  },
  galerija: ["https://images.pexels.com/photos/9989558/pexels-photo-9989558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9901507/pexels-photo-9901507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4332118/pexels-photo-4332118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  agentas: agentai[1],
  patalpu_plotas: "120kv., m",
  aukstas: 2,
  kambariu_sk: 5
}
// console.log(butas)