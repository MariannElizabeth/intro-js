// Usuario debe ingresar dos números y mostrar cual de los dos número es menor
// No considerar el caso de que los dos números son iguales

var numero1= prompt("Ingresa el primer número");

var numero2= prompt("Ingresa el segundo número");

if (numero1 > numero2) document.write("El número ", numero2, " es el menor")
else document.write("El número ", numero1, " es el menor")