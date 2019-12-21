const woord = "hamerhaai";

const hoofdletters = woord.toUpperCase();
console.log(hoofdletters);

//woord = "andere string"; // Oeps!// TypeError: invalid assignment to const 'woord'
console.log(woord);
woord[0] = 'g';
woord[5] = 'g';
// kan nooit in JS, strings zijn 'immutable'
// geeft geen fout, tenzij "use strict":
// TypeError: Cannot assign to read only property '0' of string
console.log(woord);
console.log(woord.replace(/h/g, "g"));
console.log(woord);









function increment(getallen) {
    if (typeof (getallen) === "number") {
        return ++getallen;
    }
    for (let getal of getallen) {
        getal++;
    }
    for (let i = 0; i < getallen.length; i++) {
        getallen[i]++;
    }
    return getallen;
}

let x = 10;
x = increment(x);
console.log(x);

let tabel = [1, 2, 3];
increment(tabel);
console.log(tabel);