class NT {
  /**
   * 
   * @param {number} id 1
   * @param {number} kaina 9999
   * @param {string} aprasymas "Lorem Ipsum"
   * @param {Adresas} adresas adresasObject
   * @param {Galerija} galerija galerijaObject
   * @param {Agentas} agentas agentasObject
   */
  constructor(id, kaina, aprasymas, adresas, galerija, agentas){
    this.id = id;
    this.kaina = kaina;
    this.aprasymas = aprasymas;
    this.adresas = adresas;
    this.galerija = galerija;
    this.agentas = agentas;
  }
  kainaIsvedimas(){
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€`)
    return kainaDiv
  }
}

export {NT}