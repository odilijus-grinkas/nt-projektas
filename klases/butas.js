import {
    NT
} from "nt.js";

class Butas extends NT {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk, ) {
        super(id, kaina, aprasymas, adresas, galerija, agentas)
        this.patalpu_plotas = patalpu_plotas;
        this.aukstas = aukstas;
        this.kambariu_sk = kambariu_sk;
    }
    isvedimasPilnas() {
        let div = document.createElement("div");
        div.append(this.id);
        div.append(this.kaina);
        div.append(this.aprasymas);
        div.append(this.adresas);
        div.append(this.galerija);
        div.append(this.agentas);
        div.append(this.patalpu_plotas);
        div.append(this.aukstas);
        div.append(this.kambariu_sk);
        return div;
    }
    isvedimasKatalogui() {
        let div = document.createElement("div");
        div.append(this.adresas);
        div.append(this.kaina);
        div.append(this.galerija);
        div.append(this.agentas);
        return div;
    }
}

let butoObjektas = new Butas(
    "123",
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