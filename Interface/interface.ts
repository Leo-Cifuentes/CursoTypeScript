interface Persona{
    nombre: string;
    edad: number;
    esDesarrollador: boolean;   
}

let persona1: Persona = {
    nombre: "Leonardo",
    edad: 37,
    esDesarrollador: true
};
//console.log('Persona: ', persona1);

let personas: Persona[] = [
    {nombre: "Leonardo",edad: 37,esDesarrollador: true},
    {nombre: "Nini",edad: 33,esDesarrollador: false},
    {nombre: "Daniel",edad: 30,esDesarrollador: true}
];
console.log('Personas: ', personas);

interface Sumar {
    (num1: number, num2: number): number;
}

let sumar: Sumar = (num1: number, num2: number): number => {
    return num1 + num2;
}
console.log('El resultado de la suma: ', sumar(10, 11));