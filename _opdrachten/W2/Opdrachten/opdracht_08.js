class Persoon {
    constructor(naam, leeftijd) {
        this.naam = naam;
        this.leeftijd = leeftijd;
    }
    toString() {
        return this.naam + " - " + this.leeftijd;
    }
}

let jos = new Persoon("Jos Bosmans", 58);

console.log(jos.toString());
