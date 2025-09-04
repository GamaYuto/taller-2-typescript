/**
 * Ejercicio 1: LET y CONST
 * Practica el uso de 'let' y 'const' para la declaración de variables inmutables
 * y mutables en TypeScript.
 */

// a) Declara dos constantes: NOMBRE (string) y EDAD (number).
// Usamos 'const' porque los valores de estas variables no cambiarán.
const NOMBRE: string = 'Superman';
const EDAD: number = 35;

// b) Crea un objeto PERSONAJE usando esas constantes y tipándolo.
// La firma del objeto es { nombre: string; edad: number }.
const PERSONAJE: { nombre: string; edad: number } = { nombre: NOMBRE, edad: EDAD };

// c) Validación:
console.log('Ej1:', PERSONAJE.nombre, PERSONAJE.edad);