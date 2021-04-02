// Scope Global
var miNombre = 'Yamal';

// Scope Local
function nombre() {
    var miApellido = 'Márquez';
    console.log(miNombre + ' ' + miApellido);
}

nombre(); 
console.log(miApellido); // miApellido is not defined

// Scope Local puede acceder a los variables de Scope global
// Scope global no puede acceder a los variables de Scope Local