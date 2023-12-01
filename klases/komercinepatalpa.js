import {
    NT
} from "./nt.js";

/**
 * Returns komercines patalpos
 */
class KomercinesPatalpos extends NT {
  /**
   * NT Class Constructor.
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} array array with imageURLs
   * @param {Object} data.agentas - The agent object.
   * @param {number} data.plotas - Plotas
   */
    constructor(data) {
        super(data)
        this.patalpu_plotas = data.plotas;
    }
    isvedimasPilnas() {
        const ntPilnas = document.createElement("div");
        ntPilnas.classList.add("nt-pilnas");
        const ntKaina = this.kainaIsvedimas();
        const ntAprasymas = document.createElement("div");
        ntAprasymas.classList.add("nt-aprasymas");
        const ntNumbers = document.createElement("div");
        ntNumbers.classList.add("nt-numbers");
        const ntNouns = document.createElement("div");
        ntNouns.classList.add("nt-nouns");
        const ntStats = document.createElement("div");
        ntStats.classList.add("nt-stats");
        const ntAdresas = this.adresas.isvedimasPilnas();
        const ntGalerija = this.galerija.galerijaNT();
        const ntAgentas = this.agentas.nt();

        ntNouns.append("Plotas:");
        ntNumbers.append(`${this.patalpu_plotas}m²`);
        // Example, remove later 👇
        ntNouns.innerHTML += "<br>";
        ntNouns.append("Nusikalstamumas:");
        ntNumbers.innerHTML += "<br>";
        ntNumbers.append("20%");
        // Example, remove later 👆
        ntAprasymas.append(this.aprasymas);
        ntStats.append(ntNouns, ntNumbers);
        ntPilnas.append(ntKaina,ntAprasymas,ntStats,ntAdresas,ntGalerija,ntAgentas);

        return ntPilnas;
    }
    isvedimasKatalogui() {
        let div = document.createElement("div");
        div.append(this.adresas);
        div.append(kainaIsvedimas());
        div.append(this.galerija);
        div.append(this.agentas);
        return div;
    }
}

// Abi naujas klasės extendina KomercinesPatalpos
class GamybinesPatalpos extends KomercinesPatalpos {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas)
    }
}
class Garazas extends KomercinesPatalpos {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas)
    }
}
// Nuomos klasė skirta trumpinti kainą
class NuomaButas extends KomercinesPatalpos {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk)
    }
    kainaIsvedimas() {
        return `${this.kaina}€/mėn.`
    }
}

export {
    KomercinesPatalpos
};