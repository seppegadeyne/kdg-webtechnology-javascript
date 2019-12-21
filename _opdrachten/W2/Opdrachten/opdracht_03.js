var getal = 10;
var globaal = 10;

function doeIets() {
    getal = 1000;
    var globaal = 1000;
}

doeIets();
console.log("De waarde van getal is " + getal + " en die van globaal is " + globaal);

function varDemo() {
    var x = 1;
    if (x === 1) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

varDemo();
