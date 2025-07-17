"use strict";
let nombreLongitud = "Leonardo Cifuentes";
console.log(nombreLongitud.length);
function getLongitud(obj) {
    let longitud = obj.length;
    let tipo = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y tiene una longitud de: ${longitud}`);
    return obj.length;
}
//console.log(getLongitud("Hola Mundo"));
//console.log(getLongitud([1, 2, 3, 4, 5]));
const dato1 = "Hola mundo";
const dato2 = [1, 2, 3, 4, 5];
getLongitud(dato1);
getLongitud(dato2);
