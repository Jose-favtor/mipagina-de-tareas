
function resolverEjercicio1() {
    let dolares = prompt("Ingresa la cantidad en dólares:");
    if (dolares === null || dolares.trim() === "") return;

    let tasa = prompt("Ingresa la tasa de cambio a moneda local:");
    if (tasa === null || tasa.trim() === "") return;

    let conversion = parseFloat(dolares) * parseFloat(tasa);
    alert("El equivalente en moneda local es: " + conversion.toFixed(2));
}


function resolverEjercicio2() {
    let largo = prompt("Ingresa el largo del terreno:");
    if (largo === null || largo.trim() === "") return;

    let ancho = prompt("Ingresa el ancho del terreno:");
    if (ancho === null || ancho.trim() === "") return;

    let area = parseFloat(largo) * parseFloat(ancho);
    let perimetro = 2 * (parseFloat(largo) + parseFloat(ancho));

    alert("El área del terreno es: " + area + "\nEl perímetro del terreno es: " + perimetro);
}


function intercambiarCelular(idImagen) {
    let imagen = document.getElementById(idImagen);
    if (imagen) {
        // Intercambia la imagen actual por la de la portada o viceversa
        if (imagen.src.includes("samsung")) {
            imagen.src = "images/450_1000 (1).webp";
        } else {
            imagen.src = "images/samsung-galaxy-a20s-600x700.jpg";
        }
    }
}


function resolverEjercicio4() {
    let tituloPrincipal = document.querySelector("h1.display-5");
    if (tituloPrincipal) {
        tituloPrincipal.textContent = "¡Shop item actualizado con Éxito!";
        alert("¡Texto de la plantilla modificado correctamente!");
    }
}
