//1 capturar los datos del usuario
//2 validar los datos
    //2-b mostrar error -> return
//3 crear objeto con los datos y agregar objeto al array
//4 vaciar items
//5 (opcional) mostrar largo del array al usuario

document.querySelector("#registrar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const telefono = document.querySelector("#telefono");
    console.log(nombre.value, apellido.value, telefono.value);

    if(nombre.value === ""){
        //console.log("completar todos los input");
        mostrarError("debe completar todos los campos para poder registrar la ficha");
        return;
    }
    console.log

    let datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
    }

    //console.log(datos);
    fichas.push(datos);
    console.log(fichas);

    nombre.value = ""
    apellido.value = ""
    telefono.value = ""

    document.querySelector("#vista h2").innerHTML = `Registros <span>${fichas.length}<span>`;
    console.log("finaliza la funcion");
})

let fichas = [];

function mostrarError(txt){
    const divErrores = document.querySelector("#errores")
    divErrores.textContent = txt;
    divErrores.style.display = "flex";
    setTimeout(() => {
        divErrores.style.display = "none";
    }, 1000 * 10);
}

document.querySelector("#mostrar").addEventListener("click", () => {
    /* console.log("click a btn mostrar") */
    if(fichas.length === 0){
        mostrarError("no hay registros para mostrar");
        return;
    }
    fichas.forEach((objeto) => {
        document.querySelector("#salida").innerHTML += `<div class="ficha">
                <span>Nombre: ${objeto.nombre}</span>
                <span>Apellido:  ${objeto.apellido}</span>
                <span>Telefono:  ${objeto.telefono}</span>
            </div>`;
    });
})

document.querySelector("#vaciar").addeventlistener("click", () => {
    //vaciar los inputs
    document.queryselector("#nombre").value = "";
    document.queryselector("#apellido").value = "";
    document.queryselector("#telefono").value = "";
    //vaciar
}) 