var estudiantes = ["Yamal", "Alejandro", "Gerardo", "Marya"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}