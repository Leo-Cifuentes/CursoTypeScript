import { suma, resta, multiplicacion, division, Pi } from "./calculator";
console.log("Operaciones matemáticas con TypeScript");

console.log("Sumar 53 + 31 = ", suma(53, 31));
console.log("Restar 86 - 43 = ", resta(86, 43));
console.log("Multiplicar 1024 * 16 = ", multiplicacion(1024, 16));
console.log("Dividir 1960 / 2 = ", division(1960, 2));
//console.log("Dividir 100 / 0 = ", division(100, 0));
console.log("Valor de Pi = ", Pi);
console.log("Multiplicar Pi * 360 = ", multiplicacion(Pi, 360));