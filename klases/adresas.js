/**
 * UNFINISHED
 */
class Adresas {
  /**
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {Regionas} data.regionas - The ID.
   * @param {string} data.rajonas
   * @param {string} data.miestas
   * @param {string} data.gatve
   */
  constructor(data) {
    this.regionas = data.regionas;
    this.rajonas = data.rajonas;
    this.miestas = data.miestas;
    this.gatve = data.gatve;
  }
  isvedimasPilnas() {
    let ntAdresas = document.createElement("div");
    ntAdresas.classList.add("nt-adresas");
    ntAdresas.append(this.regionas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(`${this.rajonas} raj.`);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.miestas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.gatve);
    return ntAdresas;
  }
}
export { Adresas };
