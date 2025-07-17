"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const clase_1 = require("./clase");
class Empleado extends clase_1.Persona {
    constructor(nombre, edad, esDesarrollador, posicion) {
        super(nombre, edad, esDesarrollador);
        this.posicion = posicion;
    }
    saludar() {
        return `${super.saludar()} Trabajo como ${this.posicion}.`;
    }
    obtenerPosicion() {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.posicion}.`;
    }
}
exports.Empleado = Empleado;
