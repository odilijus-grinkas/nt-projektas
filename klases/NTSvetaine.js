// Nezinau kaip kitaip objektus sitai statinei klasei rasti
import { Agentas } from "./agentas.js";
import { agentai } from "../created_objects/agentai.js";
import { objektai } from "../created_objects/objektai.js";

const main = document.getElementById("main");
const mainHTML = `<div class="side-buttons">
<div class='list-buttons' id="agentaiButton">Agentai</div>
<div class='list-buttons' id="regionaiButton">Regionai</div>
<div class='object-buttons'>Namai</div>
<div class='object-buttons'>Butai</div>
<div class='object-buttons'>Sklypai</div>
<div class='object-buttons'>Komercines</div>
<div class='object-buttons'>Gamybines</div>
<div class='object-buttons'>Garažai</div>
</div>
<div class="right-side">
<div class="pirkti-nuoma">
  <div id="pirkti-button">Pirkti</div>
  <div id="nuomai-button">Nuomai</div>
</div>
<div class="nt-katalogas">
</div>
</div>
<div id="token" style="display:none">Neliesti</div>`;

/**
 * Reikalingi globalus array: objektai, agentai, regionai
 * Reikalingas div puslapyje su id="main"
 */
class NTSvetaine {
  constructor() {}
  static menu() {
    main.innerHTML = mainHTML;
    leftButtonObjectEvents();
    pirkti_nuoma_buttonEvents();
  }
  static agentai() {
    agentuSarasoIsvedimas();
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
   * @param {string} Klase galimi: Namas, Butas, Sklypas, Sodybos, KomercinesPatalpos, GamybinePatalpa, Garazas... Nuomom: NamasNuomai etc.
   * @param {number} kiekis 0 = visus isvesti(default)
   */
  static objektai(klase, kiekis = 0, clear = true) {
    if (clear) {
      // clean nt-katalogas before adding
      document.getElementsByClassName("nt-katalogas")[0].innerHTML = "";
    }
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
      "Sodybos",
      "KomercinesPatalpos",
      "GamybinePatalpa",
      "Garazas",
    ];
    for (let klase of klases) {
      this.objektai(klase, 5, false);
      this.objektai(klase + "Nuoma", 5, false);
    }
  }
}

function insertObjects(array, amount) {
  let index = 0;
  if (amount == 0) {
    index = -Infinity;
  }
  for (let obj of array) {
    if (index >= amount) break;
    let div = obj.isvedimasKatalogui();
    let objectButton = document.createElement("button");
    objectButton.innerText = "Apsilankyti";
    objectButton.addEventListener("click", objectPilnasIsvedimasEvent(obj));
    div.append(objectButton);
    let katalogasDiv = document.getElementsByClassName("nt-katalogas")[0];
    katalogasDiv.append(div);
    index++;
  }
}

function objectPilnasIsvedimasEvent(obj) {
  return () => {
    let katalogasDiv = document.getElementsByClassName("nt-katalogas")[0];
    katalogasDiv.innerHTML = "";
    katalogasDiv.append(obj.isvedimasPilnas());
    hidePirktiNuomaButtons();
  };
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
  if (filteredObjects.length == 0) {
    console.log("No objects with this name: " + className);
  }
  return filteredObjects;
}
// leftButtonObjectEvents()
function leftButtonObjectEvents() {
console.log(document.getElementsByClassName("object-buttons"))
  let buttons = document.getElementsByClassName("object-buttons");
  let classNames = [
    "Namas",
    "Butas",
    "Sklypas",
    "KomercinesPatalpos",
    "GamybinePatalpa",
    "Garazas",
  ];
  for (let i = 0; i < classNames.length; i++) {
    buttons[i].addEventListener("click", () => {
      NTSvetaine.objektai(classNames[i]);
      NTSvetaine.objektai(classNames[i] + "Nuoma", 0, false);
      document.getElementById("token").innerHTML = classNames[i];
      hidePirktiNuomaButtons(false);
    });
  }
}
function pirkti_nuoma_buttonEvents() {
  let pirkti = document.getElementById("pirkti-button");
  let nuomai = document.getElementById("nuomai-button");
  pirkti.addEventListener("click", () => {
    if (token.innerHTML != "Neliesti") {
      NTSvetaine.objektai(token.innerHTML, 0);
    }
  });
  nuomai.addEventListener("click", () => {
    if (token.innerHTML != "Neliesti") {
      NTSvetaine.objektai(token.innerHTML + "Nuoma", 0);
      console.log(token.innerHTML + "Nuoma")
    }
  });
}
function hidePirktiNuomaButtons(hide = true){
  let buttons = document.getElementsByClassName("pirkti-nuoma")[0];
  if (hide){
    buttons.style.display = "none";
  } else {
    buttons.style.display = "flex";
  }
}

function agentuSarasoIsvedimas(){
  let button = document.getElementById("agentaiButton");
  button.addEventListener("click", () => {
  document.getElementsByClassName("nt-katalogas")[0].innerHTML = Agentas.isvedimasVisiAgentai(agentai).innerHTML; 
  agentoProfilioIsvedimas();
  hidePirktiNuomaButtons(true)
  });
};

function agentoProfilioIsvedimas(){
  let buttons = document.getElementsByClassName("profilis-btn");
    for(let b = 0; b < buttons.length; b++){
      buttons[b].addEventListener("click", (event) => {
        let number = event.currentTarget.getAttribute("num");
        for( let agentas of agentai){
          if(agentas.id == number){
            document.getElementsByClassName("nt-katalogas")[0].innerHTML = agentas.isvedimasPilnas().innerHTML; 
          };
        };
      });
    };
};

NTSvetaine.menu();
NTSvetaine.titulinis();


export { NTSvetaine };