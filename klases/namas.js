

import { NT } from "../klases/nt.js";
import { Galerija } from "../klases/galerija.js"

const galerija = new Galerija("https://wallpapers.com/images/featured/house-u7pcf18vqolaatio.jpg")

class Namas extends NT {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstu_sk, kambariu_sk, sklypo_plotas) {
        super(id, kaina, aprasymas, adresas, galerija, agentas);
        this.patalpu_plotas = patalpu_plotas;
        this.aukstu_sk = aukstu_sk;
        this.kambariu_sk = kambariu_sk;
        this.sklypo_plotas = sklypo_plotas;
    }
    kainaIsvedimas(){
        return `${this.kaina}€`
    }
    isvedimasPilnas() {
        const div = document.createElement("div");
        div.append (`ID:${this.id}`, document.createElement("br"))
        div.append(`Kaina:${this.kainaIsvedimas()}`, document.createElement("br"))
        div.append (`Aprasymas:${this.aprasymas}`, document.createElement("br"))
        div.append(`Adresas:${this.adresas}`, document.createElement("br"))
        div.append(galerija.isvedimasKataloguiNT(),document.createElement("br") )
        div.append(`Agentas:${this.agentas}`, document.createElement("br"))
        div.append(`Patalpų plotas:${this.patalpu_plotas}`, document.createElement("br"))
        div.append(`Aukštų skaičius: ${this.aukstu_sk}`, document.createElement("br"))
        div.append(`Kambarių skaičius: ${this.kambariu_sk}`, document.createElement("br"))
        div.append(`Sklypo plotas: ${this.sklypo_plotas}`)
        return div 
    }
    isvedimasTrumpas(){
        const div = document.createElement("div")
        div.append(`Kaina:${this.kainaIsvedimas()}`,document.createElement("br"))
        div.append (`Aprasymas:${this.aprasymas}`,document.createElement("br"))
        div.append(`Adresas:${this.adresas}`,document.createElement("br"))
        div.append(galerija.isvedimasKataloguiNT(),document.createElement("br"))
        return div
    }
}
//testavimas
/*const patalpos = new Namas(1, 25, "gražus namas", "Rožių g. 125, Kretinga", null, "Džeronimas Stiltonas", "45 kvadratiniai metrai", 
3, 10, "15 hektarų")

const isvedimas = document.getElementById('namas')

isvedimas.appendChild(patalpos.isvedimasPilnas())
isvedimas.appendChild(document.createElement("br"))
isvedimas.appendChild(patalpos.isvedimasTrumpas())*/

class NuomaNamas extends Namas{
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstu_sk, kambariu_sk, sklypo_plotas){
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstu_sk, kambariu_sk, sklypo_plotas)
    }
    kainaIsvedimas(){
        return `${this.kaina}€ per mėnesį`
    }
    isvedimasPilnas() {
        const div = document.createElement("div");
        div.append (`ID:${this.id}`, document.createElement("br"))
        div.append(`Kaina:${this.kainaIsvedimas()}`, document.createElement("br"))
        div.append (`Aprasymas:${this.aprasymas}`, document.createElement("br"))
        div.append(`Adresas:${this.adresas}`, document.createElement("br"))
        div.append(galerija.isvedimasKataloguiNT())
        div.append(`Agentas:${this.agentas}`, document.createElement("br"))
        div.append(`Patalpų plotas:${this.patalpu_plotas}`, document.createElement("br"))
        div.append(`Aukštų skaičius: ${this.aukstu_sk}`, document.createElement("br"))
        div.append(`Kambarių skaičius: ${this.kambariu_sk}`, document.createElement("br"))
        div.append(`Sklypo plotas: ${this.sklypo_plotas}`)
        return div ;
    }
    isvedimasTrumpas(){
        const div = document.createElement("div")
        div.append(`Kaina:${this.kainaIsvedimas()}`,document.createElement("br"))
        div.append (`Aprasymas:${this.aprasymas}`,document.createElement("br"))
        div.append(`Adresas:${this.adresas}`,document.createElement("br"))
        div.append(galerija.isvedimasKataloguiNT())
        return div
    }
}
//testavimas
/*const patalpos = new NuomaNamas(1, 25, "gražus namas", "Rožių g. 125, Kretinga", null, "Džeronimas Stiltonas", "45 kvadratiniai metrai", 
3, 10, "15 hektarų")

const isvedimas = document.getElementById('namas')

isvedimas.appendChild(patalpos.isvedimasPilnas())
isvedimas.appendChild(document.createElement("br"))
isvedimas.appendChild(patalpos.isvedimasTrumpas())*/