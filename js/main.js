
let listaDeTareas = [];


function agregarTarea() {
	let tarea = prompt("Ingrese la nueva tarea:");
	listaDeTareas.push(tarea);
	console.log("Tarea agregada: " + tarea);
}

function eliminarTarea() {
	let indice = prompt("Ingrese el número de la tarea que desea eliminar:");
	indice = parseInt(indice) - 1; // Convertir a número y ajustar el índice
	if (indice >= 0 && indice < listaDeTareas.length) {
		let tareaEliminada = listaDeTareas.splice(indice, 1);
		console.log("Tarea eliminada: " + tareaEliminada);
	} else {
		console.log("Índice inválido. La tarea no se pudo eliminar.");
	}
}

function mostrarTareas() {
	console.log("Lista de tareas:");
	for (let i = 0; i < listaDeTareas.length; i++) {
		console.log(i + 1 + ". " + listaDeTareas[i]);
	}
}

// Ejemplo de uso de las funciones
agregarTarea();
agregarTarea();
agregarTarea();

mostrarTareas();

eliminarTarea();

mostrarTareas();
