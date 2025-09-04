/**
 * Ejercicio 6 (Opcional PLUS): Tipado estricto y genéricos
 * Practica el uso de tipos alias y funciones genéricas.
 */

// a) Define un tipo alias 'Poder' con valores literales.
type Poder = 'fuerza' | 'velocidad' | 'sigilo';

// b) Agrega la propiedad opcional 'poder?: Poder' a la interfaz del Ejercicio 2.
interface SuperHeroeActualizado {
  nombre: string;
  artesMarciales: string[];
  poder?: Poder;
}

// c) Implementa una función genérica que retorne el valor que recibe.
function subirNivel<T>(valor: T): T {
  return valor;
}

// d) Demuestra su uso con diferentes tipos.
const mejoradoNumero = subirNivel<number>(10);
console.log('Ej6a (number):', mejoradoNumero);

const mejoradoSuperheroe = subirNivel<SuperHeroeActualizado>({
  nombre: 'Spiderman',
  artesMarciales: ['Judo'],
  poder: 'fuerza'
});
console.log('Ej6b (SuperHeroe):', mejoradoSuperheroe);