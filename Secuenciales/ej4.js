const leer = require("prompt-sync")();

//Recibir un nombre y color favorito para saludarlo en consola

console.log("Ingresa tu nombre");
let nomIngresado = leer();

console.log("Hola",nomIngresado,"!");

console.log("Ingresa tu color favorito");
let colorIngresado = leer();
console.log(nomIngresado,"tu color favorito es el",colorIngresado,"!");