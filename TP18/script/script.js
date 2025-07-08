if (
    2 == 2
) {
    console.log("condicional verdadero")
} else {
    console.log("condicional falso")
}

// scoope
let resp;
if(  2 > 1){
     let resp = "numero mayor";
} else {
    console.log = "numero menor";
}
console.log(resp);

//if else if

let semaforo = "verde";

if(semaforo == "verde"){
    console.log("avanzar");
}else if(semaforo == "amarillo"){
    console.log("precaucion");
} else if(semaforo =="rojo"){
    console.log("detenerse!!!");
} else {
    console.error("semaforo roto");
}

/* let monto = window.prompt("ingresar monto de la compra");

if(monto > 50000){
    console.log("25% de descuento");
    console.log("valor a pagar:", monto * 0.75);
} else if(monto > 20000){
    console.log("10% de descuento");
    console.log("valor a pagar:", monto * 0.9);
} else {
    console.log("sin descuento")
    console.log("valor a pagar:", monto);
} */

/* let edad = window.prompt("ingrese su edad");

if( edad > 17){
    console.log("mayor");
} else {
    console.log("menor");
}

// operador ternario
let respEdad = edad > 17 ? "mayor" : "menor";
console.log(respEdad) */

// operadores && y ||

let valor1 = true;
let valor2 = false;

console.log("operador &&", valor1 && valor2);
console.log("operador ||", valor1 || valor2);

if(10 = 10 && 20 = 20){
    console.log("los numeros coinciden");
} else {console.log("los numeros NO coinciden")}

let color = window. prompt("color del semaforo");

switch(color){
    case "verde":
        console.log("avanzar");
        break;
    case "amarillo":
        console.log("precaucion");
        break;
    case "rojo":
        console.log(detenerse);
        break;
    default:
        console.log("semaforo roto");
        break;
    }
