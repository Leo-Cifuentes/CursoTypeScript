function identity(arg) {
    return arg;
}
var output1 = identity("Hola");
var output2 = identity(123);
var output3 = identity(true);
console.log("Output 1: ", output1);
console.log("Output 2: ", output2);
console.log("Output 3: ", output3);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.getContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaString = new Caja("Texto en la caja");
console.log("Contenido de la caja de string: ", cajaString.getContenido());
var cajaNumero = new Caja(531);
console.log("Contenido de la caja de números: ", cajaNumero.getContenido());
