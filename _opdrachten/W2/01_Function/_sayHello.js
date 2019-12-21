function sayHello() {
    console.log("Hello!");
}
sayHello();
sayHello;
console.log(sayHello);

const square = number => number * number;
console.log(square(3));

let names = [
    {name: "Jim Hoskins", id: 1},
    {name: "Guil Hernandez", id: 2},
    {name: "Ben Jakuben", id:3}
];
names.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
});
console.log(names);