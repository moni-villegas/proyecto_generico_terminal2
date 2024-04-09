const leer = require("prompt-sync")();

console.log("Adivina el número secreto! Ingresa un número:");

numSecreto = leer();

if (numSecreto != 0) 
    console.log("Segui intentando");

if (numSecreto == 0) {
    console.log("Acertaste!!")
    
}
    
    

    

    
