let nombreLongitud: string = "Leonardo Cifuentes";
console.log(nombreLongitud.length);

function getLongitud<T extends { length: number }>(obj: T): number {
    let longitud: number = obj.length;
    let tipo: string = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y tiene una longitud de: ${longitud}`);
    return obj.length;
}

//console.log(getLongitud("Hola Mundo"));
//console.log(getLongitud([1, 2, 3, 4, 5]));
const dato1: string = "Hola mundo";
const dato2: number[] = [1, 2, 3, 4, 5];
getLongitud(dato1);
getLongitud(dato2);