let input = document.getElementById("input");
let addBtn = document.getElementById("botonSubmit");
let contenedor = document.getElementById("tareasContainer")
let eraseAllBtn = document.getElementById("reset");


const add = () => {
    let parrafo = document.createElement("p")
    contenedor.appendChild(parrafo)
    parrafo.innerHTML = input.value;
    parrafo.classList.add("p")
    input.value = "";
    parrafo.addEventListener("dblclick", () => {
        contenedor.removeChild(parrafo)
    })
}

const deleteAll = () => {
    contenedor.textContent = "";
}


addBtn.addEventListener("click", add);
eraseAllBtn.addEventListener("click", deleteAll)