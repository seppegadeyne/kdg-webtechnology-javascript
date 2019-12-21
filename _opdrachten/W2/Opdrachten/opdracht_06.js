let persoon = new Object();

persoon.naam = "Jos";
persoon.leeftijd = 58;

persoon.toString = function() {
    return this.naam + " - " + this.leeftijd;
};

console.log(persoon.toString());
