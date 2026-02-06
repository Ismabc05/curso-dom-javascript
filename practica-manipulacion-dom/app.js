const titulo = document.getElementById("titulo");
const parrafo = document.querySelector("p");
const li = document.querySelectorAll("li");
const lista = document.getElementById("lista")
const primerElemento = lista.children[0];
const segundoElemento = lista.children[1];
const tercerElemento = lista.children[2];
const caja = document.getElementById("caja");
const input = document.querySelector("input");


titulo.textContent = "Aprendiendo Manipulación del DOM";
parrafo.innerHTML= "<p>Esto es un parrafo con una palabra en <strong>negrita</strong></p>";
segundoElemento.textContent = "Elemento modificado";
titulo.style.color = "blue";
caja.style.backgroundColor = "orange";

for(cadaLi of li){
    cadaLi.style.fontSize = "18px";
}

caja.classList.add("active");
caja.classList.remove("box");

if(caja.classList.contains("hideen")){
    console.log(true);
}else{
    console.log(false);
}

input.placeholder = "Escribe tu nombre";
input.disabled = true;
console.log(input.type);


lista.insertAdjacentHTML("afterend", "<p>Esto es un texto libre</p>")

lista.removeChild(lista.firstElementChild);

primerElemento.textContent = "item1";
segundoElemento.textContent = "item2";
tercerElemento.textContent = "item3";

lista.insertAdjacentHTML("beforebegin", "<h2>Lista de elementos</h2>");



