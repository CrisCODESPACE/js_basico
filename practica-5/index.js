// ARRAY BIDIMENSIONAL
let matriz = [
  [1, 2, 3, 1, 2, 3, 4],
  [4, 5, 6, 1],
  [7, 8, 9, 1],
  [10, 11, 12, 1],
];
// console.log(matriz[0][0])
// console.log(matriz[1][1])
// console.log(matriz[2][2])

//matriz[fila][columna];

let arrayNormal = [1, 2, 3]; //la longitud de este array es de 3

// for (let i = 0; i < arrayNormal.length; i++) {
//   console.log(arrayNormal[i]);
// }
// console.log(matriz);

for (let i = 0; i < matriz.length; i++) {
  //   console.log(matriz[i]);

  for (let j = 0; j < matriz[i].length; j++) {
    // console.log(matriz[i][j]);
  }
}
// primera ejecución for primario i -> [1, 2, 3, 1, 2, 3, 4] === matriz[0]

// primera ejecucion for secundario j -> 1 === matriz[0][0]

// segunda ejecucion for secundario j -> 2 === matriz[0][1]
// tercera ejc. for secundario j -> 3 === matriz[0][2]
// cuarta
// quinta
//sexta
//septima
//---- AQUI HA TERMINADO LA PRIMERA ITERACION DEL FOR PRIMARIO (i)---
// segunda ejecucion de for PRIMARIO i -> [4, 5, 6, 1] === matriz[1]

//----------------- OBJECTS-----------------------
const malaga = {
  clima: "calido",
  habitantes: 591.637,
  "tipo acento": "seseo",
};

// let malagaClima = "calido";
// let malagaHabitantes = 591.637;

// console.log(malaga.clima);
// console.log(malaga.habitantes);

// //let perro = {};
// let perro = new Object();
// console.log(perro);

// console.log(malaga["tipo acento"]);

malaga.gastronomia = "mediterranea";

delete malaga["tipo acento"];
delete malaga.gastronomia;
// console.log(malaga);

const paella = {
  nombre: "Paella de marisco",
  ingrediente1: "arroz",
  ingrediente2: "gambas",
  ingrediente3: "calamares",
  ingrediente4: "mejillones",
  ingrediente5: "pimiento rojo",
  raciones: 4,
  tiempoCoccionMinutos: 45,
  vegetariana: false,
  cocinada: false,
  servida: false,
};
// console.log(Object.keys(paella));
// console.log(Object.values(paella));
// console.log(Object.entries(paella));

//OBJECT KEYS
Object.keys(paella).forEach((key) => {
  //   console.log(`La clave "${key}" tiene un valor -> ${paella[key]}`);
});

let keys = Object.keys(paella);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  let clave = keys[i];
  let valor = paella[clave];

  //   console.log(`${clave}:${valor}`);
}

//OBJECT VALUES
Object.values(paella).forEach((valor) => {
  //   console.log(valor);
});

// ITERADOR for...in

for (let claves in paella) {
  //   console.log(claves);
}

const personas = [
  {
    nombre: "Ana",
    edad: 28,
    profesion: "Ingeniera",
    ciudad: "Madrid",
  },
  {
    nombre: "Luis",
    edad: 35,
    profesion: "Diseñador",
    ciudad: "Barcelona",
  },
  {
    nombre: "María",
    edad: 42,
    profesion: "Médica",
    ciudad: "Valencia",
  },
  {
    nombre: "Carlos",
    edad: 42,
    profesion: "Estudiante",
    ciudad: "Sevilla",
  },
];

const agrupadas = Object.groupBy(personas, (elemento) => elemento.edad > 30);

console.log(agrupadas);

const coche = {
  marca: "seat",
  modelo: "leon",
  puertas: 3,
  combustible: "diesel",
};
// Object.freeze(coche);
coche.chasis = "blanco";
coche.neumaticos = "nuevos";
coche.estado = "ocasion";

console.log(coche);

const array = [1, 2];
array.push(3);
console.log(array);

array = "ole ole";
