//Determinar si un número es par o no
// Mostrar la respuesta en un alert

var numero = prompt("Ingresa un número");
// El resultado me arroja si hay un residuo usando el operador %, no arroja el resultado de la división, SOLO EL RESIDUO
var residuo = (numero % 2);

console.log(residuo);

if (residuo ==0){
    alert("El número es par")
} else alert("El número NO es par")
