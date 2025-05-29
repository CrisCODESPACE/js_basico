// creación de array

let array1 = [];
let array2 = new Array();

// inyección de elementos

array1 = ["azul", "amarillo", "verde"];
array1.push("rojo", "rosa", "burdeos");
array1.pop();
array1.unshift("celeste", "negro", "marrón");
array1.shift();

// método sort()

array2 = [10, 9, 5, -34, 167, 0];

// (a, b) => a - b (orden asc)
// (a, b) => b- a (orden des)

// console.log(array2.sort((a, b) => b - a));

//1 - Dado un array de números, crea uno nuevo donde cada número esté elevado al cuadrado.
let numeros = [1, 100, 2, 3, 14, 4, 5, 65];

let numeros2 = numeros.map((elemento) => elemento ** 2);
console.log(numeros2);

//2 - Tienes una lista de nombres. Devuelve un array con estos nombres en minúscula.
let nombres = [
  "Cristina",
  "Tracy",
  "Sintra",
  "Nataliia",
  "Alba",
  "Alejandra",
  "Belén",
  "Mambo",
];

let nombreMinus = nombres.map((e) => e.toLowerCase());
console.log(nombreMinus);

//3- Dado un array de números. filtra los que sean mayores que 10

console.log(numeros.filter((e) => e > 10));

//4- Suma todos los valores del array numeros2
let sumaTotal = numeros2.reduce((acc, valor) => acc + valor, 0);

console.log(sumaTotal);

//5- Dado un array de strings, crea una sola frase unida por espacios.
let arrPhrase = ["hola", "buenas", "tardes"];
console.log(arrPhrase.reduce((acc, valor) => acc + " " + valor, ""));

//6 - Comprueba si en un array de edades hay al menos un mayor de edad.
let edades = [2, 14, 76, 4, 9, 12, 1];

console.log(edades.some((e) => e >= 18));

//7 - Teniendo en cuenta el array de nombres, divide este array en 2 diferentes.
let nombres2 = nombres.slice(0, 4);
nombres.splice(0, 4);
console.log(nombres2);
console.log(nombres);
