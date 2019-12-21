let gemeente;
let postcode;

function vulIn() {
    gemeente = prompt("Geef de gemeente: ");
    postcode = prompt("Geef de postcode: ");
}

function toon() {
    console.log("Gemeente: " + gemeente);
    console.log("Postcode: " + postcode);
}

vulIn();
toon();