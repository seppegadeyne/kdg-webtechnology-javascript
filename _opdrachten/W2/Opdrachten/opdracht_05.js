let eerste = 10; //prompt("Geef het eerste getal:");
let tweede = 20; //prompt("Geef het tweede getal:");

function MyObject(x, y) {
    this.x = x;
    this.y = y;
}

function keerom(myObject) {
    let temp = myObject.x;
    myObject.x = myObject.y;
    myObject.y = temp;
}

let object = new MyObject(eerste, tweede);

keerom(object);
let first = object.x;
let second = object.y;

console.log("De getallen in omgekeerde volgorde: " + object.x + " en " + second);
 