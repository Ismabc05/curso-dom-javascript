const parent = document.getElementById("parent");
console.log(parent)

const children = parent.children; // con .children podemos traer los hijos que contenga el elemento que estamos seleccionando
console.log(children)

const firstchildren = parent.firstElementChild;
console.log(firstchildren) // con firstElementChild nos trae el primer hijo

const lastChild = parent.lastElementChild; // con lastElementChild nos trae el ultimo hijo
console.log(lastChild)

const previousSibling = parent.previousElementSibling; // llegamos al familiar previo del padre
console.log(previousSibling);

const nextSibling = parent.nextElementSibling;
console.log(nextSibling); // legamos al familiar siguiente al padre


const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode; // nos trae al padre del elemento
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent) // nos trae al padre del elemento

const grandGrandParent = children2.closest("menu") // nos trae al elemento mas cercano que sea un elemento de menú
console.log(grandGrandParent)