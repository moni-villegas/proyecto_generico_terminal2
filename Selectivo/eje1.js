const leer = require("prompt-sync")();

//Reciba un numero y nos indique si es positivo o negativo

let numEvaluar = 0;

console.log("Ingresa un numero a evaluar");
numEvaluar = leer();

if (numEvaluar>0) {
    console.log("Es positiva");
}else if(numEvaluar ==0){
    console.log("Es un número neutro");
    
}else if(numEvaluar<0){
    console.log("Es negativo");
}