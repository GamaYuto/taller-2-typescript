"use strict";
/**
 * Ejercicio 2: INTERFACES
 * Modela y valida la forma de un objeto usando una interfaz.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// b) Declara la constante BATMAN tipada con la interfaz SuperHeroe y asigna sus valores.
const BATMAN = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu'],
};
// c) Validación:
console.log('Ej2:', BATMAN.nombre, Array.isArray(BATMAN.artesMarciales), BATMAN.artesMarciales.length);
