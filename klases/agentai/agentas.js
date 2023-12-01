import { Galerija } from "../galerija.js";
// import { agentai} from "./agentai.js"
class Agentas {
  /**
   *
   * @param {string} vardas
   * @param {string} pavarde
   * @param {string} nuotraukaURL pvz "https://picsum.photos/id/15/500"
   */
  constructor(vardas, pavarde, nuotraukaURL=[], aprasas, regionas, agentai) {
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

// static isvedimasAgentuSarasui(agentai){
//   const sarasas = document.createElement("div");
//   sarasas.classList.add("agentu-sarasas");
//   for(let a = 0; a < agentai.length; a++){
//     console.log(agentai[a])
//     let div = document.createElement("div");
//     div.classList.add("agentas");
//     const vardas = document.createElement("p");
//     const pavarde = document.createElement("p");
//     const foto = document.createElement("img");
//     console.log((agentai[a].galerija)[0])
//     foto.setAttribute("src", agentai[a].galerija);
//     vardas.append(agentai[a].vardas);
//     pavarde.append(agentai[a].pavarde);
//     div.append(foto,vardas, pavarde);
//     // div.append(agentas.vardas, agentas.regionas);
//     sarasas.append(div);
//   }
//   return sarasas;
// }
// static isvedimasAgentuSarasui(agentai){
  //   const sarasas = document.createElement("div");
  //   sarasas.classList.add("agentu-sarasas");
  //   for(let a = 0; a < agentai.length; a++){
  //     console.log(agentai[a].vardas)
  //     let div = document.createElement("div");
  //     div.classList.add("agentas");
  //     const vardas = document.createElement("p");
  //     const pavarde = document.createElement("p");
  //     vardas.append(agentai[a].vardas);
  //     pavarde.append(agentai[a].pavarde);
  //     div.append(vardas, pavarde);
  //     // div.append(agentas.vardas, agentas.regionas);
  //     sarasas.append(div);
  //   }
  //   return sarasas;
  // }

// class AgentuSarasas extends Agentas{
//   // 
//   static isvedimasAgentuSarasui(agentai){
//     const sarasas = document.createElement("div");
//     sarasas.classList.add("agentu-sarasas");
//     for(let agentas in agentai){
//       console.log(agentas.nt());
//       // let div = document.createElement("div");
//       // div.classList.add("agentas");
//       // div.append(agentai[a]);
//       // // div.append(agentas.vardas, agentas.regionas);
//       // sarasas.append(div);
//     };
//     return sarasas;
//   };
// };

export { Agentas };