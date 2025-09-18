//metodo foeEach()

let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.forEach((valor, i) => {
    console.log(valor, i);
});

let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach((numero) => {
    console.log(numero * 10);
})
console.log(numeros);

// modificar mediante un forEach

numeros.forEach((num, i) => {
    numeros[i] = numeros[i] += 100;
})
console.log(numeros);

numeros = numeros.join();
console.log(numeros);
numeros = numeros.split(",");
console.log(numeros)

numeros.forEach((data, i) => {
    numeros[i] = Number(data);
});
console.log(numeros);

console.clear();

let colores2 = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];
let numeros2 = [2, 9, 12, 5, 7, 8, 3];

/* // metodo find()
let query = colores2.find((dato) => {
    return dato == "verde";
}) */
let query = colores2.find(dato => dato == "verde");
console.log(query);

let queryIndex = colores2.findIndex(dato => dato == "verde");
console.log(queryIndex);

// metodo reduce()
let total = numeros2.reduce((acumulador, numero) => acumulador + numero);
console.log(total);

// array en arrays
let dato = [["pablo", 123], ["rodri", 456], ["ariel", [789, 101112]]];
console.log(dato[1][0]);
console.log(dato[2][1][0]);