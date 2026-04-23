const boton = document.getElementById("btn-info");
const info = document.getElementById("sobre-mi");

boton.addEventListener("click", function() {

    info.classList.toggle("visible");

    if (info.classList.contains("visible")) {
        boton.textContent = "Ocultar información";
    } else {
        boton.textContent = "Ver información";
    }

});