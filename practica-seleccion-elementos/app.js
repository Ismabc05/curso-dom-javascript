const titulo = document.getElementById("main-title");
console.log(titulo);

const titulo2 = document.querySelector("#main-title");
console.log(titulo2);

const parrafo = document.querySelector("p");
console.log(parrafo);

const elementos = document.querySelectorAll(".nav-item");
console.log(elementos);

const elementos2 = document.getElementsByClassName("nav-item");
console.log(elementos2);

const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

const menu = document.getElementById("menu-parent");
console.log(menu);

const hijos = menu.children;
console.log(hijos);

const primerHijo = menu.firstElementChild;
console.log(primerHijo);

const ultimoHijo = menu.lastElementChild;
console.log(ultimoHijo);

const elementoAnterior = menu.previousElementSibling;
console.log(elementoAnterior);

const siguienteElemento = menu.nextElementSibling;
console.log(siguienteElemento);

const primerLi = document.querySelector("li");
console.log(primerLi);

const padre1 = primerLi.parentNode;
console.log(padre1);

const parent2 = primerLi.parentElement;
console.log(parent2);

const cercano = primerLi.closest("nav");
console.log(cercano);
