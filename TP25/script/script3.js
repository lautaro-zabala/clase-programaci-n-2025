class persona{
    constructor(nombre, apellido, nacimientoY){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimientoY = nacimientoY;
    }
    saludar(){
        return `hola ${this.nombre}`;
    }
}

let persona1 = new persona("daniel", "paredes", 1996);
console.log(persona1);
console.log(persona1.saludar());