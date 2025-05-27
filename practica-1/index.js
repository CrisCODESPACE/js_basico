/*console.log("Hola, soy Cristina");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola"); 
COMENTARIOS MULTILINEA
*/

//  console.log("hola")
// comentario single line

// ----VARIABLES----

let saludo; /*declaración de variable*/

saludo = "Hola"; /*Inicialización de variable*/
saludo = "Adios"; /*las variables creadas con let su valor podrá cambiar*/

let edad = 31;

const nombre =
  "Cristina"; /*las variables declaradas con const no pueden ir sin su inicialización*/

let nombre1 = "Fulgencio";
let nombre2 = "Carmen";
let nombre3 = "Leticia";

let age = 31;
age = 30;
//console.log(age); /*este console se ejecuta en esta línea*/

age = 25;
// console.log(age);

const PI = 3.1416;
// console.log(PI);
// PI = "ole ole los caracoleh";
// console.log(PI);

let nombreCompleto = "Cristina Martín";
let colorOjos = "loqueasea";
let x = "Cristina Martín";

// VARIABLES REPASO

// let o const

let nombreMascota;
nombreMascota = "Mambo";
nombreMascota = "Mambito";

const nombreMascota2 = "Timmy";
// nombreMascota2 = "Timoteo";

// console.log(nombreMascota);
// console.log(nombreMascota2);

// SINTAXIS
// let/const nombreDeLaVariable = Valor;

// ---------TIPOS DE DATOS-------------

// TIPOS DE DATOS PRIMITIVOS

//1 - STRING = texto

let pokemon = "Lucario";
let cita = "esta es la piel de un monstruo bella";

//2 - NUMBER = dato numérico

let día = 26;

//3 - BOOLEANOS - true o false

let diaSoleado = true;
let mayorDeEdad = true;
let lluvia = false;

//4 - UNDEFINED - variable que aún no se ha inicializado

let fecha;
// console.log(fecha);

//5 - NULL - vacío intencional
let userCountry = null;

// TIPOS DE DATOS COMPLEJOS

//1- Objetos

let usuario = {
  name: "Ricardo",
  age: 28,
  userName: "Ricardito",
};

let perro = {
  nombre: "Mambo",
  edad: 11,
  raza: "Bull Terrier",
};

let coche = {
  marca: "BWM",
  modelo: "sky",
  anno: 1929,
  combustible: "Gasolina",
};

//2 - Arrays
let numeros = [1, 2, 3, 4, 5];

let fruta = ["manzana", "pera", "kiwi", "sandía"];

//3 - Funciones

function saludar() {
  console.log("Hola");
  console.log("buenas tardes");
}

// saludar();
// saludar();
// saludar();
// saludar();

// ------OPERADORES-------

// Operadores aritméticos

let num1 = 10;
let num2 = 5;

// suma
let suma = 10 + 5; //15
suma = num1 + num2; //15
suma = num1 + num1; //20
// console.log(suma);

// resta
let resta = 10 - 5; // 5
resta = num1 - num2; // 5
resta = num1 - num1; // 0
// console.log(resta);

// multiplicación
let multi = 10 * 5;
multi = num1 * num2;
multi = num2 * num2;
// console.log(multi);

// división
let div = 10 / 5;
div = num1 / num2;
div = num1 / num1;
// console.log(div);

// resto
let resto = 20 % 3;
// console.log(resto);

// exponenciación
let expo = num1 ** num2;
// console.log(expo);

// Operadores INCREMENTO y DECREMENTO

let a = 3;
// console.log(++a); /* a = a + 1; */
// console.log(a++); /* a = a + 1; */
// console.log(++a); /* a = a + 1; */
// console.log(++a);
// console.log(++a);

let b = 5;
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);

// COMBINACION DE OPERADORES ARITMETICOS

let resultado = (2 + 3) * 4;
console.log(resultado);

// encontrar el area de un rectángulo
let ancho = 100;
let alto = 50;

let area = ancho * alto;
console.log(area);

let otroResultado = 10 - 4 + 2;
console.log(otroResultado);

let siguienteResultado = (10 % 3) + 2 * 3;
console.log(siguienteResultado);

let resultadoFinal = (5 + 3) * 2 - (4 ** 2 % 3);
console.log(resultadoFinal);
