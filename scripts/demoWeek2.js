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


let naam = "Senne";
let naamArray = [];

for(let i = 0; i < naam.length; i++) {
    naamArray.push(naam.charAt(i));
}

naamArray = naamArray.reverse();
console.log(naamArray.join(""));
naamArray.forEach(element => {
    console.log(element);    
});

//SORTEREN VAN NUMMERS
let numbers = [20,1,4,7,90,200,100,3,2,4];
numbers.sort(function(a,b) {
    return a - b;
});
console.log(numbers);

function compare(a, b) {
    return a - b;
}
let data = [100,200,2,43,56];
console.log(data.sort(compare).reverse());
console.log("HOOGSTE: " + Math.max(data.join()));

let average = 1;
for(let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}
console.log("Gemiddelde is: " + average / numbers.length);

let kwadraten = [];
let kwadraat = 1, i = 1;
while(kwadraat < 1000) {
    kwadraat = i * i;
    if (kwadraat < 1000) kwadraten.push(kwadraat);
    i++;
}

console.log(kwadraten);

function argumenten() {
    let result = [];
    for(let i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }
    return result;
}

console.log(argumenten(1,2,4,"boe","joske","lorum"));

let volledigeNaam = "Senne Tuulenpoika Gadeyne"
function initialen(naam) {
    let initialenArray = volledigeNaam.trim().split(" ");
    if(initialenArray.length > 1) {
        let initialenTekst = ""; 
        initialenArray.forEach(element => {
            initialenTekst += element.charAt(0) + ".";
        });
        return initialenTekst;
    } else {
        return false;
    }   
}

console.log(initialen(volledigeNaam));

let datum = new Date();
console.log(datum);
console.log(datum.getHours() + ":" + datum.getMinutes());

let pi = Math.PI;


rechthoek = {
  lengte: 10,
  breedte: 5,
  oppervlakte: function() {
    console.log("Oppervlakte = " + this.lengte * this.breedte);
  },
  omtrek: function() {
      console.log("Omtrek = " + (this.lengte + this.breedte) * 2);
  }
}

rechthoek.oppervlakte();
rechthoek.omtrek();

class Rechthoek {
    constructor(lengte, breedte) {
        this.lengte = lengte;
        this.breedte = breedte;
    }
    oppervlakte() {
        if(isNaN(this.lengte) || isNaN(this.breedte)) {
            return "Geen geldige invoer";
        } else {
            return this.lengte * this.breedte;
        }
    }
    omtrek() {
        return (this.lengte + this.breedte) * 2;
    }
}

let rechthoekObject = new Rechthoek(10, 5);
console.log("Oppervlakte: " + rechthoekObject.oppervlakte());
console.log("Omtrek: " + rechthoekObject.omtrek());