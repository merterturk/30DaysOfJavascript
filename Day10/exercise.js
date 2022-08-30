const h = [4, 5, 8, 9]
const j = [3, 4, 5, 7]
const countries2 = ['Finland', 'Sweden', 'Norway','Norway','Sweden'];



let emptySet = new Set();
console.log(emptySet);

let loopSet = new Set();
for(let i=0;i<10;i++){
loopSet.add(i);
}
console.log(loopSet);

loopSet.delete(2);
console.log(loopSet);

loopSet.clear();

let setOfCountries = new Set(countries2);
console.log(setOfCountries);


let mapOfCountries = new Map();

for(let country of countries2){
mapOfCountries.set(country,country.length);
}

const k = [...h,...j];
let union = new Set(k);