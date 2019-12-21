function zoekInitialen(woord) {
    let woorden = woord.trim().split(' ');   // trim() = witruimte voor en achter wég...
    if (woorden.length === 1) return woorden[0];

    let letters = "";
    for (let woord of woorden) {
        if (woord) {                         // om dubbele spaties te negeren
            letters += woord[0] + '.';
        }
    }
    return letters;
}

/*
console.log("/" + zoekInitialen("Jos  Van den Bulcke") + "/"); // ! dubbele spatie
console.log("/" + zoekInitialen("        Jos        ") + "/");
*/

function zoekInitialen2(woord) {
    let woorden = woord.split(' ');
    if (woorden.length === 1) return woord;

    let letters = "";
    for (let woord of woorden) {
        letters += woord[0] + '.';
    }
    return letters;
}

console.log("/" + zoekInitialen2("Jos  Van den Bulcke") + "/");
console.log("/" + zoekInitialen2("   Jos   ") + "/");