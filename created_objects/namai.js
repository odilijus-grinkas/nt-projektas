import { Namas, NamasNuoma } from "../klases/namas.js";
import { agentai } from "./agentai.js";
import { Adresas } from "../klases/adresas.js";
import { regionai } from "./regionai.js";


const adresasobject = {
    regionas: regionai[0],
    rajonas: "Klaipėdos rajono savivaldybė",
    miestas: "Klaipėda",
    gatve: "Puodų g. 59",
    namo_nr: 5,
};
const adresasobject1 = {
  regionas: regionai[1],
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Kaunas",
  gatve: "Drakonų g. 55",
  namo_nr: 5,
};
const adresasobject2= {
  regionas: regionai[2],
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Rožių g. 122",
  namo_nr: 5,
};
const adresasobject3 = {
  regionas: regionai[3],
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Žirgų g. 45",
  namo_nr: 5,
};

const adresas = new Adresas(adresasobject)
const adresas1 = new Adresas(adresasobject1)
const adresas2 = new Adresas(adresasobject2)
const adresas3 = new Adresas(adresasobject3)
 
let namai = [
    new Namas({
        id: 1,
        kaina: 270000,
        aprasymas: `Parduodamas namas strategiškai patogioje ir vaizdingoje gyvenvietėje Vanagų g. su sklypu.
        Vos už kelių minučių pėsčiomis yra Medžiakalnio geomorfologinis draustinis,
        aplinkui gyvenvietę yra net keli ežerai. Puikus pasirinkimas norintiems gyventi ramioje gamtos apsuptyje,
        kartu nesunkiai pasiekiant miesto centrą. Namas yra įrengtas pagal A++ klasės reikalavimus.`,
        adresas: adresas,
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_114207926/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114207924/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114207940/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
        ],
        agentas: agentai[0],
        patalpu_plotas: "149.25 kvadratiniai metrai",
        aukstu_sk: 1,
        kambariu_sk: 4,
        sklypo_plotas: "8.65 arai",
    }),
    new Namas({
        id: 2,
        kaina: 261160,
        aprasymas: `Parduodami DU A++ energinės klasės namai, pro kurių langus atsiveria miško arba upės vaizdai. Abu namai turi dideles, net 40 kv. m. stogines, erdvius kiemus.`,
        adresas: adresas1,
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_114259076/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114259032/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114259006/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
        ],
        agentas: agentai[1],
        patalpu_plotas: "133.93 kv. m. + 40 kv. m. stoginė automobiliams",
        aukstu_sk: 2,
        kambariu_sk: 8,
        sklypo_plotas: "6.83 arai",
    }),
    new NamasNuoma({
        id: 3,
        kaina: 4388,
        aprasymas: `For sale - prestigious townhouse B (139,95 sq. m. + a garage for 2 cars) in the heart of Vilnius (Palangos st.).
        A garage's price - 40 000 Eur.
        There is a walk just 10 minutes away from the townhouse to the historic centre of the capital and major business centres.
        In addition, the complex is located in a quiet area near the main city park.`,
        adresas: adresas2,
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_112775729/vilnius-senamiestis-pylimo-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_112775731/vilnius-senamiestis-pylimo-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_112775733/vilnius-senamiestis-pylimo-g.jpg",
        ],
        agentas: agentai[1],
        patalpu_plotas: "139,95 kv. m. +  a garage for 2 cars",
        aukstu_sk: 2,
        kambariu_sk: 10,
        sklypo_plotas: "3 arai",
    }),
    new NamasNuoma({
        id: 3,
        kaina: 1238,
        aprasymas: `Puikui namas, labai gražioje vietoja`,
        adresas: adresas3,
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_110716589/kauno-r-sav-uzliedziu-k-aitvaru-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_110716615/kauno-r-sav-uzliedziu-k-aitvaru-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_110716585/kauno-r-sav-uzliedziu-k-aitvaru-g.jpg",
        ],
        agentas: agentai[4],
        patalpu_plotas: "160 kv. m.",
        aukstu_sk: 2,
        kambariu_sk: 5,
        sklypo_plotas: "3 arai",
    }),
]

export { namai };