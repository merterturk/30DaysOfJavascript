let challange = '30 Days Of JavaScript';
console.log(challange);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substring(0,2));
console.log(challange.substr(0,2));
console.log(challange.substring(3));
console.log(challange.includes('Script'));
console.log(challange.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

console.log(challange.replace('JavaScript','Python'));
console.log(challange.charAt(15));
console.log(challange.charCodeAt(11));
console.log(challange.indexOf('of'));
console.log(challange.lastIndexOf('of'));

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

console.log(challange.trim());
console.log(challange.startsWith('30'));
console.log(challange.endsWith('JavaScript'));
console.log(challange.match(/a/g));
console.log('30 Days of'.concat(' JavaScript'));
console.log(challange.repeat(2));


//Level2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'")

console.log(typeof +'10') // number 
//or
console.log(typeof parseInt('10')) // number

console.log(parseInt(Math.ceil(parseFloat('9.8')))) // 10

console.log("python".match(/on/))
console.log("jargon".match(/on/))

console.log('I hope this course is not full of jargon.'.includes('jargon'));

console.log(Math.floor(Math.random()*101));
console.log(Math.floor(Math.random()*51+50));
console.log(Math.floor(Math.random()*256));
let js8 = 'JavaScript';
console.log(js8.charAt(Math.floor(Math.random()*js8.length)));

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

let because = 'You cannot end a sentence with because because because is a conjunction';

console.log((because.substr(0,30))+because.substr(54))



// Level3
let love2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love2.match(/love/gi).length);
console.log(because.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[@%$&#;!]/g,''))

let earn = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let totalArray = earn.match(/\d+/g);
console.log(totalArray);
let sum2=0;
for(var i=0;i<totalArray.length;i++){
sum2+=parseInt(totalArray[i]);
}
console.log(sum2);




