import { KomercinesPatalpos } from "./klases/komercinepatalpa.js";
import { Agentas } from "./klases/agentai/agentas.js";
import { agentai } from "./klases/agentai/agentai.js";
// import { AgentuSarasas } from "./klases/agentai/agentas.js";
let agentasExample = agentai[1];
// let agentasExample = new Agentas("James", "Bond", "https://picsum.photos/id/69/150");
let adresasData = {
  regionas: "Regionas Placeholder",
  rajonas: "Rajonas",
  miestas: "Miestas",
  gatve: "gatviu g. 19",
};
let komercinesPatalposData = {
  id: 1,
  kaina: 1000,
  aprasymas:
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
  adresas: adresasData,
  galerija: [
    "https://picsum.photos/id/20/500",
    "https://picsum.photos/id/21/500",
    "https://picsum.photos/id/22/500",
  ],
  agentas: agentasExample,
  plotas: 100,
};
let ntExample = new KomercinesPatalpos(komercinesPatalposData);

test.append(Agentas.isvedimasAgentuSarasui(agentai));
// test.append(ntExample.isvedimasPilnas());
// test.append(sklypas_test.isvedimasPilnas());
