import { Agentas } from "./agentas.js";
import { foto_agentas } from "./img_agentai.js";

/**
 * array with agentai objects
 */
const agentai = [];

agentai.push( new Agentas("Jonas", "Jomaitis", foto_agentas[0],
                            `Jonas turi 10 metu darbo patirties nekilnojamo turto rinkoje. Jis yra 32 metu ir pasizymi itin gerais bendravimo igudziais.`,
                            "Vilnius")
            );
agentai.push( new Agentas("Daiva", "Varniene", foto_agentas[0],
                            `Daiva puikiai gaudosi nekilnojamo turto rinkoje. Klientu atsiliepimai apie ja yra kuo puikiausi.`,
                            "Panevezys")
            );
agentai.push( new Agentas("Vilius", "Kesminas", foto_agentas[0],
                            `Vilius baige VU verslo vadybos studijas. Vilius pardavimu virtuozas ir ja nebaisus jokie NT issukiai.`,
                            "Siauliai")
            );
agentai.push( new Agentas("Bartas", "Simpsonas", foto_agentas[0],
                            `Bartas daug metu dirbo uzsionio NT rinkose ir yra sukaupes labai daug patirties. Jis moka keleta uzsienio kalbu.`,
                            "Klaipeda")
            );
agentai.push( new Agentas("Birute", "Vaidulute", foto_agentas[0],
                            `Birute yra tradiciju puoseletoja. Ji puikiai moka bendrauti su vyresnio amziaus klientais.`,
                            "Moletai")
            );
agentai.push( new Agentas("Linas", "Laimontas", foto_agentas[0],
                            `Linas specializuojasi pramominiu objektu rinkoje. Jis yra su kaupe ilgamete patirti  butent tokiu NT objektu srityje`,
                            "Mazeikiai")
            );
agentai.push( new Agentas("Rokas", "Nejokaitis", foto_agentas[0],
                            `Rokas yra jaunas agentas, bet tai jam netrugdo buti pirmose pozicijose pardavimu lenktynese. Rokas yra Verzlus ir ambicingas agentas. `,
                            "Kaunas")
            );
agentai.push( new Agentas("Jolanta", "Jakyte", foto_agentas[0],
                            `Jolantos zinios apie NT rinka yra tikrai placios. Jolanta klientams visada sugeba pasiulyti kazka isskirtinio`,
                            "Druskininkai")
            );


export {agentai}