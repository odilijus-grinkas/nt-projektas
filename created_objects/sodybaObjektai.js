import { Sodyba, SodybaNuoma } from "../klases/sodyba.js";
import { agentai } from "./agentai.js";
import { Adresas } from "../klases/adresas.js";
import { regionai } from "./regionai.js";



let sodybaObjektai = [
  new Sodyba({
    id: 1,
    kaina: 1000,
    aprasymas: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[0].nt(),
      rajonas: "Klaipėdos rajonas",
      miestas: "Klaipėda",
      gatve: "Klaipėdos g. 10",
      namo_nr: 10
    },
    galerija: [
      "https://picsum.photos/id/20/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    patalpu_plotas: 100,
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: 5
  }),
//   new Sodyba({
//     id: 2,
//     kaina: 2000,
//     aprasymas:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
//     adresas: {
//       regionas: regionai[1].nt(),
//       rajonas: "Vilniaus rajonas",
//       miestas: "Vilnius",
//       gatve: "Vilniaus g. 20",
//     },
//     galerija: [
//       "https://picsum.photos/id/23/500",
//       "https://picsum.photos/id/21/500",
//       "https://picsum.photos/id/22/500",
//     ],
//     agentas: agentai[1],
//     plotas: 150,
//   }),
//   new Sodyba({
//     id: 3,
//     kaina: 3000,
//     aprasymas:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
//     adresas: {
//       regionas: regionai[2].nt(),
//       rajonas: "Šiaulių rajonas",
//       miestas: "Šiauliai",
//       gatve: "Šiaulių g. 10",
//     },
//     galerija: [
//       "https://picsum.photos/id/23/500",
//       "https://picsum.photos/id/21/500",
//       "https://picsum.photos/id/22/500",
//     ],
//     agentas: agentai[2],
//     plotas: 200,
//   }),
//   new Sodyba({
//     id: 4,
//     kaina: 4000,
//     aprasymas:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
//     adresas: {
//       regionas: regionai[3].nt(),
//       rajonas: "Kauno rajonas",
//       miestas: "Kaunas",
//       gatve: "Kauno g. 4",
//     },
//     galerija: [
//       "https://picsum.photos/id/23/500",
//       "https://picsum.photos/id/21/500",
//       "https://picsum.photos/id/22/500",
//     ],
//     agentas: agentai[3],
//     plotas: 200,
//   }),
//   new Sodyba({
//     id: 5,
//     kaina: 5000,
//     aprasymas:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
//     adresas: {
//       regionas: regionai[4].nt(),
//       rajonas: "Telšių rajonas",
//       miestas: "Telšiai",
//       gatve: "Telšių g. 10",
//     },
//     galerija: [
//       "https://picsum.photos/id/23/500",
//       "https://picsum.photos/id/21/500",
//       "https://picsum.photos/id/22/500",
//     ],
//     agentas: agentai[4],
//   }),
];

export {sodybaObjektai};