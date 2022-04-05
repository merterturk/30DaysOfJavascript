console.log(10=='10') // true
console.log(10==='10') // false

console.log(parseInt(9.8)==10); //false 

let _number5 = 15; //true value
let _true = true; // true 
let _number1=0; //false value
let _string='hi'; //true value
let _string1 = ''; //false value
let _undefined= undefined;  //false value
let _null = null; //false value

//4 > 3 true
//4 >= 3 true
//4 < 3 false
//4 <= 3 false
//4 == 4 true
//4 === 4 true
//4 != 4 false
//4 !== 4 false
//4 != '4' false
//4 == '4' true
//4 === '4'false

console.log('python'.length !== 'jargon'.length);

//4 > 3 && 10 < 12 true
//4 > 3 && 10 > 12 false
//4 > 3 || 10 < 12 true
//4 > 3 || 10 > 12 true
//!(4 > 3) false
//!(4 < 3) true
//!(false) true
//!(4 > 3 && 10 < 12) false
//!(4 > 3 && 10 > 12) true
//!(4 === '4') true

console.log('dragon'.includes('on') && 'python'.includes('on'));

console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getTime()); // milliseconds elapsed from January 1,1970 to now


//Level2

let base = prompt('Enter Base:');
let height = prompt('Enter height:');
console.log(`The area of the triangle is ${(base*height)/2}`);


let a = prompt('Enter side a:');
let b = prompt('Enter side b:');
let c = prompt('Enter side c:');
console.log(`The perimeter of the triangle is ${a+b+c}`);

console.log('testName'.length>7 ? 'your name is long' : 'your name is sort');

let birthYear = prompt('Enter  birth year');
let age = new Date().getFullYear()-birthYear;

console.log(age>18 ? `You are ${age} . You are old enough to drive` : `You are ${age}. You will be allowed to drive after ${18-age}`);

let totalLivedYear = prompt('Enter number of years you live:');

console.log(`You lived ${totalLivedYear*31536000} seconds`)

console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`)
console.log(`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`)
console.log(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`)



// Level 3 


var hours1 = new Date().getHours();
if(hours1<10){
    hours1 = `0${hours1}`
}
console.log(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${hours1}:${new Date().getMinutes()}`)

