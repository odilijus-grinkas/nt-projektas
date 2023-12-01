class Regionas {
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
    regionas_katalogui.append(this.pavadinimas, this.aprasymas);
    return regionas_katalogui;
  }
}

export { Regionas };
