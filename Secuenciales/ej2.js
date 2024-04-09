const leer = require("prompt-sync")();

//Pueda recibir un mensaje y mostrarlo por consola

console.log("¿Cuál es tu color favorito?");

let colorIngresado = leer();

console.log("Tu color favorito es:",colorIngresado);
