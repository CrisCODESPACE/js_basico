// 1 - Declara una variable x = 10.
//  Suma 4 al valor de x.
// Luego usa -- para restarle 1.
// Guarda el resultado en una variable llamada resultado.

let x = 10;
x = x + 4;
x = x--;

let resultado = x;

// 2 -  Declara una variable a = 6. Multiplícala por 3.
// Calcula el resto de dividir el nuevo valor entre 5. Guarda el resultado en una variable llamada final.

// let a = 6;
// a = a * 3;
// a = a % 5;

// let final = a;

// 3 - Declara una variable valor = 20. Divídela entre 4. Usa ++ dos veces para incrementarla. Guarda el valor final en una variable llamada total.

// let valor = 20;
// valor = valor / 4;
// valor++;
// valor = valor++;

// let total = valor;

// suma -> +
// resta -> -
// multiplicación -> *
// división -> /
// resto -> %
// incremento -> ++
// decremento -> --
// exponenciacion -> **

// ---OPERADORES DE COMPARACION---

// operador de igualdad

let igual = 5 == "5";
// console.log(igual); // true

// operador de igualdad estricta
// console.log(2 === 2);
// console.log("dos" === "dos");
// console.log(1 === "ole ole");

// operador de desigualdad
// console.log("5" != 5);

// // operador de desigualdad estricta
// console.log(5 !== "5");
// console.log(5 !== 5);

// // operador mayor que

// console.log(10 > 5);
// console.log(10 > "10");
// console.log(10 > 40);
// console.log(true > false);

// operador menor que
// console.log(5 < 10);
// console.log(-3 < 100);

// let a = 2;
// let b = 10;

// console.log(a < b);

// // operador mayor o igual

// console.log(2 >= 2);
// console.log(2 >= 7);
// console.log(2 >= b);

// // operador menor o igual

// console.log(10 <= "10");
// console.log(10 <= 350);

//5 == "5"; true
// 5 === "5"; false
// 7 != 8; true
// "Hola" !== "hola"; true
// 10 >= 10; true
// 3 < 2; false

// null == undefined; true
// null === undefined; false

// 0 == false; true
// 0 === false; false
// "0" == 0; true
// "10" > 5;

// console.log("10" > "5");
// console.log("apple" < "Banana");

// a < b ? // true

// true == 1; true

// ---OPERADORES DE ASIGNACION---

// operador de asignación

let variable = "valor";

// operador suma/asignacion

let num1 = 2;
let num2 = 5;

let total = 50;

// total = num1;  total = 2
total += num1; // total = 52
//total = total + num1;  lo mismo abreviado

total += num2; // total = 57

// operador resta/asignacion

total -= num1 + num2;
//console.log(total);

// operador multi/asignacion

total *= num1; // 100

// operador div/asig

total /= num2; // 20

// operador expo/asig

total **= num1; //400

// operador resto/asig
total %= num1; // 0

// ---OPERADORES LOGICOS---

// && (AND) -> y
// || (OR) -> o
// ! (NOT) -> no

// ---&& (AND)

// true && true -> true
// true && false -> false
// false && false -> false

// && solo devolverá true si ambas condiciones/expresiones son true

// let edad = 18;
// console.log(edad >= 18 && edad <= 50);
// console.log(edad > 18 && edad <= 50);

// let usuario = "cristina";
// let sesionIniciada = true;

// console.log(usuario === "cristina" && sesionIniciada === true);
// console.log(usuario === "lady gaga" && sesionIniciada === true);

true && true; // true
false && true; // false
true && false; // false
false && false; // false

//  truthy y falsy

// falsy === false
false;
0 - 0;
("");
null;
undefined;
NaN;

// todos los demás son valores truthy === true
1;
("hola");
true;

// ejemplo con valores reales (no solo booleanos)
1 && 2; // true
0 && 5; // false
"hola" && "mundo"; // true
"" && "algo"; // false
null & "texto"; // false
true && undefined; // false

// ejemplos con condiciones
let age = 25;

//console.log(age > 18 && age < 50); // true

// short-circuit (cortocircuito)

//console.log(false && console.log("hola"));
//true && console.log("adios");

// MAS EJEMPLOS CON &&

1 && 2 && 3; // true, porque todos los valores comparados son TRUTHY

//1 && console.log("hoy es martes") && ""; // la comprobación es FALSE pero el console.log se ha ejecutado ya que el valor falsy se ha comprobado más tarde.

"texto" && "" && "más texto"; // false

// console.log(null == false);

// || (OR)

true || false; // true
false || false; // false

// ejemplos con condiciones
let nombre = "Cris";
// console.log(nombre === "Cris" || nombre === "Juan");

// console.log(false || 0 || "hola" || 42);

let nombreUser = "Cris";

// console.log(nombreUser || "Invitado");

//  ! (NOT)

!true; // false
!false; // true

let edad = 18;
let carnetDeConducir = true;
// console.log(edad >= 18 && !carnetDeConducir);

let persona = {
  nombre: "Maribel",
};

let animales = ["perro", "gato", "jirafa"];

// console.log(typeof edad);
// console.log(typeof carnetDeConducir);
// console.log(typeof "hola");
// console.log(typeof [1, 2, 3]);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof persona);
// console.log(typeof animales);

// OPERADOR TERNARIO

// condicion ? valor_si_TRUE : valor_si_FALSE;

let edad2 = 15;
let obtenerCarnetConducir =
  edad2 >= 18 ? "puede ir a la autoescula" : "tiene que ser más mayor";

let estadoOnline = false;
let estado = estadoOnline ? "En línea" : "Desconectado";

console.log(estado);

let nota = 67;
let result = nota >= 50 ? "Aprobado" : "Suspenso";

console.log(result);
