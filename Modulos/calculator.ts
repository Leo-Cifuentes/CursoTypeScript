export function suma(num1: number, num2: number): number {
    return num1 + num2;
}
export function resta(num1: number, num2: number): number {
    return num1 - num2;
}
export function multiplicacion(num1: number, num2: number): number {
    return num1 * num2;
}
export function division(num1: number, num2: number): number {
    if (num2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}
export const Pi: number = 3.141592653589793;