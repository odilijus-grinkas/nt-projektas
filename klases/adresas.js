/**
 * UNFINISHED
 */
class Adresas {
  /**
   *
   * @param {Regionas} regionas
   * @param {string} rajonas
   * @param {string} miestas
   * @param {string} gatve
   */
  constructor(regionas, rajonas, miestas, gatve) {
    this.regionas = regionas;
    this.rajonas = rajonas;
    this.miestas = miestas;
    this.gatve = gatve;
  }
  isvedimasPilnas() {
    let ntAdresas = document.createElement("div");
    ntAdresas.classList.add("nt-adresas");
    ntAdresas.append(this.regionas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.rajonas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.miestas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.gatve);
    return ntAdresas;
  }
}
export { Adresas };
