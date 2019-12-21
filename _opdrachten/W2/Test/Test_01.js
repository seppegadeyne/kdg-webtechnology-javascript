//"use strict"

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let birthday = new Date(1996, 11, 25);
console.log(birthday.toLocaleDateString());
console.log(new Date("2015-03-25T12:00:00Z"));

let person = {  // deze literal notatie heeft de voorkeur!
    name: "Jos",
    age: 45,
    show: function () {
        console.log(this.name + " is " + this.age);
    }
};
person.show();

let person2 = new Object();
person2.name = "Jos";
person2.age = 45;
person2.show = function () {
    console.log(this.name + " is " + this.age);
};
person2.show();

let woord = "hamerhaai";
const hoofdletters = woord.toUpperCase();
console.log(hoofdletters);
// woord[0] = "X";
// woord[1] = "X";
// woord[8] = "X";
// woord.split('').reverse().join('');
// hoofdletters[0] = "Y";
// hoofdletters[10] = "Y";
// hoofdletters[8] = "Y";
console.log("/"+woord+"/");
console.log("/"+hoofdletters+"/");

const reeks = [23, 16, 85, 42];
for (let i = 0; i < reeks.length; i++) {
    reeks[i]++; // verhoog elk getal met 1
}
console.log(reeks);

let s1 = "my string";
s1.toUpperCase();
let t1 = s1;
console.log(t1);

let s2 = new String("my string");
s2.toUpperCase();
let t2 = s2;
console.log(t2);

let woord3 = "papegaaieeieren";
for (let i = 0; i < woord3.length; i++) {
    console.log(woord3[i]);
    woord3[i] = 'x';
}
console.log(woord3);
