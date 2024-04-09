const leer = require("prompt-sync")();

//Reciba una palabra y verifique si adivino la que está en el programa

let palabraSecreta = "computadora";

console.log("Adivina la palabra secreta");
palabraSecreta = leer();


if (palabraSecreta=="computadora") {
    console.log("Felicitaciones acertaste!");
    
} else if (palabraSecreta!="computadora") {
    console.log("Intenta nuevamente");
    
} 
