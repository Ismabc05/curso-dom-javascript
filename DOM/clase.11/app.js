const boton = document.getElementById("btn");

// esta funcion nos trae el evento con todas sus atributos
const botonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.textContent);
}

boton.addEventListener("click", botonClick);