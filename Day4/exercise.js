let age = prompt('Enter your age');
if(age>=18){
    console.log('You are old enough to drive.');
}
else{
    console.log(`You are left with ${18-age} years to drive.`)
}

let myAge = prompt('Enter your age');
let yourage = 25;

if(myAge>yourage){
    console.log(`I'm ${myAge-yourage} years older than you`)
}
else{
    console.log(`You are ${yourage-myAge} years older than me.`)
}

let a=4;
let b=3;

if(a>b){
    console.log(`a is greater than b`);
}
else{
    console.log('a is less than b');
}

console.log(a>b ? "a is greater than b" : "a is less than b");

let val = prompt('Enter a number');

if(val%2==0){
    console.log(`${val} is even number`)
}
else{
    console.log(`${val} is odd number`)
}
// Level 2 
let grade = prompt('Enter a grade');

if(grade>=80 && grade<=100){
    console.log('A');
}
else if(grade>=70 && grade<=89){
    console.log('B')
}
else if(grade>=60 && grade<=69){
    console.log('C')
}
else if(grade>=50 && grade<=59){
    console.log('D')
}
else if(grade>=0 && grade<=49){
    console.log('F')
}
else{
    console.log('Error');
}
let month = prompt('Enter a month');
if(month=='September' || month=='October' || month=='November'){
    console.log('Autumn')
}
else if(month=='December' || month=='January' || month=='February'){
    console.log('Winter')
}
else if(month=='March' || month=='April' || month=='May'){
    console.log('Spring')
}
else if(month=='June' || month=='July' || month=='August'){
    console.log('Summer')
}
else{
    console.log('Error');
}

let today = prompt('What is the day today?');

if(today.match(/Saturday|Sunday/i)){
    console.log(`${today.toUpperCase()} is a weekend`)
}
else if(today.match(/Monday|Tuesday|Wednesday|Thursday|Friday/i)){
    console.log(`${today.toUpperCase()} is a working day`)
}
else{
    console.log('Error')
}
