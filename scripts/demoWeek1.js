methoden();

function methoden() {
    let text;
    text = prompt("Geef een text: ");
    alert("charAt: " + text.charAt(1));
    alert("slice: " + text.slice(2,10));
    alert("toUpperCase: " + text.toUpperCase());
    alert("blink: " + text.blink());
    alert("legnth: " + text.length);
    text = text.length < 3;
    alert(text);
    let myCounter = "1";
    myCounter++;
    alert(myCounter);
}

function berekenBMI() {
    let bmi, lengte, gewicht;
    lengte = prompt("Geef je lengte: ");
    gewicht = prompt("Geef je gewicht: ");
    bmi = gewicht/(lengte*lengte);
    alert("Je BMI is: " + bmi);
}

function raadGetal() {
    let getal = Math.floor(Math.random()*100) + 1;
    gevonden = false;
    let naam = prompt("Wat is je naam? ");
    while(!gevonden) {
        let gok = prompt("Doe een gok: ");
        if(gok == getal) {
            alert("Gevonden, proficiat " + naam + "!");
            gevonden = true;
        } else if(gok < getal) {
            alert("Te klein!");
        } else if(gok > getal) {
            alert("Te groot!");
        }
    }
}