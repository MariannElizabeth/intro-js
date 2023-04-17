// Clima con una entrada de prompt
// Tipos de clima Soleado, Lluvioso, Nublado, Chubascos
// Clima default: Nevado

var clima = prompt("Escribe un tipo de clima");

switch (clima) {
    case 'soleado':
        clima = "Soleado"
    break;
    case 'lluvioso':
        clima = "Lluvioso"
    break;
    case 'nublado':
        clima = "Nublado"
    break;
    case 'chubascos':
        clima = "Chubascos"
    break;
    default:
        clima = "Nevado"
}

document.write(`El clima de hoy es : ${clima}`)