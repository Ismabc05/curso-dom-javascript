const input = document.getElementById("input-id");
console.dir(input); // nos muestra el nodo del DOM y todas sus propiedades
input.value = "Apellido";

// cuando cambiamos una propiedad no se modifica el HTML original,
// sino el DOM, ya que el HTML solo contiene los valores iniciales.
// Al modificar una propiedad, el cambio se refleja en el DOM
// y puede verse en el inspector del navegador.

const texto = document.getElementById("app-title");
console.dir(texto);
texto.textContent = "Nuevo texto";

// otra forma de cambiar el texto

texto.innerText = "Este es otro texto";

