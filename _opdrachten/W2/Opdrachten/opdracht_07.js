let persoon = {
    naam: "Jos",
    leeftijd: 58,
    toString: function() {
        return this.naam + " - " + this.leeftijd;
    }
};
console.log(persoon.toString());
