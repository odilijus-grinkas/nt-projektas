import { KomercinesPatalpos } from "./komercinepatalpa.js";
/**
 * Reikalingi globalus array: objektai, agentai, regionai
 */
class NTSvetaine {
  constructor() {}
  static menu() {
    // add events here pls🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    main.innerHTML = mainHTML;
  }
  static agentai() {
    return -1;
  }
  static agentas(id) {
    return -1;
  }
  static regionai() {
    // dominyko code
    return -1;
  }
  /**
   * Grazina masyva kazkokio NT pilnasIsrasimas() divus
   * @param {string} Klase galimi: Namas, Butas, Sklypas, Sodybos, GamybinePatalpa, Garazas. Nuomom: NamasNuoma etc.
   * @param {number} kiekis 0 = visus isvesti(default)
   */
  static objektai(klase, kiekis = 0) {
    let filteredObjects = filterObjects(klase);
    insertObjects(filteredObjects, kiekis);
  }
  static objektas(id) {
    return -1;
  }
  static titulinis() {
    let klases = [
      "Namas",
      "Butas",
      "Sklypas",
      "KomercinePatalpa",
      "Sodybos",
      "GamybinePatalpa",
      "Garazas",
    ];
    // for each klases class run insertObject(klase,5)
    return -1;
  }
}

function insertObjects(array, amount) {
  let index = 0;
  if (array.length == 0) {
    document
      .getElementsByClassName("nt-katalogas")[0]
      .append("Nera Objektu, blogas pavadinimas?");
    index = Infinity;
  } else if (amount == 0) {
    index = -Infinity;
  }
  for (let obj of array) {
    if (index >= amount) break;
    let div = obj.isvedimasKatalogui();
    document.getElementsByClassName("nt-katalogas")[0].append(div);
    index++;
  }
}
// Returns array of objects fully filtered
function filterObjects(className) {
  let filteredObjects = [];
  // uses global objektai array
  for (let obj of objektai) {
    if (obj.constructor.name == className) {
      filteredObjects.push(obj);
    }
  }
  return filteredObjects;
}
let komercinesPatalposData = {
  id: 1,
  kaina: 1000,
  aprasymas:
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
  adresas: "adresasData",
  galerija: [
    "https://picsum.photos/id/20/500",
    "https://picsum.photos/id/21/500",
    "https://picsum.photos/id/22/500",
  ],
  agentas: {},
  plotas: 100,
};
const mainHTML = `<div class="side-buttons">
<a href="#">Agentai</a>
<a href="#">Regionai</a>
<a href="#">Namai</a>
<a href="#">Butai</a>
<a href="#">Sklypai</a>
<a href="#">Komercines</a>
<a href="#">Gamybines</a>
<a href="#">Garažai</a>
</div>
<div class="right-side">
<div class="pirkti-nuoma">
  <a href="#">Pirkti</a>
  <a href="#">Nuoma</a>
</div>
<div class="nt-katalogas">
</div>
</div>`;
let komercine = new KomercinesPatalpos(komercinesPatalposData);
let objektai = [komercine];
let a = document.createElement("div");
let b = document.createElement("div");
a.append("obj1");
b.append("obj2");
objektai.push(a);
objektai.push(b);
objektai.push(new KomercinesPatalpos(komercinesPatalposData));
objektai.push(new KomercinesPatalpos(komercinesPatalposData));
objektai.push(new KomercinesPatalpos(komercinesPatalposData));

NTSvetaine.menu();
NTSvetaine.objektai("KomercinesPatalpos");
