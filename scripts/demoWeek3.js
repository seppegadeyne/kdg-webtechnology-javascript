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
el.innerHTML = "<p>" + mijnAuto.merk + " " + mijnAuto["model"] + " voor € " + mijnAuto.prijs + "</p>";


