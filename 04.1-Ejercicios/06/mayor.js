// Ingresar tres números y mostrar cual de los tres es mayor
// Considera el caso de que 2 números sean iguales.

var numero1= prompt("Ingresa el primer número");

var numero2= prompt("Ingresa el segundo número");

var numero3= prompt("Ingresa el tercer número");

if (numero1 >= numero2 && numero1 >= numero3) document.write("El número ", numero1, " es el mayor")
else if (numero2 >=numero1 && numero2 >= numero3) document.write("El número ", numero2, " es el mayor")
else if (numero3 >=numero1 && numero3 >= numero2) document.write("El número ", numero3, " es el mayor")
