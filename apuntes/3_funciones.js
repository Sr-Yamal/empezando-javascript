// 1. Dos tipos de funciones
//  1.1. Funciones Declarativas (function declaration / function statetment) 
function miFuncionD() {
    return "Esta es mi función";
}

// 1.1.1. Llamar a la función
miFuncionD();

//  1.2. Expresiones de función (function expression / funciones anónimas)
var miFuncionE = function() {
    return "Esta es la otra función";
}
// 1.2.1. Llamar a la función
miFuncionE();

// 2. Ejemplos 
//  2.1. Función con parámetros
var funcionSuma = function(numUno, numDos) {
    return numUno + numDos;
}
funcionSuma(4, 5);

//  2.2. Función con console.log
function saludarEstudiante(nombreEstudiante) {
    console.log('Hola ' + nombreEstudiante);
}
saludarEstudiante('Yamal');

//  2.3. Función para una base de datos
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar('Diego');

// 3. Hoisting
// Permite llamar a la función antes de que sea declarada
// *Solo aplica para palabras reservadas, como VAR y FUNCTION
