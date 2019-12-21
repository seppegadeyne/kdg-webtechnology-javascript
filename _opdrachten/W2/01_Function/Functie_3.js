function eersteLetters(woorden) {
    let letters = [];
    for (let woord of woorden) {
        letters.push(woord[0]);
    }
    return letters;
}
const  lijst = ["aap", "noot", "mies"];
console.log(lijst);
console.log(eersteLetters(lijst));

console.log(lijst.map( woord => woord[0]));