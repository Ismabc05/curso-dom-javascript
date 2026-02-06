// Ahora vamos a ver como crear elementos con createElement que es otra forma a parte de innerHTML y insertAdjacentHTML

// esta es la mejor forma ya que no sustituyr nada, ni hace falta indicarle donde, ni renderiza nada

const nuevoPElement = document.createElement("p"); // aqui estamos diciendo que vamos a crear un nuevo elemento que va a ser un parrafo

nuevoPElement.textContent = "Este es un nuevo texto"; // le añadimos un texto

const contentArea = document.getElementById("contentArea"); // seleccionamos donde los queremos inyectar el nuevo elemento

contentArea.append(nuevoPElement); // y con append añades el nuevo elemento al contenedor

//.prepend nos agrega el elemento al inicio
//.before nos agrega el elemento antes de otro elemento en especifico
//.after nos agrega el elemento despues de otro elemento en especifico


// Otro ejemplo

const nuevoLiElement = document.createElement("li");
nuevoLiElement.textContent = "item5";
const listArea = document.getElementById("listArea");
listArea.prepend(nuevoLiElement);