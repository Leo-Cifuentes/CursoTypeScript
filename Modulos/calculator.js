"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pi = void 0;
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division = division;
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}
exports.Pi = 3.141592653589793;
