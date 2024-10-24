// Referencias a los elementos
const inputNuevaTarea = document.getElementById('nueva-tarea');
const botonAgregarTarea = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');
const botonBorrarLista = document.getElementById('borrar-lista');

// Función para agregar tarea
function agregarTarea() {
    const textoTarea = inputNuevaTarea.value.trim();
    
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }
    
    // Crear elemento li
    const li = document.createElement('li');
    
    // Crear checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', marcarTarea);

    // Crear span con texto
    const span = document.createElement('span');
    span.textContent = textoTarea;

    // Añadir checkbox y span a li
    li.appendChild(checkbox);
    li.appendChild(span);
    
    // Añadir li a la lista
    listaTareas.appendChild(li);

    // Limpiar el input
    inputNuevaTarea.value = "";
}

// Función para marcar como completada
function marcarTarea() {
    const li = this.parentElement; // El elemento padre del checkbox es el li
    li.classList.toggle('completed');
}

// Función para borrar toda la lista
function borrarLista() {
    listaTareas.innerHTML = ""; // Eliminar todo el contenido de la lista
}

// Event listeners
botonAgregarTarea.addEventListener('click', agregarTarea);
botonBorrarLista.addEventListener('click', borrarLista);

// Permitir agregar tarea con Enter
inputNuevaTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});
