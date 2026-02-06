const form = document.getElementById("myForm");

// en el momento en el que demos click a el boton vamos a llamar a una funcion que va a tener acceso a cada uno de esos inputs

form.addEventListener("submit", (event) => {
    event.preventDefault() // con esto prevenimos el comportamiento lo cual no va a reiniciar cuando hagamos submit
    const name = form.elements["name"].value // elements busca un elemento en el formulario  que tenga un atributo llamado name y nos devuelve el valor
    console.log(name);
    event.target.elements.email.value // esto es otra forma de hacerlo
    console.log(email);
})