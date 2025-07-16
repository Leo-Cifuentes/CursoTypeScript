import { Empleado } from "./empleado";

let empleado1 = new Empleado("Leonardo", 37, true, "Desarrollador Frontend");

console.log(empleado1.saludar());
console.log(empleado1.obtenerPosicion());
console.log("Nombre: ",empleado1.nombre);
