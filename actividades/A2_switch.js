function jugar(p1, p2){
    switch (p1) {
        case "piedra":  // si P1 tiene piedra
            switch (p2) {
                case "piedra":
                    console.log("DRAW");
                    break;
                case "papel":
                    console.log("P2 win");
                    break;
                case "tijeras":
                    console.log("P1 win");
                    break;
                default:
                    break;
            }
            break;
        case "papel":   // si P1 tiene papel
            switch (p2) {
                case "piedra":
                    console.log("P1 win");
                    break;
                case "papel":
                    console.log("DRAW");
                    break;
                case "tijeras":
                    console.log("P2 win");
                    break;
                default:
                    break;
            }
            break;
        case "tijeras": // si P1 tiene tijeras
            switch (p2) {
                case "piedra":
                    console.log("P2 win");
                    break;
                case "papel":
                    console.log("P1 win");
                    break;
                case "tijeras":
                    console.log("DRAW");
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

jugar("tijeras", "papel");