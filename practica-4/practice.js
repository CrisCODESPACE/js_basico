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

console.log(array2.sort((a, b) => b - a));
