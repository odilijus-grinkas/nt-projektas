import {
    NT
} from "nt.js";

class KomercinesPatalpos extends NT {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas) {
        super(id, kaina, aprasymas, adresas, galerija, agentas)
        this.patalpu_plotas = patalpu_plotas;
    }
    isvedimasPilnas() {
        let div = document.createElement("div");
        div.append(this.kaina);
        div.append(this.aprasymas);
        div.append(this.adresas);
        div.append(this.galerija);
        div.append(this.agentas);
        div.append(this.patalpu_plotas);
        return div;
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
// Informacija laikoma objekte
let komercinisObjektas = new KomercinesPatalpos(
    "100,000$",
    "blablabla",
    "Pieniu gatve, Kaunas",
    "galerija",
    "Petriukas",
    "332",
    "patalpu_plotas",
);
// Eksportavimas
export {
    KomercinesPatalpos,
    komercinisObjektas
};