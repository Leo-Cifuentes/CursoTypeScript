var variableAny;
//variableAny = 'Hola!';
variableAny = 531;
//variableAny = true;
console.log('valor variable any: ' + variableAny);
var variableDesconocida;
variableDesconocida = 'Hola!';
//variableDesconocida = 531;
//variableDesconocida = true;
if (typeof variableDesconocida === 'string') {
    console.log('valor variable unknown: ' + variableDesconocida);
}
/*function throwError(message: string): never {
    throw new Error(message);
}

throwError('Este es un error de ejemplo');*/
function logMessage(message) {
    console.log('Mensaje log: ', message);
}
logMessage('Este es un mensaje de log');
