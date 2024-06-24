window.onload = function() {
    // Ocultar el elemento con el id "onload"
    let onload = document.getElementById("onload");
    onload.style.display = "none";

    // Quitar la clase "hidden" del body
    document.body.classList.remove("hidden");
};

function mostrarOcultar() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("menu__li");
}

