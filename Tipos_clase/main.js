"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = require("./empleado");
let empleado1 = new empleado_1.Empleado("Leonardo", 37, true, "Desarrollador Frontend");
console.log(empleado1.saludar());
console.log(empleado1.obtenerPosicion());
console.log("Nombre: ", empleado1.nombre);
