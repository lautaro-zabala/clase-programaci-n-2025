//funciones

console.log("hola mundo");

// funciones declaradas
function hola(nombre){
    console.log("hola "+ nombre);
}

hola("lauty");

// funciones anonimas
const chau = function(nombre){
    console.log("chau "+ nombre);
}

chau("lauty");

// funciones flecha
const bienvenido = (nombre) => {
    console.log("bienvenido " + nombre);
}

bienvenido("lauty");

// return

// capturar return
let retorno = hola("test de retorno");
console.log(retorno);

// declarar return
function calculo(a, b){
    let suma = a + b
    return suma;
}

retorno = calculo(3, 8);
console.log(retorno);

//0pcion2
function calculo2(a, b){
    return a + b
}
console.log(calculo2 (4, 6));

//return en fuction flecha
const calculoflecha = (a, b) => {return a + b};
console.log(calculoflecha(5, 55));

//opcion 2
const calculoflecha2 = (a, b) =>  a + b;
console.log(calculoflecha2(32, 17));

// IIFE - Inmediatly Invoked Function Expressions

(function iifeprivada(){
    console.log("funcion iife privada")
})();

//callbacks
console.clear()

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

console.log(multiplicar(6, 8));

const calculadora = (a, b, cb) => cb(a, b);

console.log(calculadora(7326, 2137, dividir));