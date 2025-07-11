let nombres: string[] = ['Nita', 'Leo', 'Kaiser'];
console.log('Nombres: ', nombres);

let edades: number[] = [33, 37, 7];
console.log('Edades: ', edades);

let mixto: any[] = ['Nita', 33, 'Leo', 37, 'Kaiser', 7, true];
console.log('Datos mixtos: ', mixto);

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: 'Nita', edad: 33, esDesarrollador: false },
    { nombre: 'Leo', edad: 37, esDesarrollador: true },
    { nombre: 'Kaiser', edad: 7, esDesarrollador: false }
];

personas.push({ nombre: 'Daniel', edad: 30, esDesarrollador: true });
console.log('Personas: ', personas);

//Tupla
let tupla: [string, number, boolean][] = [];

tupla.push(['Nita', 33, false]);
tupla.push(['Leo', 37, true]);
tupla.push(['Kaiser', 7, false]);
tupla.push(['Diana', 30, false]);
tupla.push(['Daniel', 30, true]);
tupla.push(['Nala', 4, false]);

tupla.forEach((tupla) => {
    //console.log('Persona: ', tupla);

    let nombre: string = tupla[0];
    let edad: number = tupla[1];
    let esDesarrollador: boolean = tupla[2];

    console.log('Nombre: ', nombre);
    console.log('Edad: ', edad);
    console.log('Es desarrollador: ', esDesarrollador);
});

//Enumeradores
enum Dias {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo 
}

let dia: Dias = Dias.Lunes;
console.log('Día: ', Dias[dia]); // 0
