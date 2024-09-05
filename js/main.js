
let listaDeArticulos = [];


function agregarArticulo() {
	let nombre = prompt("Ingrese el nombre del artículo:");
	let precio = parseFloat(prompt("Ingrese el precio del artículo:"));
	let cantidad = parseInt(prompt("Ingrese la cantidad del artículo:"));

	let articulo = {
		nombre: nombre,
		precio: precio,
		cantidad: cantidad
	};
	listaDeArticulos.push(articulo);
	console.log("Ariticulo agregado: " + + articulo.nombre);
	alert("Artículo agregado: " + articulo.nombre);
}

function eliminarArticulo() {
	let indice = prompt("Ingrese el número del articulo que desea eliminar:");
	indice = parseInt(indice) - 1;
	if (indice >= 0 && indice < listaDeArticulos.length) {
		let articuloEliminado = listaDeArticulos.splice(indice, 1);
		console.log("Articulo eliminado: " + articuloEliminado[0].nombre);
		alert("Artículo eliminado: " + articuloEliminado[0].nombre);
	} else {
		console.log("Numero inválido. El articulo no se pudo eliminar.");
		alert("Número inválido. El artículo no se pudo eliminar.");
	}
}

function mostrarArticulos() {
	console.log("Lista de Articulos:");
	for (let i = 0; i < listaDeArticulos.length; i++) {
		let articulo = listaDeArticulos[i];
		console.log(`${i + 1}. Nombre: ${articulo.nombre}, Precio: $${articulo.precio}, Cantidad: ${articulo.cantidad}`);
	}
}

function modificarArticulo() {
	let indice = prompt("Ingrese el número del artículo que desea modificar:");
	indice = parseInt(indice) - 1;
	if (indice >= 0 && indice < listaDeArticulos.length) {
		let articulo = listaDeArticulos[indice];
		let nuevoNombre = prompt(`Ingrese el nuevo nombre del artículo (anterior: ${articulo.nombre}):`, articulo.nombre);
		let nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio del artículo (anterior: ${articulo.precio}):`, articulo.precio));
		let nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad del artículo (anterior: ${articulo.cantidad}):`, articulo.cantidad));

		articulo.nombre = nuevoNombre;
		articulo.precio = nuevoPrecio;
		articulo.cantidad = nuevaCantidad;

		console.log("Artículo modificado: " + articulo.nombre);
		alert("Artículo modificado: " + articulo.nombre);
	} else {
		console.log("Número inválido. El artículo no se pudo modificar.");
		alert("Número inválido. El artículo no se pudo modificar.");
	}
}

agregarArticulo();
agregarArticulo();
agregarArticulo();

mostrarArticulos();

eliminarArticulo();

mostrarArticulos();

modificarArticulo();

mostrarArticulos();
