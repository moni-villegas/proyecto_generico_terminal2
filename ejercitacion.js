const leer = require("prompt-sync")();

numSecreto = 85;

i = 3;

console.log("Adivina el número secreto! Ingresa un número:");

 let numSecreto = leer();

const MAX_INTENTOS = 3;


    if (numSecreto == 85) {
        console.log("Acertaste!!");
    }

    

    else if (numSecreto != 0) {
        console.log("Segui intentando");

    }
    for (let i = 1; i < MAX_INTENTOS; i++) {
        console.log("Intente nuevamente");
}







