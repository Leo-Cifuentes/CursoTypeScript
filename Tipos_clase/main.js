"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado1 = new empleado_1.Empleado("Leonardo", 37, true, "Desarrollador Frontend");
console.log(empleado1.saludar());
console.log(empleado1.obtenerPosicion());
console.log("Nombre: ", empleado1.nombre);
