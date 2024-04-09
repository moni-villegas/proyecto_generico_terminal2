const leer = require("prompt-sync")();
//Sume 3 números ingresados por consola donde por cada número ingresado debe mostrar el valor del
// resultado actual o sea en cada iteración
let Num1 = 0;
let Num2 = 0;
let Num3 = 0;

let ResSuma1 = 0;
let ResSuma2 = 0;

console.log("Ingrese un número");
Num1 = Number (leer());
console.log("Ingrese un segundo número");
Num2 = Number (leer());

ResSuma1 = Num1+Num2;
console.log("Resultado",ResSuma1,);

console.log("Ingrese un tercer número");
Num3 = Number (leer());

ResSuma2 = ResSuma1+Num3;
console.log("Resultado final",ResSuma2);