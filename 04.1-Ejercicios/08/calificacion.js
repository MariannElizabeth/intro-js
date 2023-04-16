// Solicitar una calificación entre 1 y 10
// Validar que el número este en ese rango, si no lo esta mandar un mensaje de error
// Si es menor a 6 imprimir reprobado
// Si es entre 6 y 8 imprimir regular
// Si es 9 imprimir bien
// Si es 10 imprimmir excelente

var cal = prompt("Ingrese una calificación para el alumn@");

// Validación
if (cal >10 || cal <0) alert ("Ingrese un número entre 0 y 10")
else  {
    var val=cal;
    console.log(val);
}

if (val<6) {
    alert("Reprobado")
} else if (val>=6 && val<=8 ) {
    alert ("Regular")
} else if (val ==9) {
    alert ("Bien")
} else if (val == 10) {
    alert ("Excelente")
} 
