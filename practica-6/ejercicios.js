// Teniendo en cuenta el siguiente array
const coordenadas = [15, 30];

//Desestructura los valores en variables x e y
//Imprime ambos valores

const [x, y] = coordenadas;
console.log(x);
console.log(y);

// Pasa los valores de una variable a otra
let a = 12;
let b = 56;
let temporal;
temporal = a;
a = b;
b = temporal;
console.log(a);
console.log(b);

//Dado este objeto
const mascota = {
  nombre: "Timmy",
  especie: "perro",
};

// Desestructura para obtener el nombre y la especie.
// Imprime "La mascota es un [especie] que se llama [nombre]";

const { nombre, especie } = mascota;
console.log(`La mascota es un ${especie} y se llama ${nombre}`);

// Dado el objeto

const vehiculo = {
  tipo: "coche",
};

// Desestructura el tipo y color, usando gris como valor por defecto para color.
//Imprime ambos valores

const { tipo, color = "gris" } = vehiculo;
console.log(tipo);
console.log(color);

// Teniendo en cuenta el objeto:
const pelicula = {
  titulo: "Inception",
  director: "Christopher Nolan",
};

// Desestructura titulo y director, pero renómbralos a nombrePelicula y autor.
// Imprime: "[nombrePelicula] fue dirigida por [autor]"

const { titulo: nombrePelicula, director: autor } = pelicula;
console.log(`${nombrePelicula} fue dirigida por ${autor}`);

// Dado este array
const dias = ["lunes", "martes", "miércoles", "jueves"];

// Desestructura solo el primer y tercer día, y llámalos primero y tercero.
// Imprime ambos

const [primero, , tercero] = dias;
console.log(primero, tercero);

// Teniendo en cuenta estas variables
let jugador1 = "Mario";
let jugador2 = "Luigi";

//Intercambia los valores usando desestructuración
//Imprime "Jugador1: Luigi, Jugador2: Mario."

[jugador1, jugador2] = [jugador2, jugador1];
console.log(`Jugador 1:${jugador1}, Jugador 2: ${jugador2}`);

// Teniendo en cuenta este objeto:
const libro = {
  title: "1984",
  author: {
    name: "George Orwell",
    nationality: "Británica",
  },
};

// Desestructura para obtener nombre y nacionalidad.
// Imprime: "El autor [nombre] era de nacionalidad [nacionalidad]"

const {
  author: { name, nationality, genero = "ciencia-ficción" },
} = libro;

console.log(name, nationality, genero);
console.log(libro);

// Dada esta estructura

const receta = {
  nombre: "Tarta de Manzana",
  ingredientes: ["manzana", "azúcar", "harina"],
};

// Desestructurar para obtener el segundo ingrediente en una variable dulce
// imprime "El ingrediente dulce es: [dulce]"

const {
  ingredientes: [, dulce],
} = receta;

// let dulce = receta.ingredientes[1];
console.log(`El ingrediente dulce es: ${dulce}`);

// DESESTRUCTURACION EN BUCLE

const personas = [
  {
    nombre: "Ana",
    edad: 25,
  },
  {
    nombre: "Paco",
    edad: 22,
  },
  {
    nombre: "Manuel",
    edad: 26,
  },
];

for (const { nombre, edad } of personas) {
  console.log(`${nombre} tiene ${edad} años`);
}

// const [nombre2, edad] = personas;
// console.log(nombre2);
// console.log(edad);

const productos = [
  { nombre: "teclado", precio: 35 },
  { nombre: "ratón", precio: 15 },
  { nombre: "monitor", precio: 199 },
];

for (const { nombre, precio } of productos) {
  console.log(nombre, precio);
}

// VALORES Y REFERENCIA
// por valor
let m = "sol";
let j = m;

m = "adios";

console.log(m);
console.log(j);

// por ref - se llaman shallow copy
const casa = {
  precio: "caro",
  metros: 100 * 2,
  ubicacion: "málaga",
};

const apartamento = casa;
casa.precio = "más caro aún";

apartamento.precio = "carete";
apartamento.piso = "primero";

console.log(casa);
console.log(apartamento);

// copia profunda - deep copy

const deepCopy = JSON.parse(JSON.stringify(casa));
deepCopy.precio = "barato";
console.log(deepCopy);

const hotel = {
  numeroHabitaciones: 250,
  completo: false,
  numeroHabitacionesOcupadas: 167,
};

const reservasBooking = hotel;

reservasBooking.numeroHabitacionesOcupadas =
  reservasBooking.numeroHabitacionesOcupadas + 10;

console.log(hotel);

const deepBooking = JSON.parse(JSON.stringify(reservasBooking));

console.log(deepBooking);

deepBooking.precio = 200;

console.log(deepBooking);

// CONVERSIÓN DE TIPOS

// CASTING -> conversión explícita

const num = "42";
console.log(typeof num);

const numConversed = Number(num);
console.log(typeof numConversed);

const texto = 1233;
console.log(typeof texto);

const textoConversed = String(texto);
console.log(typeof textoConversed);

const booleano = 0;
console.log(typeof booleano);

const booleanoConversed = Boolean(booleano);
console.log(booleanoConversed);

console.log(Number("123qwerty"));
console.log(Boolean(""));
console.log(Boolean(" "));

// COERCIÓN
console.log("5" + 1);
console.log("hola" + true);
console.log("5" == 5);

console.log(true + true);
