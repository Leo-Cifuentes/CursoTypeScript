//Parametros opcionales
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}
console.log(saludar('Nita'));
console.log(saludar('Nita', 'Buenos días'));

//Parametros multiples
function sumarNumeros(...numeros: number[]): number {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}
let numeros: number[] = [10, 20, 30, 40];

console.log(sumarNumeros(1, 2, 3, 4, 5, 6));
console.log('Suma por variable: ', sumarNumeros(...numeros));

//Parametros por defecto
function despedirConDefecto(nombre: string, despedir: string = 'Chaw'): string {
    return `${despedir}, ${nombre}!`;
}
console.log(despedirConDefecto('Nita'));
console.log(despedirConDefecto('Nita', 'Hasta luego'));