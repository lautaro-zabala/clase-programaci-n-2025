console.log("soy el archivo externo, hola");
console.info("soy un info");
console.warn("soy un warn");
console.error("soy un error");

console.table({
    nombre:"lautaro",
    apellido:"zabala",
    curso:"programacion",
});

window.prompt("ingrese un dato")

if(cantidad > 10 && precio >= 20000){
    console.log("valor final con descuento" + valorfinal);
    let valorfinal = precio * 0.8;
} else {console.log("valor final sin descuento" + precio)}
