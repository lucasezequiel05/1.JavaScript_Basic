var productos = [
    { nombre: "Tv", costo: "30000"},
    { nombre: "Notebook", costo: "99000"},
    { nombre: "Celular", costo: "25000"},
    { nombre: "Consola", costo: "150000"},
    { nombre: "Mouse", costo: "500"},
    { nombre: "Auriculares", costo: "3000"},
    { nombre: "Zapatillas", costo: "9000"},
    { nombre: "Monitor", costo: "15000"},
    { nombre: "Pendrive", costo: "1500"},
    { nombre: "Tv", costo: "90000"}
];

//filter retorna un nuevo array respetando la estructura de los objetos
//Recibe cada elemento y retorna los que cumplan una condición.
var productosFiltrados = productos.filter((elemento) => {
    return elemento.costo > 10000;
});

console.log(productosFiltrados);

//map retorna un nuevo array de elementos. 
//Recibe a cada elemento del array y puede devolver un nuevo valor por cada elemento.
var camposFiltrados = productos.map((elemento)=>{
    return elemento.nombre;
});

console.log(camposFiltrados);

//find retorna el elemento buscado por lo que se guarda en una variable.
//Recibe como parámetro cada elemento del array.
var encuentraProducto = productos.find(function(elemento){
    return elemento.nombre === "Tv";
});
console.log(encuentraProducto);
console.log(typeof(encuentraProducto));

// Para buscar un elemento debo declararlo
// primero en una variable por fuera del bloque de código de forEach
//forEach recibe una función que recibe como parámetro
//cada elemento del array y dentro del bloque lo somete
// a una comparación.
var buscar = "Tv";
productos.forEach(function(producto){
    
    if(producto.nombre === buscar){
        console.log(producto.nombre);
    }
});
