localStorage.setItem("curso", "programacion web");

const curso = localStorage.getItem("curso");
console.log(curso);

document.querySelector("#grabar").addEventListener("click", (e) => {
   const nombre = document.querySelector("#nombre");
   const apellido = document.querySelector("#apellido");
   if(nombre.value === "" || apellido.value === ""){
    console.error("inputs invalidos");
    return;
   }
   const datos = {
    nombre: nombre.value,
    apellido: apellido.value
   }
   console.log(datos)
   localStorage.setItem("datos", JSON.stringify(datos))
});
document.querySelector("#leer").addEventListener("click", (e) => {
   let datosLS = localStorage.getItem("datos");
   datosLS = JSON.parse(datosLS)
   console.log()
})