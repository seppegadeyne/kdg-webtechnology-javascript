function ongeldige_input(lengte, breedte) {
    return lengte <= 0 || isNaN(lengte) || breedte <= 0 || isNaN(breedte)
}
class Rechthoek {
    constructor(lengte, breedte) {
        this.lengte = lengte;
        this.breedte = breedte;
        if (ongeldige_input(lengte, breedte)) {
            console.log("\nnul-, negatieve of onmogelijke waarden: " + lengte + "/" + breedte)
        }
    }
    omtrek() {
        if (ongeldige_input(this.lengte, this.breedte)) return "-";
        return 2 * (+this.lengte + +this.breedte);
    }
    oppervlakte() {
        if (ongeldige_input(this.lengte, this.breedte)) return "-";
        return this.lengte * this.breedte;
    }
}

let rechthoek = new Rechthoek("5$", "10");
console.log("Rechthoek:");
console.log("omtrek: " + rechthoek.omtrek());
console.log("oppervlakte: " + rechthoek.oppervlakte());
let vierkant = new Rechthoek(0, 0);
console.log("Vierkant:");
console.log("omtrek: " + vierkant.omtrek());
console.log("oppervlakte: " + vierkant.oppervlakte());
let rechthoek2 = new Rechthoek(10, 5);
console.log("\nRechthoek 2:");
console.log("omtrek: " + rechthoek2.omtrek());
console.log("oppervlakte: " + rechthoek2.oppervlakte());
let rechthoek3 = new Rechthoek("4", "2");
console.log("\nRechthoek 3:");
console.log("omtrek: " + rechthoek3.omtrek());
console.log("oppervlakte: " + rechthoek3.oppervlakte());