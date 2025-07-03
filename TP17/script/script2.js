let miVariable

miVariable = "info";

miVariable = 558;

console.log(miVariable);

const apellido= "zabala";
console.log("apellido")

/* apellido = "pepe"
console.log(apellido) */

const nombre = "lautaro";

console.log(nombre, apellido);

const nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

/* const dni = window.prompt("ingrese su dni");
console.log(dni); */

let numeroA = 6;
let numeroB = 4;
let suma = numeroA + numeroB;
console.log(suma);

/* let numeroC = window.prompt("primer numero");
numeroC = Number(numeroC); // parsear
let numeroD = window.prompt("segundo numero");
numeroD = Number(numeroD);
let sumaCD = numeroC + numeroD;
console.log(sumaCD); */

// scope

let numerox = 8;
console.log(numerox);
{
    let numerox = 18;
    console.log(numerox)
}

console.log(numerox);