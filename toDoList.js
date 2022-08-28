let input = document.getElementById("input");
let addBtn = document.getElementById("botonSubmit");
let contenedor = document.getElementById("tareasContainer")
let eraseAllBtn = document.getElementById("reset");


let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const saveInLocalstorage = dataDelInput => {
    
    //localStorage.setItem('tareas', dataDelInput || [])
    localStorage.setItem("tareas", JSON.stringify(dataDelInput))
};

const prueba = localStorage.setItem('prueba', JSON.stringify({nombre: "Ariel", Apellido: "Brennan"}));

console.log(localStorage.getItem('prueba'))

console.log(localStorage.getItem("tareas"));

const parseLocalStorage = JSON.parse(localStorage.getItem('prueba')) || [];

//const parseLocalStorage = localStorage.getItem('prueba');

//console.log(parseLocalStorage)

//JSON.parse(parseLocalStorage)

console.log(parseLocalStorage)


const add = () => {
    //input.preventDefault()
    let parrafo = document.createElement("p");
    contenedor.appendChild(parrafo);
    parrafo.innerHTML = input.value;
    parrafo.classList.add("p");
    //tareas.some(inp => inp.toLowerCase() === input.value) ? alert('La tarea ya existe') : return;
    
    
if (!input.value.length){
        alert('No se ingreso ninguna tarea');
        return;
    } else if (tareas.some(inp => inp.toLowerCase() === input.value.trim().toLowerCase())) {
        alert('Ya existe una tarea con ese nombre');
        //return;
    }; 

    tareas = [...tareas, input.value];
    
    saveInLocalstorage(tareas)
    console.log(saveInLocalstorage(tareas))

    input.value = "";
    parrafo.addEventListener("click", () => {
        parrafo.style.textDecoration = "line-through";
        parrafo.style.color = "grey";
    })
    parrafo.addEventListener("dblclick", () => {
        contenedor.removeChild(parrafo)
        //localStorage.removeItem(JSON.stringify(input.value))
        //localStorage.removeItem(input.value)
        //localStorage.removeItem(parrafo);
    })
    console.log(tareas)
}




const deleteAll = () => {
    contenedor.textContent = "";
    localStorage.clear();
    console.clear();
    tareas = [];
    saveInLocalstorage(tareas)
}

addBtn.addEventListener("click", add);
eraseAllBtn.addEventListener("click", deleteAll)
