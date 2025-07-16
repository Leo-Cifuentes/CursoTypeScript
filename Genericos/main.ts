function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hola");
let output2 = identity<number>(123);
let output3 = identity<boolean>(true);

console.log("Output 1: ", output1);
console.log("Output 2: ", output2);
console.log("Output 3: ", output3);

class Caja<T>{
    private contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }

    public getContenido(): T {
        return this.contenido;
    }
}

let cajaString = new Caja<string>("Texto en la caja");
console.log("Contenido de la caja de string: ", cajaString.getContenido());
let cajaNumero = new Caja<number>(531);
console.log("Contenido de la caja de números: ", cajaNumero.getContenido());