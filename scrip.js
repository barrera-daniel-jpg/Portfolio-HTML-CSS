let tipografiaActiva = false;

function cambiarTipografia() {
    const texto = document.getElementById("texto-sobre-mi");
    const boton = document.getElementById("btn-fuente");

    if (tipografiaActiva) {
        texto.style.fontFamily = "";
        texto.style.fontSize = "";
        texto.style.lineHeight = "";
        boton.textContent = "Cambiar tipografía";
    } else {
        texto.style.fontFamily = "Georgia, serif";
        texto.style.fontSize = "1.2rem";
        texto.style.lineHeight = "2.2";
        boton.textContent = "Tipografía original";
    }

    tipografiaActiva = !tipografiaActiva;
}