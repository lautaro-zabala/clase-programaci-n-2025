let ejemplo = {
    nombre: "lauty",
    apellido: "zabala",
    nacimientoY: 1983
}
function Persona(nombre, apellido, nacimientoY){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimientoY = nacimientoY;
    this.edad = () => {
        let hoy = new Date();
        return hoy.getfullyear() - this.nacimientoY;
    }
}

const persona1 = new Persona("lauty", "zabala", 1983);
console.log(persona1);

console.log(persona1.edad())