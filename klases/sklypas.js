import { NT } from "./nt.js";

class Sklypas extends NT{
    constructor(id, kaina, aprasymas,sklypo_plotas, adresas, galerija, agentas){
        super(id, kaina, aprasymas, adresas, galerija, agentas);
        this.plotas = sklypo_plotas;
    }
    isvedimasPilnas(){
        // let isvedimas = document.createElement("div");
        // isvedimas.className = "Sklypas";
        
        // document.getElementById("rez").append(isvedimas);
        let photo = document.createElement("img");
        photo.setAttribute("src", "https://picsum.photos/200/300");
        let adresas = document.createElement("p");
        adresas.innerHTML = `${this.adresas}`;
        let plotas = document.createElement("p");
        plotas.inert = `${this.plotas}`;
        let kaina = document.createElement("div");
        kaina.innerHTML = `${kainaIsvedimas()}`;
        document.getElementById("rez").append(photo);
        document.getElementById("rez").append(adresas);
        document.getElementById("rez").append(plotas);
        document.getElementById("rez").append(kaina);
        


    };
    
    // isvedimasKatalogui()
}
export default Sklypas