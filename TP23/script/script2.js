document.querySelector("#botonSaludar").addEventListener("click", (e) => {
    console.log("¡hola mundo!");
    console.log(e);
});
document.querySelector("#eventosMouse").addEventListener("click", (e) => {
    console.log("evento click");
});
document.querySelector("#eventosMouse").addEventListener("mouseover", (e) => {
    console.log("evento mouseover");
});
document.querySelector("#eventosMouse").addEventListener("mouseout", (e) => {
    console.log("evento mouseout");
});
document.querySelector("#eventosMouse").addEventListener("mousedown", (e) => {
    console.log("evento mousedown");
});
document.querySelector("#eventosMouse").addEventListener("mouseup", (e) => {
    console.log("evento mouseup");
});
document.querySelector("#eventosMouse").addEventListener("wheel", (e) => {
    console.log("evento wheel");
});
document.querySelector("#eventosMouse").addEventListener("mousemove", (e) => {
    //console.log("evento mousemove");
    //console.log(e.offsetX + "/" + e.offsetY)
    document.querySelector("#eventosMouse > span").textContent = e.offsetX + "/" + e.offsetY;
});
document.querySelector("#eventostecla1").addEventListener("keydown", (e) => {
    console.log("evento keydown");
});
document.querySelector("#eventostecla1").addEventListener("keyup", (e) => {
    console.log("evento keyup");
});
document.querySelector("#eventostecla2").addEventListener("keypress", (e) => {
    console.log(e.key);
});

document.querySelector("#foco").addEventListener("focus", (e) => {
    console.log("Evento foco");
   /*  document.querySelector("#foco").style.background = "cyan"; */
    e.target.style.background = "cyan";
})
document.querySelector("#foco").addEventListener("blur", (e) => {
    console.log("Evento desenfocar");
})