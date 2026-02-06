
// delegation patter asirve para añadirle eventos al padre y que el padre se encargue de ejecutarlos sobre sus hijos

// el ejemplo que vamos a hacer es cuando hagamos click en cualquiera de los li se cambia el color de fondo 

/* const listItem = document.querySelectorAll("li");

// hacemos un bucle para agregarle un eventListener a cada uno de los elementos
listItem.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.classList.toggle("highlight"); // ya hemos dicho que con el toggle si la clase existe se la quita y si no se la añade
    })
})*/


// asi se hace con delegation pattern

const padreLista = document.querySelector("ul");

padreLista.addEventListener("click", (event) => {
    event.target.closest("li").classList.toggle("highlight") // cuando haga click nos trae el atributo cercano que tenga la  eqtiqueta li

})
