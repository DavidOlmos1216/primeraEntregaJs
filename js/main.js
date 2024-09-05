
let listaDeArticulos = [];


function agregarArticulo() {
	let articulo = prompt("Ingrese el nombre del articulo:");
	listaDeArticulos.push(articulo);
	console.log("Ariticulo agregado: " + articulo);
}

function eliminarArticulo() {
	let indice = prompt("Ingrese el número del articulo que desea eliminar:");
	indice = parseInt(indice) - 1; 
	if (indice >= 0 && indice < listaDeArticulos.length) {
		let articuloEliminado = listaDeArticulos.splice(indice, 1);
		console.log("Articulo eliminado: " + articuloEliminado);
		alert("Artículo eliminado: " + articuloEliminado);
	} else {
		console.log("Numero inválido. El articulo no se pudo eliminar.");
		alert("Número inválido. El artículo no se pudo eliminar.");
	}
}

function mostrarArticulos() {
	console.log("Lista de Articulos:");
	for (let i = 0; i < listaDeArticulos.length; i++) {
		console.log(i + 1 + ". " + listaDeArticulos[i]);
	}
}

agregarArticulo();
agregarArticulo();
agregarArticulo();

mostrarArticulos();

eliminarArticulo();

mostrarArticulos();
