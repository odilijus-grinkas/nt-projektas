import { Agentas } from "../klases/agentas.js";
import { regionai } from "./regionai.js";
const foto_agentas = ["../../img/agentai/agentas_profile.jpg"];
/**
 * array with agentai objects
 */
const agentai = [];

agentai.push( new Agentas(1,"Jonas", "Jomaitis", foto_agentas[0],
                            `Jonas turi 10 metu darbo patirties nekilnojamo turto rinkoje. Jis yra 32 metu ir pasizymi itin gerais bendravimo igudziais.`,
                            regionai[0].nt())
            );
agentai.push( new Agentas(2, "Daiva", "Varniene", foto_agentas[0],
                            `Daiva puikiai gaudosi nekilnojamo turto rinkoje. Klientu atsiliepimai apie ja yra kuo puikiausi.`,
                            regionai[1].nt())
            );
agentai.push( new Agentas(3,"Vilius", "Kesminas", foto_agentas[0],
                            `Vilius baige VU verslo vadybos studijas. Vilius pardavimu virtuozas ir ja nebaisus jokie NT issukiai.`,
                            regionai[2].nt())
            );
agentai.push( new Agentas(4,"Bartas", "Simpsonas", foto_agentas[0],
                            `Bartas daug metu dirbo uzsionio NT rinkose ir yra sukaupes labai daug patirties. Jis moka keleta uzsienio kalbu.`,
                            regionai[3].nt())
            );
agentai.push( new Agentas(5,"Birute", "Vaidulute", foto_agentas[0],
                            `Birute yra tradiciju puoseletoja. Ji puikiai moka bendrauti su vyresnio amziaus klientais.`,
                            regionai[4].nt())
            );
agentai.push( new Agentas(6,"Linas", "Laimontas", foto_agentas[0],
                            `Linas specializuojasi pramominiu objektu rinkoje. Jis yra su kaupe ilgamete patirti  butent tokiu NT objektu srityje`,
                            regionai[5].nt())
            );
agentai.push( new Agentas(7,"Rokas", "Nejokaitis", foto_agentas[0],
                            `Rokas yra jaunas agentas, bet tai jam netrugdo buti pirmose pozicijose pardavimu lenktynese. Rokas yra Verzlus ir ambicingas agentas. `,
                            regionai[6].nt())
            );
agentai.push( new Agentas(8,"Jolanta", "Jakyte", foto_agentas[0],
                            `Jolantos zinios apie NT rinka yra tikrai placios. Jolanta klientams visada sugeba pasiulyti kazka isskirtinio`,
                            regionai[7].nt())
            );
export {agentai}
