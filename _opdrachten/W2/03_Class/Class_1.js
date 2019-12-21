class Rechthoek {
    constructor(lengte, breedte) {
        this.lengte = lengte;
        this.breedte = breedte;
        // functie-oproep binnen constructor niet toegestaan?
        if (this.lengte <= 0 || isNaN(this.lengte) ||
            this.breedte <= 0 || isNaN(this.breedte)) {
            console.log("\nnul-, negatieve of onmogelijke waarden");
        }
    }
    /*omtrek() {
        return 2 * (+this.lengte + +this.breedte);
    }*/
    omtrek = () => 2 * (+this.lengte + +this.breedte);
    /*oppervlakte() {
        return this.lengte * this.breedte;
    }*/
    oppervlakte = () => this.lengte * this.breedte;
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
console.log("Rechthoek 2:");
console.log("omtrek: " + rechthoek2.omtrek());
console.log("oppervlakte: " + rechthoek2.oppervlakte());
let rechthoek3 = new Rechthoek("4", "2");
console.log("Rechthoek 3:");
console.log("omtrek: " + rechthoek3.omtrek());
console.log("oppervlakte: " + rechthoek3.oppervlakte());
