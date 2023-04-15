// Solicitar al usuario un número y determinar si es divisible entre dos
// Mostrar mensaje  X número es divisible entre 2
// X número NO es divisible entre 2

var numero = prompt("Ingresa un número");
// El resultado me arroja si hay un residuo usando el operador %, no arroja el resultado de la división, SOLO EL RESIDUO
var residuo = (numero % 2);

console.log(residuo);

if (residuo ==0){
    document.write("El número ", numero, " es divisible entre dos")
} else document.write("El número ", numero, " NO es divisible entre dos")
