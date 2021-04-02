// 1. Coerción
// Forma en la que podemos cambiar un tipo de valor a otro

// 1.1. Coerción implicita
var a = 4 + "7"; // 47
typeof a; // string

var b = 4 * "7"; // 28
typeof b; // number

// 1.2. Coerción explicita 
var c = 20;
typeof c; // number

var d = String(c); // "20"
typeof d; // string

var e = Number(d); // 20
typeof e; // number

