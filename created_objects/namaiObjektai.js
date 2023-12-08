import { Namas, NamasNuoma } from "../klases/namas.js";
import { agentai } from "./agentai.js";
import { Adresas } from "../klases/adresas.js";
import { regionai } from "./regionai.js";

let adresasobject1 = {
  regionas: regionai[0].nt(),
  rajonas: "Vilniaus rajono savivaldybė",
  miestas: "Vilnius",
  gatve: "Gėlių g. 59",
  namo_nr: 59,
};
let adresasobject2 = {
  regionas: regionai[1].nt(),
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Medžių g. 55",
  namo_nr: 55,
};
let adresasobject3 = {
  regionas: regionai[1].nt(),
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Rožių g. 122",
  namo_nr: 122,
};
let adresasobject4 = {
  regionas: regionai[2].nt(),
  rajonas: "Panevėžio miesto savivaldybė",
  miestas: "Panevėžys",
  gatve: "Žirgų g. 25",
  namo_nr: 25,
};
let adresasobject5 = {
  regionas: regionai[3].nt(),
  rajonas: "Šiaulių miesto savivaldybė",
  miestas: "Šiaulių",
  gatve: "Kopūstų g. 5",
  namo_nr: 5,
};
let adresasobject6 = {
  regionas: regionai[4].nt(),
  rajonas: "Tauragės rajono savivaldybė",
  miestas: "Tauragė",
  gatve: "Lenkų g. 45",
  namo_nr: 45,
};
let adresasobject7 = {
  regionas: regionai[5].nt(),
  rajonas: "Kauno miesto savivaldybė",
  miestas: "Kaunas",
  gatve: "Malūnų g. 69",
  namo_nr: 69,
};
let adresasobject8 = {
  regionas: regionai[1].nt(),
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Puodų g. 75",
  namo_nr: 75,
};
let adresasobject9 = {
  regionas: regionai[7].nt(),
  rajonas: "Utenos rajono savivaldybė",
  miestas: "Utena",
  gatve: "Tulpių g. 89",
  namo_nr: 89,
};
let adresasobject10 = {
  regionas: regionai[5].nt(),
  rajonas: "Kauno rajono savivaldybė",
  miestas: "Kaunas",
  gatve: "Meilės g. 45",
  namo_nr: 5,
};
let adresas1 = new Adresas(adresasobject1)
let adresas2 = new Adresas(adresasobject2)
let adresas3 = new Adresas(adresasobject3)
let adresas4 = new Adresas(adresasobject4)
let adresas5 = new Adresas(adresasobject5)
let adresas6 = new Adresas(adresasobject6)
let adresas7 = new Adresas(adresasobject7)
let adresas8 = new Adresas(adresasobject8)
let adresas9 = new Adresas(adresasobject9)
let adresas10 = new Adresas(adresasobject10)

let namai = [
  new Namas({
    id: 1,
    kaina: 270000,
    aprasymas: `Parduodamas namas strategiškai patogioje ir vaizdingoje gyvenvietėje Vanagų g. su sklypu.
        Vos už kelių minučių pėsčiomis yra Medžiakalnio geomorfologinis draustinis,
        aplinkui gyvenvietę yra net keli ežerai. Puikus pasirinkimas norintiems gyventi ramioje gamtos apsuptyje,
        kartu nesunkiai pasiekiant miesto centrą. Namas yra įrengtas pagal A++ klasės reikalavimus.`,
    adresas: adresas1,
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114207926/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114207924/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114207940/vilniaus-r-sav-geleziu-k-vanagu-g.jpg",
    ],
    agentas: agentai[0],
    patalpu_plotas: "149.25 kv. m.",
    aukstu_sk: 1,
    kambariu_sk: 4,
    sklypo_plotas: "8.65 arai",
  }),
  new Namas({
    id: 2,
    kaina: 261160,
    aprasymas: `Parduodami DU A++ energinės klasės namai, pro kurių langus atsiveria miško arba upės vaizdai.
    Abu namai turi dideles, net 40 kv. m. stogines, erdvius kiemus.`,
    adresas: adresas2,
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114259076/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114259032/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114259006/kauno-r-sav-karmelavos-ii-k-pilies-g.jpg",
    ],
    agentas: agentai[1],
    patalpu_plotas: "173 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 8,
    sklypo_plotas: "6.83 arai",
  }),
  new Namas({
    id: 3,
    kaina: 2680000,
    aprasymas: `IŠSKIRTINIS PASIŪLYMAS - UNIKALI GALIMYBĖ, IEŠKANTIEMS PRABANGAUS, ERDVAUS, KOKYBIŠKO IR PATOGAUS GYVENIMO PAJŪRYJE -
     PARDUODAMI NAMAI KARKLĖJE.`,
    adresas: adresas3,
    galerija: [
      "https://static.capital.lt/files/39/photos/003/084/670/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/084/685/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/084/544/files/for_export.jpg",
    ],
    agentas: agentai[5],
    patalpu_plotas: "703.35 kv. m.",
    aukstu_sk: 3,
    kambariu_sk: 20,
    sklypo_plotas: "15,01 a",
  }),
  new Namas({
    id: 4,
    kaina: 209000,
    aprasymas: `Namas parduodamas su visais baldais ir buitine technika.
    Šalia namų, tame pačiame kvartalėlyje veikia valstybinis lopšelis - darželis,
     suformuotas mokyklinio autobusiuko maršrutas vyresniems vaikams, jau lankantiems mokyklą.
    Gatvelėje TIK INDIVIDUALŪS NAMAI, JOKIŲ KOTEDŽŲ!`,
    adresas: adresas4,
    galerija: [
      "https://static.capital.lt/files//photos/003/950/486/files/for_export.jpg",
      "https://static.capital.lt/files//photos/003/950/469/files/for_export.jpg",
      "https://static.capital.lt/files//photos/003/950/465/files/for_export.jpg",
    ],
    agentas: agentai[5],
    patalpu_plotas: "80 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "4,36 a",
  }),
  new Namas({
    id: 5,
    kaina: 215000,
    aprasymas: `STRATEGIŠKAI PATOGIOJE VIETOJE PARDUODAMAS ERDVUS 130 KV.M NAMAS, SLYVŲ GATVĖJE, GIRAITĖJE !
  Pilnai įrengtas, funkcionalus ir patogiai suprojektuotas dviaukštis gyvenamasis namas, sublokuotas per garažą,
   kuriam priklauso 6a. sklypas.`,
    adresas: adresas5,
    galerija: [
      "https://static.capital.lt/files/39/photos/003/950/169/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/950/170/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/950/193/files/for_export.jpg",
    ],
    agentas: agentai[3],
    patalpu_plotas: "130 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "6 a",
  }),
  new NamasNuoma({
    id: 6,
    kaina: 4388,
    aprasymas: `For sale - prestigious townhouse B (139,95 sq. m. + a garage for 2 cars) in the heart of Vilnius (Palangos st.).
        A garage's price - 40 000 Eur.
        There is a walk just 10 minutes away from the townhouse to the historic centre of the capital and major business centres.
        In addition, the complex is located in a quiet area near the main city park.`,
    adresas: adresas6,
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_112775729/vilnius-senamiestis-pylimo-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_112775731/vilnius-senamiestis-pylimo-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_112775733/vilnius-senamiestis-pylimo-g.jpg",
    ],
    agentas: agentai[1],
    patalpu_plotas: "189,95 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 10,
    sklypo_plotas: "3 arai",
  }),
  new NamasNuoma({
    id: 7,
    kaina: 1238,
    aprasymas: `Puikui namas, labai gražioje vietoja`,
    adresas: adresas7,
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
  new NamasNuoma({
    id: 8,
    kaina: 4900,
    aprasymas: `Erdvus ir tuo pačiu jaukus prabangiai įrengtas namas laukia naujųjų gyventojų.
     Pirmame namo aukšte erdvi svetainė su židiniu ir išėjimu į terasą, šalia - jaukus valgomasis ir funkcionali virtuvė.`,
    adresas: adresas8,
    galerija: [
      "https://static.capital.lt/files/39/photos/003/484/339/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/484/381/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/484/466/files/for_export.jpg",
    ],
    agentas: agentai[4],
    patalpu_plotas: "323,96 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 5,
    sklypo_plotas: "25 arai",
  }),
  new NamasNuoma({
    id: 9,
    kaina: 900,
    aprasymas: `Nuomojamas 78 kv.m namas esantis išskirtinėje ir ramioje vietoje,
     kur galėsite džiaugtis gamtos ramybe, būdami visai netoli nuo Vilniaus miesto centro.
    `,
    adresas: adresas9,
    galerija: [
      "https://static.capital.lt/files/39/photos/003/919/887/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/919/596/files/for_export.jpg",
      "https://static.capital.lt/files/39/photos/003/919/593/files/for_export.jpg",
    ],
    agentas: agentai[7],
    patalpu_plotas: "78 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "92.52 arai",
  }),
  new NamasNuoma({
    id: 10,
    kaina: 1100,
    aprasymas: `PUIKUS PASIŪLYMAS ŠEIMAI, IEŠKANČIAI NAMŲ RAMIOJE, MAŽAI NUTOLUSIOJE NUO VILNIAUS MIESTO CENTRO VIETOJE.
     SKONINGAI ĮRENGTAS, PATOGAUS IŠPLANAVIMO, ERDVUS KETURIŲ KAMBARIŲ NAMAS IEŠKO NAUJŲ ŠEIMININKŲ!
  `,
    adresas: adresas10,
    galerija: [
      "https://static.capital.lt/files//photos/003/940/448/files/for_export.jpg",
      "https://static.capital.lt/files//photos/003/940/450/files/for_export.jpg",
      "https://static.capital.lt/files//photos/003/940/468/files/for_export.jpg",
    ],
    agentas: agentai[2],
    patalpu_plotas: "154 kv. m.",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "4,78 arai",
  }),
];

export { namai };
