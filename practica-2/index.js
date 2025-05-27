// CONDICIONAL if/else

// sintaxis if/else
// if(condicion) {
//     codigo que se ejecutará si esta condicion es true
// } else {
//     codigo que se ejecutará si la condicion del if es falsa
// }

// let edad = 20;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// if (nota >= 9) {
//   console.log("Sobresaliente");
// } else if (nota >= 7) {
//   console.log("Notable");
// } else if (nota >= 5) {
//   console.log("Aprobado");
// } else {
//   console.log("Suspenso");
// }

let nota = 7;

if (nota < 5) {
  console.log("Suspenso");
} else if (nota >= 5) {
  console.log("Aprobado");
} else if (nota >= 7) {
  console.log("Notable");
} else {
  console.log("Sobresaliente");
}
