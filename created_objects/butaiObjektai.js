import {
    ButasNuoma,
    Butas
} from "../klases/butas.js";
import {
    agentai
} from "./agentai.js"
import {
    regionai
} from "./regionai.js"
let butaiObjektai = [
    new Butas({
        id: 1,
        kaina: 120000,
        aprasymas: "Šis ekologiškas namas yra sukuriamas su aplinkosauginiais. Namas turi saulės baterijas, lietaus vandens surinkimo sistemą ir ekologiškus medžiagų naudojimo standartus, o aplinkoje gausu pievų ir miškų.",
        adresas: {
            regionas: regionai[0].nt(),
            rajonas: "Vilniaus rajono savivaldybė",
            miestas: "Vilnius",
            gatve: "Gėlių g. 59",
            namo_nr: 59,
            buto_nr: 1
        },
        galerija: ["https://images.pexels.com/photos/9989558/pexels-photo-9989558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/9901507/pexels-photo-9901507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        agentas: agentai[0],
        patalpu_plotas: 120,
        aukstas: 2,
        kambariu_sk: 5,
    }),
    new Butas({
        id: 2,
        kaina: 242000,
        aprasymas: "Išsiskiria prabangiu dizainu ir išskirtinėmis architektūrinėmis detalėmis. Kiekvienas kambarys turi unikalų stilių, o kiemas yra ramus paslapties kampelis.",
        adresas: {
            regionas: regionai[1].nt(),
            rajonas: "Klaipėdos rajono savivaldybė",
            miestas: "Klaipėda",
            gatve: "Rožių g. 122",
            namo_nr: 122,
            buto_nr: 9
        },
        galerija: ["https://images.pexels.com/photos/12000602/pexels-photo-12000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2903268/pexels-photo-2903268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/19294804/pexels-photo-19294804/free-photo-of-aerial-view-of-seaside-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        agentas: agentai[1],
        patalpu_plotas: 250,
        aukstas: 4,
        kambariu_sk: 9
    }),
    new Butas({
        id: 3,
        kaina: 151000,
        aprasymas: "Terasa su židiniu ir atviru virtuvės-daugiafunkciniu kambariu daro šį namą puikiu šeimyninio gyvenimo erdvė.",
        adresas: {
            regionas: regionai[2].nt(),
            rajonas: "Panevėžio miesto savivaldybė",
            miestas: "Panevėžys",
            gatve: "Žirgų g. 25",
            namo_nr: 25,
        },
        galerija: ["https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        agentas: agentai[2],
        patalpu_plotas: 120,
        aukstas: 4,
        kambariu_sk: 4,
        buto_nr: 7
    }),
    new Butas({
        id: 4,
        kaina: 490000,
        aprasymas: "Šis namas yra naujausias projektas centre. Butai yra šviesūs, su aukštos kokybės baldais ir virtuvėmis. Kiekvienam butui priklauso terasa su puikiu miesto vaizdu.",
        adresas: {
            regionas: regionai[3].nt(),
            rajonas: "Šiaulių miesto savivaldybė",
            miestas: "Šiaulių",
            gatve: "Kopūstų g. 5",
            namo_nr: 5,
        },
        galerija: ["https://images.pexels.com/photos/3712510/pexels-photo-3712510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/10621548/pexels-photo-10621548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1993691/pexels-photo-1993691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        agentas: agentai[3],
        patalpu_plotas: 540,
        aukstas: 6,
        kambariu_sk: 7,
        buto_nr: 2
    }),
    new Butas({
        id: 5,
        kaina: 360000,
        aprasymas: "Aukštos lubos, dirbtinio šviesos srautas ir industrijos detalės suteikia namui šiuolaikišką ir stilingą atmosferą.",
        adresas: {
            regionas: regionai[4].nt(),
            rajonas: "Tauragės rajono savivaldybė",
            miestas: "Tauragė",
            gatve: "Lenkų g. 45",
            namo_nr: 45,
        },
        galerija: ["https://images.pexels.com/photos/10621549/pexels-photo-10621549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/10621051/pexels-photo-10621051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        agentas: agentai[4],
        patalpu_plotas: 540,
        aukstas: 2,
        kambariu_sk: 5,
        buto_nr: 1
    }),
];

export {
    butaiObjektai
};