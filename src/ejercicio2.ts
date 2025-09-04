/**
 * Ejercicio 2: INTERFACES
 * Modela y valida la forma de un objeto usando una interfaz.
 */

// a) Crea la interfaz SuperHeroe con las propiedades 'nombre' y 'artesMarciales'.
interface SuperHeroe {
  nombre: string;
  artesMarciales: string[];
}

// b) Declara la constante BATMAN tipada con la interfaz SuperHeroe y asigna sus valores.
const BATMAN: SuperHeroe = {
  nombre: 'Bruno Díaz',
  artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu'],
};

// c) Validación:
console.log('Ej2:', BATMAN.nombre, Array.isArray(BATMAN.artesMarciales), BATMAN.artesMarciales.length);