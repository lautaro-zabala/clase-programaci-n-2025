console.log("ping script3.js");

// tipos de datos

let numeros = 17;
let string = "texto en js";
let booleano = true; // false
let nulo = null;
let indefinido;
let array = ["texto", 55, false, null, undefined, 58];
let objeto = {
    edad: 42,
    nombre: "pablo",
    estado: true,
};

console.log(numeros);
console.log(typeof(numeros));
console.log(typeof(string));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

let numA = "20";
numA = Number(numA);
let numB = 30;
console.log(numA + numB);

let valorpi = "3.14159";
console.log(valorpi, typeof(valorpi));

let valornum = Number(valorpi);
console.log(valornum,typeof(valornum));

let valorint = parseInt(valorpi);
console.log(valorint,typeof(valorint));

let valorfloat = parseFloat(valorpi);
console.log(valorfloat,typeof(valorfloat));