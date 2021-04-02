// Declaración
var fruta = ["manzana", "pera", "naranja", "mango"];

console.log(fruta);

// obtener número de elementos de un array
console.log(fruta.length);

// llamar a un elemento
console.log(fruta[0]);  // considera que el primer elemento es 0

// añadir elementos al final de un array
var masFruta = fruta.push("uva");
console.log(fruta);
console.log(fruta[4]);
console.log(masFruta);

// eliminar el último elemento de un array
var noFruta = fruta.pop();
console.log(fruta);

// añadir elemento al principio del array
var nuevoIni = fruta.unshift("cereza");
console.log(fruta);

// eliminar el primer elemento de un array 
var quitarIni = fruta.shift();
console.log(fruta);

// buscar el número de la pposición de un elemento dentro de un array
var posicion = fruta.indexOf("naranja");
console.log(posicion);