var nombreLongitud = "Leonardo Cifuentes";
console.log(nombreLongitud.length);
function getLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ".concat(tipo, " y tiene una longitud de: ").concat(longitud));
    return obj.length;
}
//console.log(getLongitud("Hola Mundo"));
//console.log(getLongitud([1, 2, 3, 4, 5]));
var dato1 = "Hola mundo";
var dato2 = [1, 2, 3, 4, 5];
getLongitud(dato1);
getLongitud(dato2);
