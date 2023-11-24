import { NT } from "./nt"

class NT extends Namas {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstu_sk, kambariu_sk, sklypo_plotas ){
       super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas)
       this.aukstu_sk = aukstu_sk
       this.kambariu_sk = kambariu_sk
       this.sklypo_plotas = sklypo_plotas
    }
        
}