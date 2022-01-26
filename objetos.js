//Ejemplo de Objeto
var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2010,
    imprimir: function(){
        console.log(`Marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.annio}.}`)
    }
};

//Ejemplo de una Función Constructora
function crearAuto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new crearAuto("citroen","c4", 2001);

console.log(autoNuevo);

