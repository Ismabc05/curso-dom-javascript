// vamos a crear nuevos elementos y a añadirlos en el DOM
// se usa innerHTML o insertAdjacentHTML

// innerHTML crea un string y se inyecta al DOM
// insertAdjacentHTML hace lo mismo pero podemos decirle que donde queremos que lo inyecte

const lista = document.getElementById("contentArea");
console.log(lista);

lista.innerHTML = "<p>Este es un nuevo parrafo</p>" // ahi que tener mucho cuidado ya que puede reemplazar texto que ya estaba

lista.insertAdjacentHTML("beforeend", "<p> Este es otro parrafo nuevo</p>") // gracias a que podemos seleccionar donde queremos inyecta el nuevo texto, no lo sobreescribimos por el que ya tenemos

/* 
'beforebegin': Antes que el propio elemento.
'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
'beforeend': Justo dentro del elemento, después de su último elemento hijo.
'afterend': Después del propio elemento.
*/

const lista2 = document.getElementById("listArea");
lista2.insertAdjacentHTML("beforeend", "<li>item5</li>")

// para usar innerhtml sin reemplazar el texto, pero si lo hacemos de esta manera resetea toda la lista completa

lista2.innerHTML += "<li>item6</li>"