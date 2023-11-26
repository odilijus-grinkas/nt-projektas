import {
    NT
} from "./nt.js";

/**
 * Returns komercines patalpos
 */
class KomercinesPatalpos extends NT {
    /**
     * 
     * @param {number} id 1
     * @param {number} kaina 100
     * @param {string} aprasymas "lorem ipsum"
     * @param {Object} adresas
     * @param {Object} galerija 
     * @param {Object} agentas 
     * @param {number} patalpu_plotas
     */
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas) {
        super(...arguments)
        this.patalpu_plotas = patalpu_plotas;
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