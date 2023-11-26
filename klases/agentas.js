
/**
 * UNFINISHED
 */
class Agentas {
  /**
   *
   * @param {string} vardas
   * @param {string} pavarde
   * @param {Galerija} Galerija
   */
  constructor(vardas, pavarde, galerija) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.galerija = galerija;
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
