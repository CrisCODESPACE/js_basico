// Crea un objeto llamado libro que tenga las siguientes propiedades: título, autor, añoPublicacion y género.

let libro = {
  titulo: "La celestina",
  autor: "Fernando de Rojas",
  annoPublicacion: 1499,
  genero: "Narrativa",
  ISBN: 9788423972821,
};

// Usa ambas notaciones para mostrar por consola el título y autor del libro.
let claveExterna = "autor";
let ISBNNumber = "ISBN";
console.log(libro.titulo);
console.log(libro["ISBN"]);
console.log(libro[claveExterna]);

// Modifica y añade una propiedad del objeto libro
libro.genero = "Drama";
libro.paginas = 300;
console.log(libro);

// Eliminar la propiedad género del objeto libro
delete libro.genero;
console.log(libro);

// Obten todas las claves de un objeto.
console.log(Object.keys(libro));

// Obten todos los valores las props de un objeto
console.log(Object.values(libro));

// Más métodos para recorrer un objeto
console.log(Object.entries(libro));

for (let propiedad in libro) {
  console.log(`${propiedad}:${libro[propiedad]}`);
}

// Anidación de objetos

const persona = {
  nombre: {
    apellidos: "García Hernández",
    nombrePila: "Ana",
  },
  direccion: {
    ciudad: "Madrid",
    calle: "Calle Falsa 123",
  },
};

console.log(persona);
console.log(persona.nombre.apellidos);
persona.direccion.cp = 28038;
delete persona.direccion.cp;
console.log(persona);

// Desestructuración
// Desestructuración arrays

const numeros = [1, 2, 3];
// const a = numeros[0]; //1
// const b = numeros[2]; //3

const [a, , c] = [1, 2, "perro"];
console.log(a);
// console.log(b);
console.log(c);

// Dado el array ["rojo", "verde", "azul"] usa desestructuración para:
// - Crear tres variables primero, segundo y tercero.
// - Imprime los tres valores
let colores = ["rojo", "verde", "azul", "amarillo", "rosa"];
let [primero, segundo, tercero, ...pepe] = colores;
console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(...pepe);
console.log(colores);

let animales = ["perro", "gato", "pato", "vaca", "pollo", "cerdo", "oca"];
let [A, B, C, D, E, F, G = null, H = null] = animales;
console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);
console.log(F);
console.log(G);
console.log(H);

// Teniendo en cuenta esta variable const datos = [100], desestructura el primer elemento y asigna valores por defecto para el segundo y tercero: 100, 0 y "unknown".
const datos = [100];
let [x, y = 0, z = "unknown"] = datos;
console.log(x);
console.log(y);
console.log(z);

// Desestructuración objetos

const perro = {
  nombre: "Mambo",
  edad: 11,
  chucheFavorita: "Pan",
  raza: "Bull Terrier",
  Capa: "corto",
};

const { nombre: varNombrePerro, chucheFavorita: varChuchePerro } = perro;
console.log(varNombrePerro);
console.log(varChuchePerro);

// Con el objeto:

const usuario = {
  id: 123,
  nombre: "Paco",
  email: "paco@paco.paco",
};

// Extrae nombre y el email
// Extraer el id y renombrarlo a usuarioId

const { nombre, email, id: usuarioId, edad = 30 } = usuario;
console.log(nombre, email, usuarioId, edad);
// const { edad = 30 } = usuario;
// console.log(edad);

console.log(usuario);
