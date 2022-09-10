// without flag
let pattern = 'love'
let regEx = new RegExp(pattern);


// with flag 
let pattern2 = 'love'
let flag = 'gi'
let regEx2 = new RegExp(pattern2, flag)


//Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.

let regEx3 = /love/gi;


let regEx4= new RegExp('love','gi');

//test():Tests for a match in a string. It returns true or false.

const str = 'I love JavaScript'
const pattern3 = /love/gi
const result = pattern3.test(str)
console.log(result)

/* match():Returns an array containing all of the matches, 
including capturing groups, or null if no match is found. 
If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
*/

const str2 = 'I love JavaScript'
const pattern4 = /love/
const result2 = str2.match(pattern4)
console.log(result2)


const str3 = 'I love JavaScript'
const pattern5 = /love/g
const result3= str3.match(pattern5)
console.log(result3);


// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str4 = 'I love JavaScript'
const pattern6 = /love/g
const result4 = str4.search(pattern6)
console.log(result4);


// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

/*
Result : JavaScript is the most beautiful language that a human begin has ever created.
I recommend python for a first programming language
*/

const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt2.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced);

/*
JavaScript is the most beautiful language that a human begin has ever created.
I recommend JavaScript for a first programming language
*/


const txt3 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt3.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

/*
JavaScript is the most beautiful language that a human begin has ever created.
I recommend JavaScript for a first programming language
*/


const txt5 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt5.replace(/%/g, '')
console.log(matches)  


/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

const pattern7 = '[Aa]pple' // this square bracket means either A or a
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt4.match(pattern7)
console.log(matches2)


const pattern8 = /[Aa]pple/g // this square bracket means either A or a
const txt6 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches3 = txt6.match(pattern8)

console.log(matches3);


const pattern9 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt7 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches4 = txt7.match(pattern9)

console.log(matches4)  

const pattern10 = /\d/g  // d is a special character which means digits
const txt8 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt8.match(pattern10)

console.log(matches5)  // ["1", "2", "2", "0", "2", "0"], this is not what we want


const pattern11 = /\d+/g  // d is a special character which means digits
const txt9 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txt9.match(pattern11)

console.log(matches6)  // ["12", "2020"], this is not what we want


const pattern12 = /\d+/g  // d is a special character which means digits
const txt10 = 'This regular expression example was made in January 12,  2020.'
const matches7 = txt10.match(pattern12)
console.log(matches7)  // ["12", "2020"], this is not what we want


const pattern13 = /[a]./g  // this square bracket means a and . means any character except new line
const txt11 = 'Apple and banana are fruits'
const matches8 = txt11.match(pattern13)

console.log(matches8)  // ["an", "an", "an", "a ", "ar"]

const pattern14 = /[a].+/g  // . any character, + any character one or more times 
const txt12 = 'Apple and banana are fruits'
const matches9 = txt12.match(pattern14)

console.log(matches9)  // ['and banana are fruits']


const pattern15 = /[a].*/g  //. any character, + any character one or more times 
const txt13 = 'Apple and banana are fruits'
const matches10 = txt13.match(pattern15)

console.log(matches10)  // ['and banana are fruits']

const txt14 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern16 = /[Ee]-?mail/g  // ? means optional
const matches11 = txt14.match(pattern16)
console.log(matches11)  // ["e-mail", "email", "Email", "E-mail"]

const txt16 = 'This regular expression example was made in December 6,  2019.'
const pattern18 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches13 = txt16.match(pattern18)
console.log(matches13)  //['This', 'made']

const txt17 = 'This regular expression example was made in December 6,  2019.'
const pattern19 = /\d{4}/g  // a number and exactly four digits
const matches14 = txt17.match(pattern19)
console.log(matches14)  // ['2019']


const txt18 = 'This regular expression example was made in December 6,  2019.'
const pattern20 = /\d{1,4}/g   // 1 to 4
const matches15 = txt18.match(pattern20)
console.log(matches15)  // ['6', '2019']

const txt19 = 'This regular expression example was made in December 6,  2019.'
const pattern21 = /^This/ // ^ means starts with
const matches16 = txt19.match(pattern21)
console.log(matches16)  // ['This']

const txt20 = 'This regular expression example was made in December 6,  2019.'
const pattern22 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches17 = txt20.match(pattern22)
console.log(matches17)  // ["6", "2019"]

let pattern23 = /^[A-Z][a-z]{3,12}$/;
let name = 'Mert';
let result10 = pattern23.test(name)
console.log(result10) // true




