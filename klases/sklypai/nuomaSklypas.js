import { Sklypas } from "./sklypas.js"

class NuomaSklypas extends Sklypas {
    constructor(id, kaina, aprasymas, adresas,sklypo_plotas, galerija, agentas){
        super(id, kaina, aprasymas, adresas,sklypo_plotas, galerija, agentas);
    }
    kainaIsvedimas() {
        return `${this.kaina}€/mėn.`
    }
}
export {NuomaSklypas}