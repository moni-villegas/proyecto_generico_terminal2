const leer = require("prompt-sync")();

//Recibir 2 números y muestre la suma por consola

console.log("Ingrese un número");
let num1 = Number(leer());

console.log("Ingrese otro número");
let num2 = Number(leer());

// Sumo las variables
let resultado = num1 + num2;

// Imprimo el resultado
console.log("El resultado de la suma es:", resultado);
