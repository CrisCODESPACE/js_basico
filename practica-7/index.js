// let nombre = "Cristina";

function saludar(nombre) {
  console.log(`Hola ${nombre}, buenos días!`);
}

// saludar("Cristina");
// saludar("Carol");
// saludar("Alejandra");

function hacerHelado(sabor) {
  console.log(`Su helado de ${sabor} se está preparando`);
}

// hacerHelado(prompt("Indica que sabor de helado quieres:"));
// hacerHelado("Amarena");

function suma(num1, num2 = 40) {
  let resultado = num1 + num2;
  console.log(`El resultado de la suma es: ${resultado}`);
}

// suma(1, 2);
// suma(10, 10);

// VARIABLES LOCALES Y GLOBALES

let global = "Soy la var global";

function example() {
  let local = "Soy una var local";
  global = "Julio Iglesias";
  console.log(global);
  console.log(local);
}
// example();

function calculo(a, b) {
  return a * b;
}

let resultado = calculo(2, 2);
// console.log((resultado += 10));

// Crear un programa que te salude con tu nombre.
// let nombre = "María";

function saludar(nombre) {
  //   let nombre = "Herminia";
  //   nombre = String(nombre);
  //   let nombre = "Jesulín";

  console.log(`hola ${nombre}`);
  console.log(typeof nombre);
}

// saludar("Cris");

// Crea una función llamada sumar que reciba dos número como parámetros y devuelva su resultado.

// function sumar(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     console.log("No se puede hacer el cálculo");
//     return null;
//   } else {
//     return num1 + num2;
//   }
// }

// console.log(sumar(1, false));

// Crear un programa que se llame evenOdd que reciba un número y devuelva true si es par y false si es impar.

function evenOdd(numero) {
  if (typeof numero !== "number") {
    console.log("Introduce un número válido");
    return;
  } else {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(evenOdd(1135));

let variable = 1;
// console.log(typeof variable);

// Crea una función que te devuelva el área de un rectangulo

function calcularArea(ancho, alto) {
  return ancho * alto;
}

// console.log(calcularArea(200, 100));

// Crear una función que se llame devolverMayor y reciba dos números y devuelva el mayor de ellos.

function devolverMayor(num1, num2) {
  //   if (num1 > num2) {
  //     return num1;
  //   } else if (num2 > num1) {
  //     return num2;
  //   } else {
  //     return "Son iguales";
  //   }
  return num1 > num2 ? num1 : num2;
}

// console.log(devolverMayor(-1, -3));

// Crear una función que reciba un string y devuelva cuantas letras tiene.

function contarLetras(texto) {
  return texto.length;
}

// console.log(contarLetras("hola"));

// Crear una funcion que reciba una palabra y una letra, esta función debe devolver true si la letra está dentro de la palabra.

function buscarLetra(palabra, letra) {
  palabra = palabra.toLowerCase();
  letra = letra.toLowerCase();
  return palabra.includes(letra);
}

// console.log(buscarLetra("aeiouLlP", "l"));

// Crea una funcion que reciba grados celsius y devuelva su equivalente en grados farenheit.
// FORMULA -> F=(C * 9/5) + 32;

function convertirCelsiusToFarenheit(celsius) {
  let gradosFarenheit = celsius * (9 / 5) + 32;
  return `${gradosFarenheit}ºF`;
}

// console.log(convertirCelsiusToFarenheit(100));
// FIRST ORDER FUNCTIONS

// función anónima asignada a variable
const aFarenheit = function (celsius) {
  let gradosFarenheit = celsius * (9 / 5) + 32;
  return `${gradosFarenheit}ºF`;
};

// console.log(aFarenheit(0));

// función pasa a otra como argumento/parámetro

function execute(fn, valor) {
  return fn(valor);
}

function multiplicar(numero) {
  return numero * 2;
}

// console.log(execute(multiplicar, 5));

function saludar(funcion, valor) {
  return funcion(valor);
}

function procesarSaludo(funcion, nombre) {
  return funcion(nombre);
}

function saludoInformal(edad) {
  return `ey, ${edad}! ¿Qué tal?`;
}

function saludoFormal(nombre) {
  return `Buenos días, ${nombre}.`;
}

// console.log(procesarSaludo(saludoInformal, "Cristina"));

// procesarSaludo -> funcion de primera clase y una función de orden mayor
// saludoFormal -> funcion de primera clase y un callback

function calcular(fn, valor, fn2) {
  let calc = fn(valor);
  return fn2(calc);
}

function suma(numero) {
  return numero + numero;
}

function resta(numero) {
  return numero - numero;
}

// console.log(calcular(suma, 10));
// console.log(calcular(resta, 10));
// console.log(calcular(suma, 10, resta));

function aMayusculas(texto) {
  return texto.toUpperCase();
}

function aMinusculas(texto) {
  return texto.toLowerCase();
}

function transformador(funcion, string) {
  return funcion(string);
}

// console.log(transformador(aMayusculas, "hola soy cristina"));

// function transformador(aMayusculas, "hola soy cristina") {
//   return aMayusculas("hola soy cristina");
// }

function saludar(nombre) {
  console.log(`Hola ${nombre}, buenos días!`);
}

function texto(fn, valor) {
  return fn(valor);
}

function cogerNombre(nombre) {
  return `Hola ${nombre}, buenos días!`;
}

console.log(texto(cogerNombre, "Sintra"));

function hacerHelado(sabor) {
  console.log(`Su helado de ${sabor} se está preparando`);
}

// FUNCION ANÓNIMA

function operar(a, b, fn) {
  return fn(a, b);
}

const sumar = function (a, b) {
  return a + b;
};

console.log(operar(2, 3, sumar));
