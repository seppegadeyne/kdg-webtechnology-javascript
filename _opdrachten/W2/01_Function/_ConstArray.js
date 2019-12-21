const reeks1 = [23, 16, 85, 42];
for (let i = 0; i < reeks1.length; i++) {
    reeks1[i]++; // verhoog elk getal met 1
}
console.log(reeks1);
//reeks1 = []; // Oeps!
// TypeError: invalid assignment to const 'reeks'

const reeks2 = [23, 16, 85, 42];
for (let item of reeks2) {
    item++;
}
console.log(reeks2);
