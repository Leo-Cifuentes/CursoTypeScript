var nombres = ['Nita', 'Leo', 'Kaiser'];
console.log('Nombres: ', nombres);
var edades = [33, 37, 7];
console.log('Edades: ', edades);
var mixto = ['Nita', 33, 'Leo', 37, 'Kaiser', 7, true];
console.log('Datos mixtos: ', mixto);
var personas = [
    { nombre: 'Nita', edad: 33, esDesarrollador: false },
    { nombre: 'Leo', edad: 37, esDesarrollador: true },
    { nombre: 'Kaiser', edad: 7, esDesarrollador: false }
];
personas.push({ nombre: 'Daniel', edad: 30, esDesarrollador: true });
console.log('Personas: ', personas);
//Tupla
var tupla = [];
tupla.push(['Nita', 33, false]);
tupla.push(['Leo', 37, true]);
tupla.push(['Kaiser', 7, false]);
tupla.push(['Diana', 30, false]);
tupla.push(['Daniel', 30, true]);
tupla.push(['Nala', 4, false]);
tupla.forEach(function (tupla) {
    //console.log('Persona: ', tupla);
    var nombre = tupla[0];
    var edad = tupla[1];
    var esDesarrollador = tupla[2];
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
var dia = Dias.Lunes;
console.log('Día: ', Dias[dia]); // 0
