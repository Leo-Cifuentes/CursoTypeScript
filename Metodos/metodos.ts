function imprimeMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimeMensaje('Hola, este es un mensaje de prueba.');

function suma(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado: number = suma(13, 8);

console.log('Resultado de la suma: ', resultado);