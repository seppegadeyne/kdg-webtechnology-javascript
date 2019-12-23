function oefeningenWeek3() {
    let tekst1 = "Dit is een eerste regel tekst\n";
    let tekst2 = "Hier nog een andere regel tekst\n";
    let tekst3 = "En voila nog een regeltje\n";

    console.log(tekst1 + tekst2 + tekst3);
    document.getElementById('demoWeekDrie').innerHTML = tekst1.replace("\n", "<br>") + tekst2.replace("\n", "<br>") + tekst3.replace("\n", "<br>");
    let samengevoegdeTekst = tekst1.replace("\n", " ") + tekst2.replace("\n", " ") + tekst3.replace("\n", " ");
    console.log(samengevoegdeTekst);

    for(let i = 0; i < 15; i += 5) {
        console.log(samengevoegdeTekst.charAt(i) + " staat op positie " + i);
    }

    console.log("De tekst bestaat uit " + samengevoegdeTekst.length + " karakters.");
    console.log("De eerste spatie komt voor op positie " + samengevoegdeTekst.indexOf(" "));
    console.log("De laatste spatie komt voor op positie " + samengevoegdeTekst.lastIndexOf(" "));

    let ingevoerdeTekst = prompt("Voer een teskt in: ");
    console.log(ingevoerdeTekst);
    console.log("De eerste spatie komt voor op positie " + ingevoerdeTekst.indexOf(" "));
    document.getElementById("tweedeParagraaf").innerHTML = ingevoerdeTekst + "<br>De eerste spatie komt voor op positie " + ingevoerdeTekst.indexOf(" ");
}

function schrijfTekst(tekst) {
    document.getElementById("demoArticle").innerHTML = "<p>" + tekst + "</p>";
}

function optellen(getal1, getal2) {
    return parseFloat(getal1) + parseFloat(getal2);
}

function oefeningArray() {
    let familie = ['Seija', 'Seppe', 'Senne', 'Silke', 'Luka', 'Ronny'];
    document.getElementById("demoArticle").innerHTML = "<p>" + familie.length + "</p>";

    for(i = 0; i < familie.length; i++) {
        //document.getElementById("demoArticle").innerHTML += "<p>" + familie[i] + "</p>";
    }

    let extraNaam = prompt("Geef een naam op: ");
    familie.push(extraNaam);
    familie.sort();
    familie.reverse();

    familie.forEach(element => {
        document.getElementById("demoArticle").innerHTML += "<h2>" + element + "</h2>";    
    });

    document.getElementById("demoArticle").innerHTML = "<p>" + familie.join(" | ") + "</p>";
}

let el = document.getElementById("demoArticle");

function Auto(merk, model, aantalDeuren, bouwJaar) {
    this.merk = merk;
    this.model = model;
    this.aantalDeuren = aantalDeuren;
    this.bouwJaar = bouwJaar;
    this.prijs = prijsAuto(this.merk);
}

class NieuweAuto {
    constructor(merk, model, aantalDeuren, bouwjaar) {
        this.merk = merk;
        this.model = model;
        this.aantalDeuren = aantalDeuren;
        this.bouwJaar = bouwjaar;
        this.prijs = prijsAuto(this.merk);
    }

    toon() {
        document.getElementById("demoArticle").innerHTML = "<p>" + this.merk + " " + this.model + " voor € " + this.prijs + "</p>";
    }
}

/*
let auto = {
    merk : "Ford",
    model : "Focus",
    aantalDeuren : 5,
    bouwJaar : 2019,
    prijs : prijsAuto(this.merk)
}
*/

function prijsAuto(merk) {
    return 18000;
}

let mijnAuto = new Auto("Opel", "Corsa", 4, 2015);
//el.innerHTML = "<p>" + mijnAuto.merk + " " + mijnAuto["model"] + " voor € " + mijnAuto.prijs + "</p>";

let mijnTweedeAuto = new NieuweAuto("BMW", "1 reeks", 5, 2012);
//mijnTweedeAuto.toon();

// for loop for an object, use forEach for an Array
for(let index in window.navigator) {
    //el.innerHTML += "<p>" + index + ": " + window.navigator[index] + "</p>";
}

let familieGadeyne = ['Seija', 'Seppe', 'Senne', 'Silke', 'Luka', 'Ronny'];
for(let index of familieGadeyne) {
    //el.innerHTML += "<p>" + index + ": " + familieGadeyne[index] + "</p>";
}

familieGadeyne.forEach(element => {
    //el.innerHTML += "<p>" + element + "</p>";
});

el.innerHTML = "";
let teller = 10, getal = 10; 
/*
while(teller > 0) {
    el.innerHTML += teller + "maal " + getal + " = " + teller * getal + "<br>";
    teller--;
}
*/

for(let i = 10; i > 0; i--) {
    //el.innerHTML += i + "maal " + getal + " = " + i * getal + "<br>";
}

class House {
    constructor(soort, straat, gemeente) {
        this.soort = soort;
        this.straat = straat;
        this.gemeente = gemeente;
    }
}


let mijnHuis = new House("Villa", "Rozenlaan", "Brecht");
let counter = 0;
for(let index in mijnHuis) {
    if (counter < 10) {
        el.innerHTML += index + " : " + mijnHuis[index] + "<br>"; 
    } else {
        break;
    }
    counter++;
}


let navigator = [];
for(let index in window.navigator) {
    navigator.push(index + " : " + window.navigator[index]);
}

console.log(navigator.sort());

let i = 8;
while(i > 0) {
    el.innerHTML = i + "<br>";
    i--;
}

i = 10;
i /= 2;
console.log(i);

document.querySelector("span").innerText =  document.getElementsByTagName("li").length;
console.log(document.getElementsByClassName("list")[0].innerText);


