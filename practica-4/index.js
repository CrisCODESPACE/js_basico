// Imagina que estás desarrollando un videojuego y quieres mostrar mensajes personalizados según el tipo de logro obtenido y el nivel del jugador.,
// Haz lo siguiente:
// Declara dos variables:
// let logro = "explorador";  // Puede ser: "guerrero", "mago", "explorador"
// let nivel = 12;

// Usa un switch para manejar los distintos tipos de logro (logro).
// Dentro de cada case, usa if/else para mostrar un mensaje según el nivel del jugador:
// Si el nivel es menor a 10: "Has desbloqueado [logro] principiante."
// Si el nivel está entre 10 y 20: "Has desbloqueado [logro] intermedio."
// Si el nivel es mayor a 20: "Has desbloqueado [logro] experto."
// Si el tipo de logro no es reconocido, muestra "Logro desconocido".
// Ejemplo de entrada:
// let logro = "mago";
// let nivel = 22;

// Salida esperada:
// Has desbloqueado mago experto.

let logro = "guerrero";
let nivel = 0;
let mensaje = "";

// switch (logro) {
//   case "guerrero":
//   case "mago":
//   case "explorador":
//     if (nivel < 10) {
//       console.log("Principiante");
//     } else if (nivel < 20) {
//       console.log("Intermedio");
//     } else if (nivel > 20) {
//       console.log("Experto");
//     } else {
//       console.log("Error");
//     }
//     break;
//   default:
//     console.log("Logro desconocido");
//     break;
// }

let frutas = ["pera", "manzana", "fresa"];

// Notacion literal ([])
let arr = [];

// Constructor
let arr2 = new Array();
// console.log(arr2);

// Acceso y modificación de arrays
// let numbers = [200, 14, 9, 43, 75, 1786];
// console.log(numbers[3]);
// console.log(numbers[5]);
// console.log(numbers);

// numbers[3] = 28;
// console.log(numbers);
// console.log(numbers.length);

// numbers.push(3);
// numbers.push(1234567890, 6, "hola");

// numbers.pop();
// numbers.pop();
// numbers.pop();

// numbers.unshift("hola");
// numbers.unshift(true);
// numbers.unshift(7, 1234, false);

// numbers.shift();
// numbers.shift();
// numbers.shift();

// console.log(numbers);

// OTROS METODOS DE ARRAY

// let array = ["euro", "dólar", "yen", "won", "rupia", "yuanes", "lei"];
// console.log(array);

// console.log(array.includes("euro"));
// console.log(array.includes("baths"));

// console.log(array.indexOf("euro"));
// console.log(array.indexOf("corona"));

// console.log((array = array.join(", ")));
// console.log(array);

// let iceCreamFlavours =
//   "chocolate, vainilla, caramelo, stracciatella, kinder, pistacho, amarena";
// console.log((iceCreamFlavours = iceCreamFlavours.split(", ")));

// console.log(iceCreamFlavours.reverse());

// console.log(iceCreamFlavours.sort());

// METODO SORT()

let arrNumeros = [1, 2, 3, 4, 5, 6];

// console.log(arrNumeros.sort());
// console.log(arrNumeros.sort((a, b) => b - a));

// FORMULA SORT (ORDEN ASCENDENTE)
(a, b) => a - b;

// FORMULA SORT (ORDEN DESCENDENTE)
(a, b) => b - a;

// (0, -1) => 0 - -1 -> 1 (res. negativo)

// METODOS AVANZADOS ARRAYS

//slice()

let nuevoArr = arrNumeros.slice(1, 3);

//splice() - MUTA ARRAY ORIGINAL
// splice para borrar elementos de un array
arrNumeros.splice(1, 2);

// splice para agregar elementos
// arrNumeros.splice(señalar un lugar del array1, elementos a borrar segun su posicion señalada, elemento nuevo, elemento nuevo);
arrNumeros.splice(0, 0, -1, 0);

// concat() - NO MUTA ARRAY ORIGINAL
let arrNuevo = ["azul", "amarillo"];
arrNumeros.concat(arrNuevo);

// some() - NO MUTA ORIGINAL
// console.log(arrNumeros);
arrNumeros.some((e) => e > 100);

//every() - NO MUTA
arrNumeros.every((manuelCarrasco) => manuelCarrasco < 10);

// reduce()
// reduce((acc, currentValue) => acc + currentValue, 0);

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.reduce((acc, currentValue) => acc + currentValue, 0);

// map() - NO MUTA PERO CREA COPIA DE ARRAY ORIGINAL
let double = numeros.map((elementos) => elementos * 2);
console.log(double);

let nombres = ["Carmen", "Carol", "Yesenia"];
let nombresMayus = nombres.map((e) => e.toUpperCase());
// console.log(nombresMayus);

let wordLength = nombres.map((e) => e.length);

// filter() - NO MUTA
numeros.filter((n) => n > 2);
console.log(nombres, nombresMayus);
nombresMayus.filter((name) => name.includes("C"));

//forEach
let suma = 0;
numeros.forEach((e) => {
  suma += e;
  console.log(suma);
});
