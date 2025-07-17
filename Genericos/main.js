"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("Hola");
let output2 = identity(123);
let output3 = identity(true);
console.log("Output 1: ", output1);
console.log("Output 2: ", output2);
console.log("Output 3: ", output3);
class Caja {
    constructor(contenido) {
        this.contenido = contenido;
    }
    getContenido() {
        return this.contenido;
    }
}
let cajaString = new Caja("Texto en la caja");
console.log("Contenido de la caja de string: ", cajaString.getContenido());
let cajaNumero = new Caja(531);
console.log("Contenido de la caja de números: ", cajaNumero.getContenido());
