const btnCambiarTexto = document.getElementById("btnCambiarTexto");

const titulo = document.getElementById("titulo");

btnCambiarTexto.addEventListener("click", () => {
    titulo.textContent = "Bienvenido";
})

const btnCambiarColor = document.getElementById("btnCambiarColor");

btnCambiarColor.addEventListener("click", () => {
    titulo.style.color = "red";
})

const btnSaludar = document.getElementById("btnSaludar");
const input = document.getElementById("inputNombre");
const parrafo = document.getElementById("mensaje");

btnSaludar.addEventListener("click", () => {
    const nombre = input.value
    parrafo.textContent = "Hola " + nombre;
})

btnCambiarTexto.addEventListener("dblclick", () => {
    titulo.textContent = "Hola";
})

input.addEventListener("input", () => {
    if(input.value === ""){
        btnSaludar.disabled = true;
    }else{
        btnSaludar.disabled = false;
    }
});

parrafo.addEventListener("mouseenter", () => {
    parrafo.style.color = "red";
})

parrafo.addEventListener("mouseleave", () => {
    parrafo.style.color = "black";
})

titulo.addEventListener("click", () => {
    titulo.style.display = "none";
})

const mostrarTitulo = document.getElementById("mostarTitulo");

mostrarTitulo.addEventListener("click", () => {
    titulo.style.display = "inline";
})