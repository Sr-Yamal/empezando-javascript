// Lista de carros (marcas y modelos)
var carros = [
    {
        marca: "Aston Martin", 
        modelo:["Rapide", "Vantage", "Vanquish", "DB9", "DB11"],
        annio: [2009, 2005, 2012, 2004, 2016]
    },
    {
        marca: "Audi",
        modelo: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "S3", "TT", "R8"],
        annio: [2010, 1996, 1994, 2007, 1995, 2010, 1994, 2016, 2011, 2008, 2006, 2018, 1996, 1998, 2006]
    },
    {
        marca: "BMW",
        modelo: ["i3", "Serie 1", "Serie 2", "Serie 3", "Serie 4", "Serie 5", "Serie 6", "Serie 7", "i8", "X2", "X1", "X3", "X4", "X5", "X6"],
        annio: [2013, 2004, 2011, 1975, 2013, 1972, 1975, 1977, 2014, 2018, 2009, 2003, 2014, 1999, 2008]
    }
];

// Función constructora
function buildAuto(autoMarca, autoModelo, autoAnnio, autoDetalle) {
    this.marca = autoMarca;
    this.modelo = autoModelo;
    this.annio = autoAnnio;
    this.detalle = autoDetalle;
}

// Array donde se guardarán los carros construidos mediante buildAuto
var eachCar = [];

function createCar() {

    // Ciclo para crear las nuevas instancias
    for (var marca = 0; marca < carros.length; marca++) {

        for (var modelo = 0; modelo < carros[marca].modelo.length; modelo++) {
            
            // Agregamos llas nuevas instancias
            eachCar.push(new buildAuto (
                carros[marca].marca, 
                carros[marca].modelo[modelo], 
                carros[marca].annio[modelo],
                function () {
                    console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`);
                }));

                eachCar[eachCar.length - 1].detalle();
        }
    }
}

createCar();
    




