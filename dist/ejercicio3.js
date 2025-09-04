"use strict";
/**
 * Ejercicio 3: FUNCIONES (ARROW)
 * Convierte una función tradicional a una función de flecha y aplica tipado estricto.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// La función original es `function resultadoDoble(a, b) { return (a + b) * 2; }`
// La transformamos a una función de flecha con tipado de parámetros y retorno.
const resultadoDoble = (a, b) => {
    return (a + b) * 2;
};
// Validación:
console.log('Ej3:', resultadoDoble(3, 7)); // esperado: 20
