"use strict";
let persona1 = {
    nombre: "Leonardo",
    edad: 37,
    esDesarrollador: true
};
//console.log('Persona: ', persona1);
let Personas = [
    { nombre: "Leonardo", edad: 37, esDesarrollador: true },
    { nombre: "Nini", edad: 33, esDesarrollador: false },
    { nombre: "Daniel", edad: 30, esDesarrollador: true }
];
console.log('Personas: ', Personas);
let sumar = (num1, num2) => {
    return num1 + num2;
};
console.log('El resultado de la suma: ', sumar(10, 11));
