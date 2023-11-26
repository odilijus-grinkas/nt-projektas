import { KomercinesPatalpos } from "./klases/komercinepatalpa.js";
import { Galerija } from "./klases/galerija.js";
import { Agentas } from "./klases/agentas.js";
import { Adresas } from "./klases/adresas.js";
import { Sklypas } from "./klases/sklypai/sklypas.js";

let galerijaExample = new Galerija("https://picsum.photos/id/20/500", "https://picsum.photos/id/21/500", "https://picsum.photos/id/22/500");
let agentoGalerijaExample = new Galerija("https://picsum.photos/id/69/150");
let agentasExample = new Agentas("James","Bond",agentoGalerijaExample);
let adresasExample = new Adresas("Regionas Placeholder","Rajonas","Miestas","gatviu g. 19");
let ntExample = new KomercinesPatalpos(1,1000,"Lorem Ipsum", adresasExample, galerijaExample, agentasExample, 100);
let sklypas_test = new Sklypas(2, 20000, "Lorem Ipsum", adresasExample, 20, galerijaExample, agentasExample); 
test.append(ntExample.isvedimasPilnas());
test.append(sklypas_test.isvedimasPilnas());
