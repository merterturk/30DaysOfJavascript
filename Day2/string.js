const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn.";      //   \ -> string will continue next line 

console.log(paragraph);

const paragraph2 = `My name is Asabeneh Yetayeh. I live in Finland, Helsinki.
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, 
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn.`;

console.log(paragraph2);

// Escape strings
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/


//Template strings

let name2 = 'Mert';

let templateString = `Hi! My name is ${name2}`;
console.log(templateString);

let a = 25;
let b = 24;

let sum = `${a} + ${b} = ${a+b}`;
console.log(sum);

let c = 2
let d = 3
console.log(`${a} is greater than ${c}: ${c > d}`)


//String methods

let name3 = "Mert";
console.log(name3.length); // 4
console.log(name3[0]) // M
console.log(name3[name3.length-1]); // last index -> t
console.log(name3.toUpperCase()) // MERT
console.log(name3.toLowerCase()) // mert


let language = 'JavaScript';
console.log(language.substr(4,6)); // Script
console.log(language.substr(4))   //Script
let country = 'Finland';
console.log(country.substr(3,4)) //land

//  Substring-> starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(language.substring(0,4))     // Java
console.log(language.substring(4,10))    // Script
console.log(language.substring(4))       // Script

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

let name4 = '30 Days Of JavaScript'; 
console.log(name4.split()); //["30 Days Of JavaScript"]
console.log(name4.split('')); // ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(name4.split(' ')); // ['30', 'Days', 'Of', 'JavaScript']


let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let name5='      30 Days Of JavaScript      ';
console.log(name5);
console.log(name5.trim());
console.log(name5.trimStart()) // '30 Days Of JavaScript      '
console.log(name5.trimEnd()) // '      30 Days Of JavaScript'

let name6 = '30 Days Of JavaScript'; 
console.log(name6.includes('Days'))     // true
console.log(name6.includes('days'))     // false - it is case sensitive!
console.log(name6.includes('Script'))   // true
console.log(name6.includes('script'))   // false
console.log(name6.includes('java'))     // false
console.log(name6.includes('Java'))     // true
console.log(name6.includes('Days',4)); //false -> search from beginning of 4.index 
console.log(name6.includes('Days',3)) // true


let name7 = '30 Days of Javascript';
console.log(name7.replace('Javascript','C#')); //30 Days of C#
console.log(name7.replace('a','e')); //30 Deys of Javascript        replace->changing one time 
console.log(name7.replaceAll('a','e')); //30 Deys of Jevescript

console.log(name7.charAt(0)); // 3
console.log(name7.charAt(3)) // D


console.log(name7.charCodeAt(3)); //D ASCII Number -> 68   


// indexOf():Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(name7.indexOf('D'))          // 3
console.log(name7.indexOf('Days'))       // 3
console.log(name7.indexOf('days'))       // -1
console.log(name7.indexOf('a'))          // 4
console.log(name7.indexOf('Javascript')) // 11
console.log(name7.indexOf('script'))     //15
console.log(name7.indexOf('Script'))     // -1

// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

let js1 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(js1.lastIndexOf('love'))       // 67
console.log(js1.lastIndexOf('you'))        // 63
console.log(js1.lastIndexOf('JavaScript')) // 38

let number1 = '30'
console.log(number1.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript


// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
let love = 'Love is the best to in this world'

console.log(love.startsWith('Love'))   // true
console.log(love.startsWith('love'))   // false
console.log(love.startsWith('world'))  // false
console.log(love.startsWith('L'))      //true
console.log(love.startsWith('l'))      //false
console.log(love.startsWith('is',5))   //true
console.log(love.startsWith('is',4))   //false

//endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
console.log(love.endsWith('world'))         // true
console.log(love.endsWith('love'))          // false
console.log(love.endsWith('in the world')) // true
console.log(love.endsWith('d'))      //true
console.log(love.endsWith('D'))      //false
console.log(love.endsWith('is',7))   //true
console.log(love.endsWith('is',6))   //false


//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

let js3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(js3.search('love'))          // 2
console.log(js3.search(/javascript/gi))  // 7
console.log(js3.search('cant'));      //-1

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
console.log(string.match(/love/g));
console.log(string.match(/love/gi));


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

console.log('mert'.repeat(2)); // mertmert

let num2 = '5';
let numint = parseInt(num2);
console.log(numint);
console.log(+num2);

