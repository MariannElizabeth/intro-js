// CASO DE USO ELSE IF
//Pertenezco a alguno de estos grupos
//1. Mayores de 18 y vive en un municipio fronterizo
//2. Embarazadas mayores de 18 y 9 semanas de gestación
//3. Personas que cumplen 30 años este año

var edad = prompt('¿Cuál es tu edad?');
var mfronterizo = prompt('¿Actualmente vives en un municipio fronterizo? (si / no)');
var embarazada = prompt('¿Estas embarazada (si / no)?');
var gestacion = prompt('¿Tienes más de 9 semanas de gestación? (si / no)');
var e30 = prompt('¿Cumples 30 años o más este año? (si / no)');

if(edad>=18 && mfronterizo=="si") {
    console.log("Puedes vacunarte")
} else if (embarazada == "si" && gestacion == "si") {
    console.log("Puedes vacunarte")
} else if (edad>=30 && e30== "si") {
    console.log("Puedes vacunarte")
} 
else {
    console.log("No puedes vacunarte")
}
