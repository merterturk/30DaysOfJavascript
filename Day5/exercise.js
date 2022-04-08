
  const _arr = [];
  console.log(_arr);
  const arr23 = new Array(8);
  arr2.fill('-');
  console.log(arr23);
  const _arr1 = ['A','B','C',{name:'a'},[1,2,3],4,5,6,7,8];
  console.log(_arr1);
  console.log(_arr1.length);
  console.log(_arr1[0]);
  console.log(_arr1[_arr1.length-1]);
  console.log(_arr1[(_arr1.length-1)/2]);


const mixedDataTypes = [1,'A',{name:'B'},[],null,undefined,[4,5,6]];
console.log(mixedDataTypes.length);

const ITCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(ITCompanies);
console.log(ITCompanies.length);
console.log(ITCompanies[0])
console.log(ITCompanies[ITCompanies.length-1])
console.log(ITCompanies[(ITCompanies.length-1)/2]);
console.log(ITCompanies.toString()) //or ITCompanies.join()
console.log(ITCompanies[0].toUpperCase());
console.log(ITCompanies.join().toUpperCase());
let companies1 = ITCompanies.slice(0,ITCompanies.length-1);
console.log(`${companies1.join()} and ${ITCompanies[ITCompanies.length-1]} are big IT companies.`);

let isExist = ITCompanies.includes('Facebook') ? 'Facebook' : 'company is not found';
console.log(isExist);

for(let i=0;i<ITCompanies.length-1;i++){
    let match = ITCompanies[i].match(/o/g);
    if(match!==null && match.length>1){
        console.log(ITCompanies[i]);
    }
}
console.log(ITCompanies.slice((ITCompanies.length-1)/2,ITCompanies.length/2+1));
console.log(ITCompanies.sort())
console.log(ITCompanies.reverse());

console.log(ITCompanies.slice(0,3));
console.log(ITCompanies.slice(ITCompanies.length-3,ITCompanies.length))

console.log(ITCompanies.shift());
console.log(ITCompanies.pop());

console.log(ITCompanies.splice(0,ITCompanies.length));
console.log(ITCompanies);


//Level2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let replacedText = text.replace(/[.,]/g,'');
const _arr7 = replacedText.split(' ');
console.log(_arr7.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0]!='Meat'){
shoppingCart.unshift('Meat');
}
if(shoppingCart[shoppingCart.length-1]!='Sugar'){
  shoppingCart.push('Sugar')
}
shoppingCart.splice(4,1)
console.log(shoppingCart);

let tea = shoppingCart.indexOf('Tea');
console.log(tea);

shoppingCart[tea] = 'Green Tea';
console.log(shoppingCart);


//Level 3 


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
console.log('min:',ages[0]);
console.log('max',ages[ages.length-1]);
ages.length%2 ? console.log(`median=${(ages[ages.length/2]+ages[ages.length/2+1])/2}`): console.log(`median=${ages[ages.length/2]}`)
let sum =0;
for(let i=0;i<ages.length;i++){
sum+=ages[i];
}
console.log(sum/ages.length);
console.log(ages[ages.length-1]-ages[0]);



