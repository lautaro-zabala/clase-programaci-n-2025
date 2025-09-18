document.querySelector("#divEstilo").style.border = "4px solid black";


document.querySelector("#destino").innerHTML += "<p>Texto agregado desde js</p>";

const element = document.createElement("p");
element.textContent = "parrafo creado con createElement";
document.querySelector("#destino").appendChild(element);