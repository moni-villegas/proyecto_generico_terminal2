const leer = require("prompt-sync")();

//Crear un juego para adivinar el número secreto definido dentro del programa 
//donde el usuario tendrá 3 intentos

const numSecreto = 85;
const MAX_INTENTOS = 3;
//i = 3

console.log("Adivina el número secreto!");

for (let i = 1; i <= MAX_INTENTOS; i++) {

  let numIngresado = Number(leer());

  if (numIngresado == numSecreto) {
    console.log("Acertaste!!");
    i = 3
  }
  if (i != MAX_INTENTOS) {
    console.log("Vuelve a intentarlo", MAX_INTENTOS -i);
    console.log("Fin del juego");   //corregir
  }
}











