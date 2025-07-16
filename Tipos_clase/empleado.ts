import { Persona } from './clase';

export class Empleado extends Persona {
    public posicion: string;

    constructor(nombre: string, edad: number, esDesarrollador: boolean, posicion: string) {
        super(nombre, edad, esDesarrollador);
        this.posicion = posicion;
    }
    
    public saludar(): string {
        return `${super.saludar()} Trabajo como ${this.posicion}.`;
    }

    public obtenerPosicion(): string {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.posicion}.`;
    }
}