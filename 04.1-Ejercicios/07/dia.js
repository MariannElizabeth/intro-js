// Ingresar un dia de la semana  e imprimir un mensaje que diga que dia se ingreso con frase

// Mensajes exclusivo para lunes 
// Mensajes exclusivo para viernes,
// Mensaje excclusivo para sábado o domingo
// Cualquier otro día otro mensaje

var dia = prompt("Ingresa un día de la semana")


if (dia == "lunes") {
    alert ("Hoy comienza la semana ¡Feliz lunes!")

} else if (dia == "viernes") {
    alert ("Por fin es viernes y el cuerpo lo sabe")
} else if (dia == "sabado" || dia == "domingo") {
    alert ("Feliz fin de semana")
} else {
    alert ("Aguanta, ya falta menos para el fin de semana")
}

