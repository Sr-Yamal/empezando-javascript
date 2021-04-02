function jugar(p1, p2) {
    // Lógica
    if (p1 === p2) {    // Si ambos eligen lo mismo
        console.log("Empate");
    } else if (p1 === "piedra") {  // Si p1 tiene piedra
        p2 === "papel" ? console.log("P2 win") : console.log("P1 win");
    } else if (p1 === "papel") {    // Si p1 tiene papel
        p2 === "tijeras" ? console.log("P2 win") : console.log("P1 win");
    } else if (p1 === "tijeras"){    // Si p1 tiene tijeras
        p2 === "piedra" ? console.log("P2 win") : console.log("P1 win");
    }    
}

jugar("piedra", "papel");
