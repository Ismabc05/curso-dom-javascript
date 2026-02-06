// vamos a modificar los estilos
const titulo = document.getElementById("app-title");
console.dir(titulo);

titulo.style.color = "red"; // esta forma se agrega directamente al html como atributo, puede dar muchas problemas ya que si tenemos definido algun estilo anterior se puede sobreescribir

//ejemplo
const menu = document.querySelector("menu");
console.dir(menu);
menu.style.backgroundColor = "red";
menu.style.fontSize = "25px";
//menu.style.color = "blue"


//Otra forma de modificar estilos
menu.className = "main-menu"; // Cambia el nombre de la clase que tenga la clase menu


//otra forma de modificar estilos
//classlist a diferencia con classname, está no elimina la clase anterior, permite agregar mas de una clase

const boton = document.getElementById("input-id");
console.log(boton);


boton.addEventListener("click", () => {
    menu.classList.toggle("invisible"); // estamos agregando un nueva clase que tiene sus propios estilos cuando hagamos click
    // toggle es como un swtich, sila clase existe la quita y si no la agrega
});


//El botón (input) escucha el evento click

//Cuando haces click:

//classList.toggle("invisible")

//Agrega o quita la clase sin borrar las otras