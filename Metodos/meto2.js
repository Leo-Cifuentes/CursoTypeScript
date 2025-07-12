//Parametros opcionales
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre, "!");
    }
}
console.log(saludar('Nita'));
console.log(saludar('Nita', 'Buenos días'));
//Parametros multiples
function sumarNumeros() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, numeroActual) { return acumulador + numeroActual; }, 0);
}
var numeros = [10, 20, 30, 40];
console.log(sumarNumeros(1, 2, 3, 4, 5, 6));
console.log('Suma por variable: ', sumarNumeros.apply(void 0, numeros));
//Parametros por defecto
function despedirConDefecto(nombre, despedir) {
    if (despedir === void 0) { despedir = 'Chaw'; }
    return "".concat(despedir, ", ").concat(nombre, "!");
}
console.log(despedirConDefecto('Nita'));
console.log(despedirConDefecto('Nita', 'Hasta luego'));
