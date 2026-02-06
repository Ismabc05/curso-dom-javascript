// Ejercicio 1
const titulo = document.getElementById("titulo");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");

btnCambiarTexto.addEventListener("click", () => {
    titulo.textContent = "Texto Cambiado";
})


// Ejercicio 2

const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
    titulo.textContent = "Práctica Final";
}) 


// Ejercicio 3 y 4

const input = document.getElementById("inputTexto");
const btnMostrarTexto = document.getElementById("btnMostrarTexto");
const parrafo = document.getElementById("parrafo");

btnMostrarTexto.addEventListener("click", () => {
    const value = input.value;
    if(value === ""){
        parrafo.textContent = "Debes escribir algo primero";
    }else {
        parrafo.textContent = value;
    }
})


// ejercicio 5 y 6

const btnCambiarColor = document.getElementById("btnCambiarColor");
const inputColor = document.getElementById("inputColor");
const parrafo2 = document.getElementById("parrafo2");

btnCambiarColor.addEventListener("click", () => {
        const value = inputColor.value;
        if(value === ""){
            parrafo2.textContent = "Escribe un color primero"
        }else{
            parrafo2.textContent = "";
            titulo.style.color = value;
        }
})


// Ejercicio 7

const btnOcultar = document.getElementById("btnOcultar");

btnOcultar.addEventListener("click", () => {
    titulo.style.display = "none";
})


// Ejercicio 8
const btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", () => {
    titulo.style.display = "block";
})


// Ejercicio  9 y 10

const btnContador = document.getElementById("btnContador");
const span = document.getElementById("contador");

btnContador.addEventListener("click", () => {
    const contenidoSpan = span.textContent;
    let numero = Number(contenidoSpan);
    numero ++

    if(numero > 5){
        span.style.color = "red";
    }
    span.textContent = numero;
    
})

// Ejercicio 11

titulo.addEventListener("mouseover", () => {
    titulo.style.color = "green";
})


// Ejercicio 12

titulo.addEventListener("mouseout", () => {
    titulo.style.color = "black";
})


// Ejercicio 13

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        parrafo.textContent = input.value
    }
})

inputColor.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        titulo.style.color = inputColor.value
    }
})



// Ejercicio 14

const body = document.querySelector("body");

body.addEventListener("click", (event) => {
    console.log(event.target);
})


// Ejercicio 15

titulo.addEventListener("dblclick", () => {
    titulo.style.display = "none";
})

