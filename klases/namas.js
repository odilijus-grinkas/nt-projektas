

import { NT } from "../klases/nt.js";

class Namas extends NT {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstu_sk, kambariu_sk, sklypo_plotas) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas);
        this.aukstu_sk = aukstu_sk;
        this.kambariu_sk = kambariu_sk;
        this.sklypo_plotas = sklypo_plotas;
    }
    isvedimasPilnas() {
        const div = document.createElement("div");
        div.innerHTML = `
            <div>${this.id}</div>
            <div>${this.kaina}€<div>
            <div>${this.aprasymas}</div>
            <div>${this.adresas}</div>
            <div>${this.galerija}</div>
            <div>${this.agentas}</div>
            <div>${this.patalpu_plotas}</div>
            <div>${this.aukstu_sk}</div>
            <div>${this.kambariu_sk}</div>
            <div>${this.sklypo_plotas}</div>
        `;
        return div;
    }
    isvedimasTrumpas(){
        const div = document.createElement("div")
        div.innerHTML = `
        <div>${this.kaina}</div>
        <div>${this.adresas}</div>
        <div>${this.galerija}</div>
        <div>${this.agentas}</div>
        `;
        return div
    }
}

const namas = new Namas(
    1, 25, "wefwefwef", "wffefef", "", "wfwdwdwdwd", 125, 3, 2, 500
);


const outputElement = document.getElementById("namas");

outputElement.appendChild(namas.isvedimasTrumpas());