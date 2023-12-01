import { Regionas } from "./regionas.js";
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
   * @param {string} data.koordinates
   * @param {number} data.namo_nr
   * @param {number} data.buto_nr
   */
  constructor(data) {
    this.regionas = new Regionas(data.regionas);
    this.rajonas = data.rajonas;
    this.miestas = data.miestas;
    this.gatve = data.gatve;
    this.koordinates = data.koordinates;
    this.namo_nr = data.namo_nr;
    this.buto_nr = data.buto_nr;
  }
  isvedimasKoordinaciu() {
    return this.koordinates;
  }
  isvedimasPilnas() {
    let ntAdresas = document.createElement("div");
    ntAdresas.classList.add("nt-adresas");
    ntAdresas.append(this.regionas.nt());
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.rajonas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.miestas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.gatve);

    if (
      this.buto_nr === undefined &&
      this.namo_nr === undefined &&
      this.koordinates === undefined
    ) {
      return ntAdresas;
    } else if (this.koordinates && this.namo_nr && this.buto_nr === undefined) {
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.koordinates);
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.namo_nr);
    } else if (this.namo_nr && this.buto_nr && this.koordinates === undefined) {
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.buto_nr);
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.namo_nr);
      return ntAdresas;
    } else if (
      this.namo_nr === undefined &&
      this.buto_nr === undefined &&
      this.koordinates
    ) {
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.koordinates);
      return ntAdresas;
    } else if (
      this.koordinates === undefined &&
      this.buto_nr === undefined &&
      this.namo_nr
    )
      ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.namo_nr);
    return ntAdresas;
  }
  isvedimasKatalogui() {
    let adresas_katalogui = document.createElement("div");
    adresas_katalogui.classList.add("adresas-katalogui");
    adresas_katalogui.append(this.miestas);
    adresas_katalogui += "<br>";
    adresas_katalogui.append(this.rajonas);
    adresas_katalogui += "<br>";
    adresas_katalogui.append(this.gatve);
  }
}
export { Adresas };
