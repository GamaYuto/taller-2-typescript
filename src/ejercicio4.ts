/**
 * Ejercicio 4: PARÁMETROS obligatorios / opcionales / por defecto
 * Crea una función con parámetros de diferentes tipos de obligatoriedad.
 */

// Define una función con un parámetro obligatorio (nombre), uno opcional (poder?)
// y uno con valor por defecto (arma = 'arco').
function describeHeroe(nombre: string, poder?: string, arma: string = 'arco'): string {
  // Usa un condicional para construir el mensaje de retorno.
  if (poder) {
    return `${nombre} usa ${arma} y su poder es ${poder}.`;
  } else {
    return `${nombre} usa ${arma}.`;
  }
}

// Validaciones:
console.log('Ej4a:', describeHeroe('Hawkeye')); // "Hawkeye usa arco."
console.log('Ej4b:', describeHeroe('Hawkeye', 'puntería'));   // "Hawkeye usa arco y su poder es puntería."