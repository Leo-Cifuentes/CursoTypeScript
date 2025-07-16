//Propiedad Opcional
interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}
let direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Ciudad Imaginaria"
};
console.log('Dirección: ', direccion);

//Read Only
interface Usuario {
    readonly nombre: string;
    edad: number;
    esDesarrollador: boolean;
}
let usuario: Usuario = {
    nombre: "Leonardo",
    edad: 37,
    esDesarrollador: true
};
console.log('Usuario: ', usuario);

//Interfaz extendida
interface Empleado extends Usuario {
    readonly cargo: string;
}
let empleado: Empleado = {
    nombre: "Leonardo",
    edad: 37,
    esDesarrollador: true,
    cargo: "Desarrollador Junior"
};
console.log('Empleado: ', empleado);