// parseInt es una función en JavaScript que analiza una cadena y devuelve un entero.
// La función parseFloat() analiza un argumento y devuelve un número de coma flotante.

//prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.

// let num1 = parseInt(prompt("Introduce un número"));
// let num2 = parseInt(prompt("Introduce otro número"));

// console.log(num1 + num2);

// let temperatura = parseInt(prompt("Introduce la temperatura a comprobar"));
// console.log(temperatura);

// if (temperatura >= 30) {
//   console.log("Hace mucho calor, ponte ropa ligera y bebe agua.");
// } else if (temperatura <= 29 && temperatura >= 20) {
//   console.log("Hace buen tiempo, ponte ropa cómoda.");
// } else if (temperatura <= 19 && temperatura >= 10) {
//   console.log("Hace fresco, ponte una chaqueta.");
// } else if (temperatura < 10) {
//   console.log("Hace frío, abrígate bien.");
// } else {
//   console.log("Ha ocurrido un error");
// }

// let nombre = prompt("Introduce tu nombre");

// console.log(`Hola ${nombre}, buenos días`);

// ---SWITCH---

// switch (variable a comprobar) {
//     case "primera posibilidad":
//         //codigo que se ejecuta si la posibilidad se cumple;
//         break;
//     case "segunda posibilidad":
//         //codigo que se ejecuta si la posibilidad se cumple;
//         break;
//     default:
//         // se ejecutará codigo si ningua de las posibilidades se cumple
//         break;
// }

// let semaforo = "amarillo";

// switch (semaforo) {
//   case "rojo":
//     console.log("Espera");
//     break;
//   case "amarillo":
//     console.log("Prepárate");
//     break;
//   case "verde":
//     console.log("Cruza");
//     break;
//   default:
//     console.log("El semáforo no funciona correctamente");
//     break;
// }

// ---BUCLES---

// bucle for

// for(inicializacion, condicion, actualizacion){
//     // codigo a ejecutar en cada iteración
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let suma = 0;

// for (let i = 0; i <= 5; i++) {
//   console.log(`El valor de i en esta iteración es: ${i}`);
//   console.log(`Valor de suma anterior: ${suma}`);

//   console.log(`Valor de suma actualizado es: ${(suma += i)}`);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`3 X ${i} = ${3 * i}`);
// }

// bucle while

// let i = 0;
// let multi = 3;

// while (i <= 10) {
//   console.log(`${multi} x ${i} = ${multi * i}`);
//   i++;
// }
// let i = 0;

// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
//   console.log(i);
// }

// while (i <= 10) {
//   i % 2 === 0 ? console.log(i) : "";
//   i++;
// }

// bucle do/while

let i = 0;

// while(i > 0)

do {
  console.log(`hola ${i}`);
  i++;
} while (i <= 3);
