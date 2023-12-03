// Cia visi NT objektai bus sujungiami ir exportuojami
// Visi cia importuoti objektai turi buti masyve
import { komerciniaiObjektai } from "./komerciniaiObjektai.js";
const sujungtiObjektai = [];
sujungtiObjektai.push(komerciniaiObjektai);
// Visi sukurti objektu masyvai bus istraukti is tu masyvu: [[obj1],[obj2]] => [obj,obj2]
const objektai = sujungtiObjektai.flat(1);
export {objektai};