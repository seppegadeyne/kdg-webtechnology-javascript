class Adres {
    constructor(straat, postnummer, gemeente) {
        this.straat = straat;
        this.postnummer = postnummer;
        this.gemeente = gemeente;
    }
    toString() {
        return this.straat + ", " + this.postnummer + " " + this.gemeente;
    }
}

class Persoon {
    constructor(naam, adres) {
        this.naam = naam;
        this.adres = adres;
    }
    toString() {
        return this.naam + "\n" + this.adres.toString();
    }
}

let adres = new Adres("Meir 42", 2000, "Antwerpen");
let persoon = new Persoon("Jos Bosmans", adres);

console.log(persoon.toString());
