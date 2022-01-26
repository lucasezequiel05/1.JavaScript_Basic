var frutas = ["Manzana", "Pera", "Mango", "Maracuyá"];

console.log(frutas[3]);
console.log(frutas);
var cant = frutas.length;
console.log(cant);

//Agrega al final
var masFrutas = frutas.push("Uvas");
console.log(frutas);

//Quita el último
var quitar = frutas.pop();
console.log(frutas);

//Quita el primero
var nuevo = frutas.shift();
console.log(frutas);

//Trae el índice del elemento que coincida con el parámetro de comparación
var position = frutas.indexOf("Maracuyá");
console.log(position);

//Eliminar un elemento (o más) desde un índice
//(índice, cantidad de elementos a eliminar = 1)
var removed = frutas.splice(2,1);
console.log(frutas);
console.log(removed);

//Insertar un elemento
//splice recibe (índice, 0 para solo insertar y no eliminar, nuevo elemento)
frutas.splice(2,0,"Dragon Fruit");
console.log(frutas);

//Reemplazar un elemento (eliminando el anterior)
//Splice recibe (índice, 1 para indicar que elimina un elemento, elemento a reemplazar)
frutas.splice(1,1,"Arándano");
console.log(frutas);
