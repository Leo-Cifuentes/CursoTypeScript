"use strict";
let nombres = ['Nita', 'Leo', 'Kaiser'];
console.log('Nombres: ', nombres);
let edades = [33, 37, 7];
console.log('Edades: ', edades);
let mixto = ['Nita', 33, 'Leo', 37, 'Kaiser', 7, true];
console.log('Datos mixtos: ', mixto);
let personas = [
    { nombre: 'Nita', edad: 33, esDesarrollador: false },
    { nombre: 'Leo', edad: 37, esDesarrollador: true },
    { nombre: 'Kaiser', edad: 7, esDesarrollador: false }
];
personas.push({ nombre: 'Daniel', edad: 30, esDesarrollador: true });
console.log('Personas: ', personas);
//Tupla
let tupla = [];
tupla.push(['Nita', 33, false]);
tupla.push(['Leo', 37, true]);
tupla.push(['Kaiser', 7, false]);
tupla.push(['Diana', 30, false]);
tupla.push(['Daniel', 30, true]);
tupla.push(['Nala', 4, false]);
tupla.forEach((tupla) => {
    //console.log('Persona: ', tupla);
    let nombre = tupla[0];
    let edad = tupla[1];
    let esDesarrollador = tupla[2];
    console.log('Nombre: ', nombre);
    console.log('Edad: ', edad);
    console.log('Es desarrollador: ', esDesarrollador);
});
//Enumeradores
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
let dia = Dias.Lunes;
console.log('Día: ', Dias[dia]); // 0
