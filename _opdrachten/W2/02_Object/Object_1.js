/*let rechthoek = {
    // lengte: 0,
    // breedte: 0,
    omtrek: function() {
        return 2 * (+this.lengte + +this.breedte);
    },
    oppervlakte: function() {
        return this.lengte * this.breedte;
    }
};*/


let rechthoek = {
    omtrek: function() {

    },
    oppervlakte: function() {

    }
};
// rechthoek.lengte = prompt("Geef de lengte: ");
// rechthoek.breedte = prompt("Geeft de breedte: ");
rechthoek.lengte = 10;
rechthoek.breedte = 5;
console.log("omtrek: " + rechthoek.omtrek());
console.log("oppervlakte: " + rechthoek.oppervlakte());
rechthoek.lengte = "4";
rechthoek.breedte = "2";
console.log("omtrek: " + rechthoek.omtrek());
console.log("oppervlakte: " + rechthoek.oppervlakte());


