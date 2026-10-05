/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function resolverEjercicio1() {
    let dolares = parseFloat(prompt("Ejercicio 01:\nIngrese la cantidad en dólares ($):"));
    let tasa = parseFloat(prompt("Ingrese la tasa de cambio a moneda local:"));

    if (!isNaN(dolares) && !isNaN(tasa) && dolares > 0 && tasa > 0) {
        let resultado = dolares * tasa;
        alert("El equivalente en moneda local es: " + resultado.toFixed(2));
    } else {
        alert("Por favor, ingrese valores numéricos válidos.");
    }
}

function resolverEjercicio2() {
    let largo = parseFloat(prompt("Ejercicio 02:\nIngrese el largo del terreno:"));
    let ancho = parseFloat(prompt("Ingrese el ancho del terreno:"));

    if (!isNaN(largo) && !isNaN(ancho) && largo > 0 && ancho > 0) {
        let area = largo * ancho;
        let perimetro = 2 * (largo + ancho);
        alert("Resultados del terreno:\n• Área: " + area.toFixed(2) + "\n• Perímetro: " + perimetro.toFixed(2));
    } else {
        alert("Por favor, ingrese medidas válidas mayores a cero.");
    }
}