import { Galerija } from "./galerija.js";
class Agentas {
  /**
   *
   * @param {string} vardas
   * @param {string} pavarde
   * @param {string} nuotraukaURL pvz "https://picsum.photos/id/15/500"
   */
  constructor(vardas, pavarde, nuotraukaURL=[]) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.galerija = new Galerija([nuotraukaURL]);
  }
  nt() {
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("nt-agentas")
    ntAgentas.append(
      this.galerija.isvedimasKataloguiAgento(),
      this.vardas,
      " ",
      this.pavarde
    );
    return ntAgentas;
  }
}

export { Agentas };
