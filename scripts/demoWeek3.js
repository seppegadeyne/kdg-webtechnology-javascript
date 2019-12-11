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

oefeningenWeek3();