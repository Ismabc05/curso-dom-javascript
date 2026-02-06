// Los eventos tienen un flujo, el flujo se divide en tres fases:
// bubbling = Después de ejecutarse en el target, el evento sube hacia los ancestros hasta el window.
// target = Es cuando el evento llega al elemento que lo disparó.
// capturing = El evento viaja desde el window hacia el target.

const contenedor = document.querySelector(".container");
const boton = document.getElementById("btn");

contenedor.addEventListener("mouseover", () => {
    contenedor.style.backgroundColor = "blue";
});

contenedor.addEventListener("mouseout", () => {
    contenedor.style.backgroundColor = "red";
}); 

//boton.addEventListener("click", () => {
//    alert("Boton clicked")
//})

const botoncallback = () => {
    alert("boton clicked");
};

boton.addEventListener("click", botoncallback);

setTimeout(() => {
    boton.removeEventListener("click", botoncallback)
}, 2000);

// de esta manera se puede borrar un evento