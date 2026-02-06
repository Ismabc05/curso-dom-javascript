// para poder clonar un elemento o reemplazarlo se puede usar los siguientes elementos

// para clonar se usa: .cloneNode() 
// para reemplazar los elementos por otros .replaceWith()


// para clonar
const contentArea = document.getElementById("contentArea");
const originialP = document.querySelector("p");
const clonedP = originialP.cloneNode(true); // podemos true para decirle que lo clone

contentArea.append(clonedP);

clonedP.textContent = "Hola soy Ismael";


// como reemplazar un elemento por otro que ya exista

const listArea = document.getElementById("listArea");
const itemReemplazado = listArea.children[2]
itemReemplazado.replaceWith(clonedP);



