// parte de guardar la informacion del input y mostrarla en la lista

const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTask();

taskForm.addEventListener("submit", (event) => { // Se añade un event listener al formulario de tipo submit, ya que queremos capturar el valor del input cuando el usuario envía el formulario.
  event.preventDefault();

  const taskInput = document.getElementById("task-input");

  const task = taskInput.value;
  console.log(task);

  // Se comprueba con un if que el input no esté vacío.
  if (task) { // si hay un valor
    taskList.append(createTaskElement(task)); 
    storeTaskInLocalStorage(task);
    taskInput.value = "";
  }
});

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li;
}

function createButton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  return btn;
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// parte de darle interactividad a los botones de borrar y editar
// para ello lo vamos a hacer con delegation pattern para que el padre se va a quien le he dado click y así haga una cosa o otra

taskList.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-btn")){ // estamos diciendole que si el target contiene esa clase
        deleteTask(event.target.parentElement); // se le pasa como argumento el elemento padre del botón (parentElement), que corresponde al <li> de la tarea.
    } else if(event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement);
    }
})


function deleteTask(taskItem){
  if(confirm("Estas seguro de que quieres eliminar esta tarea?")){
    
    const taskText = taskItem.firstChild.textContent; // texto de la tarea

    taskItem.remove();               // borra del DOM
    removeLocalStorage(taskText);    // borra del localStorage
  }
}


function editTask(taskItem){
  const newTexto = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if(newTexto !== null){ // si hay texto
    taskItem.firstChild.textContent = newTexto;
    updateLocalStorage()
  }
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// ahora vamos a alamecenar los datos para que no se borren cuando cerremos nuestra pagina o recarguemos, para ello usamos
// localstorage que es una web api que permite almacenar datos en el navegador de manera persistente.

// esta funcion guarda las tareas creadas en localstorage
function storeTaskInLocalStorage(task){
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") 

  tasks.push(task); 
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

 

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Se obtiene la clave "tareas" de localStorage o si no exite un array vacio
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task))  // Se crea un nuevo elemento de lista con createTaskElement(task) , Ese elemento se añade como hijo de taskList usando appendChild.
  });
}

// con lo anterior se guarda todo en localstorage lo que pasa es que cuando editamos o eliminamos una tarea y recargamos se queda igual que antes ya que lo tenemos guardado así

function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeLocalStorage(taskContent){

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updateTasks = tasks.filter((task) => task !== taskContent);

  localStorage.setItem("tasks", JSON.stringify(updateTasks));

}

const themeToogle = document.getElementById("toggle-theme-btn");

const currentTheme = localStorage.getItem("theme"); // Se obtiene el tema guardado en localStorage:


themeToogle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light"; // validamos si contiene dark-theme se va a guardar como dark y si no se va a guardar como light

  localStorage.setItem("theme", theme);
})

if(currentTheme === "dark") {
  document.body.classList.add("dark-theme");
} 


//setItem guarda un valor bajo una clave.

//getItem devuelve/lee el valor de esa clave.