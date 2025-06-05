// Escribe una función que reciba un array de números y devuelva el resultado de multiplicarlos todos

function multiplicarlos(array) {
  return array.reduce((acc, currentValue) => acc * currentValue, 1);
}
// console.log(multiplicarlos([1, 2, 3, 4, 5, 6]));

// Escribe una función que diga si una strin contiene una letra

function buscadorLetra(palabra, letra) {
  return palabra.includes(letra);
}
// console.log(buscadorLetra("gato", "e"));

// Escribe una funcion que cuente cúantos números pares hay en un array

function contarPares(array) {
  array = array.filter((n) => n % 2 === 0);
  return array.length;
}

// console.log(contarPares([1, 2, 3, 4, 5, 6]));

// JUEGO DE DADOS
// let randomNumber = Math.random() * 6;

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

let computerRoll = randomNumber();
let userRoll = randomNumber();

console.log("TIRADA DEL PC:", computerRoll);
console.log("TIRADA DEL JUGADOR", userRoll);

function checkWinner() {
  if (computerRoll > userRoll) {
    return "Gana PC";
  } else if (computerRoll === userRoll) {
    return "Empate";
  } else {
    return "Ganas tú";
  }
}

// while (computerRoll) {}

console.log(checkWinner());
