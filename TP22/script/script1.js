console.log("mochila actualizada")


// largo del array
console.log("tengo", mochila.length, "materiales en mi mochila.");

// seleccionar el ultimo item
console.log("el primer material es:", mochila[0]);
console.log("el ultimo material es:", mochila[mochila.length - 1]);

// agregar y quitar items
mochila.push("marcador");
console.log("mochila despues de agregar macador:", mochila);

let itemRemovido = mochila.pop();
console.log("mochila despues de quitar el ultimo:", mochila);
console.log("el material que quite fue:", itemRemovido)

// vaciar mochila

mochila = [];
console.log("mi mochila ahora esta vacia:", mochila)