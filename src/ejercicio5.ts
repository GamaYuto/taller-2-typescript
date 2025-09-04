/**
 * Ejercicio 5: CLASES
 * Crea una clase 'Rectangulo' con propiedades y un método para calcular el área.
 */

// La clase 'Rectangulo' tiene dos propiedades públicas, 'base' y 'altura'.
class Rectangulo {
  // El constructor usa la sintaxis abreviada para declarar y asignar las propiedades.
  constructor(public base: number, public altura: number) {}

  // El método 'area' retorna el área del rectángulo.
  area(): number {
    return this.base * this.altura;
  }
}

// Crea una instancia de la clase 'Rectangulo' y llama al método 'area'.
const r = new Rectangulo(10, 5);
console.log('Ej5:', r.area()); // 50