
let listaDeArticulos = JSON.parse(localStorage.getItem('articulos')) || [];

function guardarArticulos() {
    localStorage.setItem('articulos', JSON.stringify(listaDeArticulos));
}

function actualizarDOM() {
    const lista = document.getElementById('listaArticulos');
    lista.innerHTML = ''; // Limpiar lista antes de actualizar
    listaDeArticulos.forEach((articulo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Nombre: ${articulo.nombre}, Precio: $${articulo.precio}, Cantidad: ${articulo.cantidad}`;
        lista.appendChild(li);
    });
}


function agregarArticulo() {
	let nombre = document.getElementById('nombre').value;
	let precio = parseFloat(document.getElementById('precio').value);
	let cantidad = parseInt(document.getElementById('cantidad').value);

	if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
        const articulo = { nombre, precio, cantidad };
        listaDeArticulos.push(articulo);
        guardarArticulos();
        actualizarDOM();

        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('cantidad').value = '';
    } else {
        alert("Por favor, ingrese todos los datos correctamente.");
    }
}

function eliminarArticulo() {
	let indice = parseInt(document.getElementById('indiceEliminar').value) - 1;
	if (indice >= 0 && indice < listaDeArticulos.length) {
		listaDeArticulos.splice(indice, 1);
        guardarArticulos();
        actualizarDOM();
        document.getElementById('indiceEliminar').value = '';
	} else {
		alert("Número inválido. El artículo no se pudo eliminar.");
	}
}

document.getElementById('agregarBtn').addEventListener('click', agregarArticulo);
document.getElementById('eliminarBtn').addEventListener('click', eliminarArticulo);

// function mostrarArticulos() {
// 	console.log("Lista de Articulos:");
// 	for (let i = 0; i < listaDeArticulos.length; i++) {
// 		let articulo = listaDeArticulos[i];
// 		console.log(`${i + 1}. Nombre: ${articulo.nombre}, Precio: $${articulo.precio}, Cantidad: ${articulo.cantidad}`);
// 	}
// }

function modificarArticulo() {
	let indice = parseInt(prompt("Ingrese el número del artículo que desea modificar:")) - 1;
	if (indice >= 0 && indice < listaDeArticulos.length) {
		let articulo = listaDeArticulos[indice];
		let nuevoNombre = prompt(`Ingrese el nuevo nombre del artículo (anterior: ${articulo.nombre}):`, articulo.nombre);
		let nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio del artículo (anterior: ${articulo.precio}):`, articulo.precio));
		let nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad del artículo (anterior: ${articulo.cantidad}):`, articulo.cantidad));

		if (nuevoNombre && !isNaN(nuevoPrecio) && !isNaN(nuevaCantidad)) {
            articulo.nombre = nuevoNombre;
            articulo.precio = nuevoPrecio;
            articulo.cantidad = nuevaCantidad;

            guardarArticulos();
            actualizarDOM();
        } else {
            alert("Los valores ingresados no son válidos.");
        }
	} else {
        alert("Número inválido. El artículo no se pudo modificar.");
	}
}

function limpiarLista() {
    if (confirm("¿Estás seguro de que deseas eliminar todos los artículos?")) {
        listaDeArticulos = [];
        guardarArticulos();
        actualizarDOM();
    }
}

document.getElementById('limpiarListaBtn').addEventListener('click', limpiarLista);

agregarArticulo();
agregarArticulo();
agregarArticulo();

mostrarArticulos();

eliminarArticulo();

mostrarArticulos();

modificarArticulo();

mostrarArticulos();


function guardarDatos() {
	localStorage.setItem('listaArticulos', JSON.stringify(listaDeArticulos));
  }
  
  function cargarDatos() {
	const datosGuardados = localStorage.getItem('listaArticulos');
	if (datosGuardados) {
	  listaDeArticulos = JSON.parse(datosGuardados);
	}
  }
  
  function mostrarArticulosEnTabla() {
  }
  
  
  cargarDatos();
  mostrarArticulosEnTabla();
  
  const btnAgregar = document.getElementById('btnAgregar');
  btnAgregar.addEventListener('click', agregarArticulo);
