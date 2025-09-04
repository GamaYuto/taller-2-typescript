"use strict";
/**
 * Ejercicio 6 (Opcional PLUS): Tipado estricto y genéricos
 * Practica el uso de tipos alias y funciones genéricas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// c) Implementa una función genérica que retorne el valor que recibe.
function subirNivel(valor) {
    return valor;
}
// d) Demuestra su uso con diferentes tipos.
const mejoradoNumero = subirNivel(10);
console.log('Ej6a (number):', mejoradoNumero);
const mejoradoSuperheroe = subirNivel({
    nombre: 'Spiderman',
    artesMarciales: ['Judo'],
    poder: 'fuerza'
});
console.log('Ej6b (SuperHeroe):', mejoradoSuperheroe);
