import {
    NT
} from "./nt.js";
import {
    Galerija
} from "./galerija.js";
import {
    Agentas
} from "./agentas.js";

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
// @param {Array<string>} imageURLs

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
        div.append(this.kainaIsvedimas());
        return div;
    }
}

class ButasNuoma extends Butas {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk)
    }
    kainaIsvedimas() {
        return `${this.kaina}€/mėn.`
    }
}

// let butoObjektas = new Butas(
//     "100,000$",
//     "blablabla",
//     "Pieniu gatve, Kaunas",
//     "galerija",
//     "Petriukas",
//     "332",
//     "patalpu_plotas",
//     "aukstas",
//     "3"
// );

export {
    Butas,
    ButasNuoma
};