const leer = require("prompt-sync")();

console.log("Buenas, ingrese su nombre");
let infonombre = leer();

console.log("Ahora ingrese su apellido");
let infoapellido = leer();

console.log("Bienvenida",infonombre,infoapellido,"!");