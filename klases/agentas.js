import { Galerija } from "./galerija.js";
// import { agentai} from "./agentai.js"
class Agentas {
  /**
   *
   * @param {string} vardas
   * @param {string} pavarde
   * @param {string} nuotraukaURL pvz "https://picsum.photos/id/15/500"
   * @param {string} aprasas 
   * @param {Regionai} nuotraukaURL Regionai object
   * 
   */
  constructor(vardas, pavarde, nuotraukaURL=[], aprasas, regionas) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.galerija = new Galerija([nuotraukaURL]);
    this.aprasas = aprasas;
    this.regionas = regionas;
  }
  nt() {
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("nt-agentas")
    const vardas = document.createElement("p");

    vardas.append(`${this.vardas} ${this.pavarde}`);     
    ntAgentas.append(this.galerija.isvedimasKataloguiAgento(), vardas);
   
    return ntAgentas;
  };
  isvedimasPilnas(){
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("pilnas-agentas");
    const vardas = document.createElement("p");
    const pavarde = document.createElement("p");
    const aprasas = document.createElement("p");

    
    vardas.append(this.vardas);
    pavarde.append(this.pavarde);
    aprasas.append(`Priziurimas regionas: ${this.aprasas}`);
    ntAgentas.append(this.galerija.isvdeimasProfilis(), vardas, pavarde, this.regionas, aprasas);

    return ntAgentas
  };
  isvedimasNTKatalogui(){
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("katalogas-agentas");
    ntAgentas.append(`${this.vardas} ${this.pavarde}`);

    return ntAgentas
  };
  /**
   * 
   * @param {array} agentai 
   * @returns container div with multiple divs containing info on agentas.
   */
  static isvedimasAgentuSarasui(agentai){
    const sarasas = document.createElement("div");
    sarasas.classList.add("agentu-sarasas");
    for(let a = 0; a < agentai.length; a++){
      let div = document.createElement("div");
      div.classList.add("agentas");
      const foto = document.createElement("img");
      foto.setAttribute("src", agentai[a].galerija.imageArray[0]);
      const vardas = document.createElement("p");
      vardas.classList.add("vardas");
      const pavarde = document.createElement("p");
      pavarde.classList.add("pavarde");
      const regionai = document.createElement("div");
      regionai.classList.add("regionas");
      let objektai_btn = document.createElement("a");
      objektai_btn.classList.add("objektai-btn");
      objektai_btn.setAttribute("href", "#");
      vardas.append(agentai[a].vardas);
      pavarde.append(agentai[a].pavarde);
      regionai.append(`Regionas: ${agentai[a].regionas}`);
      objektai_btn.append("Objektai");
      //rezervuota kodui kuris pasakys kiek objektu turi agentas.
      //kodas pereis per visus nt objektus ir grazins tuos objektus kur yra jo vardas(arba ju suma arba sarasa (ul list))
      //gali buti ir kazkoks statinis klases metodas kuris tai padarys. mes gi objekti mokomes :))
      div.append(foto,vardas, pavarde, regionai, objektai_btn);
      sarasas.append(div);
    }
    return sarasas;
  }
}


export { Agentas };