function geefRandomLetters(aantal) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < aantal; i++) {
        console.log(letters[Math.floor(Math.random() * letters.length)]);
    }
}

console.log(geefRandomLetters(6));

function checkOfWoordInLijstZit(woord) {
    let woordenlijst = ["appel", "peer", "citroen"];
    if(woordenlijst.indexOf(woord) !== -1) {
        console.log("Yep");
    } else {
        console.log("Nope");
    }
}

checkOfWoordInLijstZit("appel");
checkOfWoordInLijstZit("mango");

function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5));

let jos =  {
    naam: "Jos",
    leeftijd: 27,
    toon: function() {
        console.log(this.naam + " - " + this.leeftijd);
    }
}

jos.toon();

let frank =  {
    naam: "Frank",
    leeftijd: 65,
    toon: function() {
        console.log(this.naam + " - " + this.leeftijd);
    }
}
frank.toon();

class Persoon {
    constructor(naam, leeftijd) {
        this.naam = naam;
        this.leeftijd = leeftijd;
    }
    toon() {
        console.log(this.naam + " - " + this.leeftijd);
    }
}

let jos2 = new Persoon("Jos", 27);
let frank2 = new Persoon("Frank", 65);

jos2.toon();
frank2.toon();

class Dobbelsteen {
    constructor(aantal) {
        this.maxAantalOgen = aantal;
        this.aantalOgen = 1;
    }
    werp() {
        this.aantalOgen = Math.floor(Math.random()*this.maxAantalOgen)+1;
        return this.aantalOgen;
    }
}

let d6 = new Dobbelsteen(6);
console.log(d6.werp());

class Product {
    constructor(naam, prijs) {
        this.naam = naam;
        this.prijs = prijs;
    }
    toon() {
        console.log(this.naam + " - " + this.prijs + " euro");
    }
}

let steak = new Product("Steak", 8);
steak.toon();

class Winkelkar {
    constructor() {
        this.producten = [];
    }
    voegProductToe(product) {
        this.producten.push(product);
    }
    toonAfrekening() {
        console.log("Bedankt voor je aankoop, hier is de afrekening: ");
        let totalePrijs = 0;

        for(let i = 0; i < this.producten.length; i++) {
            this.producten[i].toon();
            totalePrijs += this.producten[i].prijs;
        }
        console.log("De totale prijs is: " + totalePrijs + " euro");
    }
}

let winkelKar = new Winkelkar();
winkelKar.voegProductToe(steak);
winkelKar.voegProductToe(new Product("Taart", 5));
winkelKar.voegProductToe(new Product("Groentjes", 6));
winkelKar.toonAfrekening();
console.log(winkelKar.producten);