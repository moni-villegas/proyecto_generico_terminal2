const leer = require("prompt-sync")();

//Reciba un número y muestre el doble por consola

console.log("Ingresa un número a duplicar");

numIngresado = leer();

numDuplicado = numIngresado*2;

console.log("Resultado:",numDuplicado);
