let rechthoek = new Object(); // beter: {};
rechthoek.lengte = 0;
rechthoek.breedte = 0;
rechthoek.omtrek = function() {
    return 2 * (+this.lengte + +this.breedte);
};
rechthoek.oppervlakte = function() {
    return this.lengte * this.breedte;
};

rechthoek.lengte = 10;
rechthoek.breedte = 5;
if (rechthoek.lengte <= 0 || isNaN(rechthoek.lengte) ||
    rechthoek. breedte <= 0 || isNaN(rechthoek.breedte)) {
    console.log("nul-, negatieve of onmogelijke waarden");
} else {
    console.log("omtrek: " + rechthoek.omtrek());
    console.log("oppervlakte: " + rechthoek.oppervlakte());
}

