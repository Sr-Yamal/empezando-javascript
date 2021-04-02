var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalle: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// acceder a un valor en esecìfico
console.log(auto.marca); 
console.log(auto.modelo);
console.log(auto.annio);
auto.detalle();
console.log("<-------->");
// realizar una funciòn constructura
// plantilla
function buildAuto(marca, modelo, annio, detalle) {
    this.marca = marca;
    this.modelo= modelo;
    this.annio = annio;
    this.detalle = detalle;
}

// realizando una instancia
var autoBox = new buildAuto("Tesla", "Model 3", 2020, function() {console.log(`Auto ${this.modelo} ${this.annio}`)});

console.log(autoBox.marca);
console.log(autoBox.modelo);
console.log(autoBox.annio);
autoBox.detalle();
console.log("<-------->");

var autoT = new buildAuto("GTA Car", "T20", 2015, function() {console.log(`Auto ${this.modelo} ${this.annio}`);});

autoT.detalle();

