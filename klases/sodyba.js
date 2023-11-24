import { Namas } from "../klases/namas.js"

class Sodyba extends Namas {
    constructor(id, patalpu_plotas, kaina, adresas, aukstu_sk, kambariu_sk, sklypo_plotas, aprasymas, galerija, agentas) {
        super(id, patalpu_plotas, kaina, adresas, aukstu_sk, kambariu_sk, sklypo_plotas, aprasymas, galerija, agentas)
    }
    isvedimasPilnas() {
        let container = document.createElement("div");
        container.append(this.patalpu_plotas);
        container.append(document.createElement("br"));
        container.append(kainaIsvedimas());
        container.append(document.createElement("br"));
        container.append(this.adresas);
        container.append(document.createElement("br"));
        container.append(this.aukstu_sk);
        container.append(document.createElement("br"));
        container.append(this.kambariu_sk)
        container.append(document.createElement("br"));
        container.append(this.sklypo_plotas)
        container.append(document.createElement("br"));
        container.append(this.aprasymas)
        container.append(document.createElement("br"));
        container.append(this.galerija)
        container.append(document.createElement("br"));
        container.append(this.agentas)
        document.body.append(container);
    }
    isvedimasKatalogui() {
        let container = document.createElement("div");
        container.append(kainaIsvedimas());
        container.append(document.createElement("br"));
        container.append(this.adresas);
        container.append(document.createElement("br"));
        container.append(this.sklypo_plotas)
        container.append(document.createElement("br"));
        container.append(this.galerija)
        container.append(document.createElement("br"));
    }
}