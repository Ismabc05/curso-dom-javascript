// ya hemos visto todas las formas de agregar elementos y ahora vamos a ver como se eleminan

// podemos usar remove o removeChild

const primerItemLista = document.querySelector("li");
primerItemLista.remove();

const lista = document.getElementById("listArea");
lista.removeChild(lista.firstElementChild);
