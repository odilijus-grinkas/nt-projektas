class Regionas {
  /**
   * 
   * @constructor
   * @param {string} data.pavadinimas
   * @param {string} data.aprasymas
   */
  constructor(data) {
    this.pavadinimas = data.pavadinimas;
    this.aprasymas = data.aprasymas;
  }
  nt() {
    return this.pavadinimas;
  }
  isvedimas() {
    const regionas_katalogui = document.createElement("div");
    regionas_katalogui.classList.add("regionas-katalogui");
    regionas_katalogui.append(this.pavadinimas,document.createElement("br"), this.aprasymas);
    return regionas_katalogui;
  }
}

export { Regionas };

//testavimas

/*const regionas = {
    pavadinimas: "Vilnius",
    aprasymas: "Sostine"
}

const regionai_isvedimai = new Regionas(regionas)

const isvedimas = document.getElementById("namas");

isvedimas.append(regionai_isvedimai.isvedimas())*/

