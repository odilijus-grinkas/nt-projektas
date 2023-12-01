import { NT } from "../nt.js";
/**
 * Klase skirta suformuoti Sklypo isvedima.
 */
class Sklypas extends NT{
    /**
     * 
     * @param {number} id 
     * @param {number} kaina 
     * @param {string} aprasymas 
     * @param {object} adresas 
     * @param {number} sklypo_plotas 
     * @param {object} galerija 
     * @param {object} agentas 
     */
    constructor(id, kaina, aprasymas, adresas,sklypo_plotas, galerija, agentas){
        super(id, kaina, aprasymas, adresas, galerija, agentas);
        this.plotas = sklypo_plotas;
    }
    /**
     * suformuoja komponenta su pilna informacija apie sklypa
     * @returns html "div" element 
     */
    isvedimasPilnas(){
        let isvedimas = document.createElement("div");
        isvedimas.className = "nt-pilnas"
        let kaina = this.kainaIsvedimas();
        let adresas = this.adresas.isvedimasPilnas()
        let nt_stats = document.createElement("div");
        nt_stats.classList.add("nt-stats");
        let nt_nouns = document.createElement("div");
        nt_nouns.classList.add("nt-nouns");
        let nt_numbers = document.createElement("div");
        nt_numbers.classList.add("nt-numbers");
        let aprasymas = document.createElement("div");
        aprasymas.classList.add("nt-aprasymas");
        let galerija = this.galerija.galerijaNT();
        let agentas = this.agentas.nt();
        
        nt_nouns.append("Plotas:");
        nt_numbers.append(`${this.plotas}a`);
        nt_stats.append(nt_nouns, nt_numbers);
        aprasymas.append(this.aprasymas);
        isvedimas.append(kaina, adresas, nt_stats, aprasymas, galerija, agentas);
        
        return isvedimas
    };
    /**
     * suformuoja komponenta su informacija apie sklypa katalogui
     * @returns html "div" element 
     */
    isvedimasKatalogui(){
        let isvedimas = document.createElement("div");
        isvedimas.className = "nt-katalogui";
        isvedimas.append(this.galerija.isvedimasKataloguiNT());
        isvedimas.append(this.kainaIsvedimas());
        isvedimas.append(this.adresas.isvedimasPilnas());
        isvedimas.append(this.agentas.nt());
        
        return isvedimas;       
    }
}
export {Sklypas};