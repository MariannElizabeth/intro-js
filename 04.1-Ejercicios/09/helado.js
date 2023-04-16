// TIENDA DE HELADOS
// Helado sencillo cuesta $50
// Helado con topping de Oreo +$10
// Helado con topping de Kit Kat +$15
// Helado con topping de Brownie +$20

var helado = prompt("Bienvenido, desea ordenar un helado sencillo (si/no)")

if (helado == "si") alert("El helado sin topping cuesta $50")
else if (helado == "no"){
    topping = prompt ("Escoja un topping escribiendo su sabor preferido (oreo / kitkat / brownie")
    console.log(topping);
}

if (topping=="oreo")alert ("El topping de Oreo cuesta $10 ")
else if (topping=="kitkat")alert ("El topping de KitKat cuesta $15 ")
else if (topping=="brownie")alert ("El topping de Brownie cuesta $20 ")
