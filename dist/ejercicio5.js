"use strict";
/**
 * Ejercicio 5: CLASES
 * Crea una clase 'Rectangulo' con propiedades y un método para calcular el área.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// La clase 'Rectangulo' tiene dos propiedades públicas, 'base' y 'altura'.
class Rectangulo {
    base;
    altura;
    // El constructor usa la sintaxis abreviada para declarar y asignar las propiedades.
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    // El método 'area' retorna el área del rectángulo.
    area() {
        return this.base * this.altura;
    }
}
// Crea una instancia de la clase 'Rectangulo' y llama al método 'area'.
const r = new Rectangulo(10, 5);
console.log('Ej5:', r.area()); // 50
