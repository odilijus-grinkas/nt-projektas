import { komerciniaiObjektai } from "./created_objects/komerciniaiObjektai.js";

const sujungtiObjektai = [];
sujungtiObjektai.push(komerciniaiObjektai);
// Visi sukurti objektu masyvai bus istraukti is tu masyvu: [[obj1],[obj2]] => [obj,obj2]
const objektai = sujungtiObjektai.flat(1);
export {objektai};