const titulo = document.getElementById("titulo2");
const btnOcultar = document.getElementById("btnOcultar");
const btnMostrar = document.getElementById("btnMostrar");
const input = document.getElementById("inputColor");
const btnCambiarColor = document.getElementById("btnCambiarColor2");
const btnAlerta = document.getElementById("btnAlerta");
const mensaje = document.getElementById("mensaje2");
const body = document.querySelector("body");

btnOcultar.addEventListener("click", () => {

    titulo.style.display = "none";
})

btnMostrar.addEventListener("click", () => {
    titulo.style.display = "block";
})

/*btnCambiarColor.addEventListener("click", () => {
    const valor = input.value;
    titulo.textContent = valor;
    titulo.style.color = "red";
})

btnAlerta.addEventListener("click", () => {
    const info = mensaje.textContent;
    alert(info);
})

mensaje.addEventListener("mouseenter", () => {
    mensaje.textContent = "Has pasado por aqui";
})

mensaje.addEventListener("mouseleave", () => {
    mensaje.textContent = "Este es un mensaje";
})

btnCambiarColor.addEventListener("click", () => {
    const info = input.value;
    if(info === ""){
        mensaje.textContent = "Escribe un color primero"
    }else{
        mensaje.textContent = info;
    }
}) */

titulo.addEventListener("mousemove", (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
})