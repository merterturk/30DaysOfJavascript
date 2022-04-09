const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  
  
  for(let i=0;i<10;i++){
    console.log(i);
  }
  let k=0;
  while(k<10){
    console.log(k);
    k++;
  }
  
  do{
  console.log(k);
  k++;
  }
  while(k<10)
  
  for(let i=10;i>0;i--){
    console.log(i);
  }
  let x =10;
  while(x>0){
    console.log(x);
    x--;
  }
  
  do{
  console.log(x);
  x--;
  }
  while(x>0);
  
  for(let y=0;y<20;y++){
    console.log(y);
  }
  
  for(let y=0;y<8;y++){
    console.log('#'.repeat(y));
  }
  
  
  
  for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }
  

  for(let i=0;i<=10;i++){
      if(i==0){
          console.log('i','i^2','i^3');
      }
      console.log(`${i}`,`${i*i}`,`${i*i*i}`);
  }


  for(let i=0;i<=100;i++){
      if(i%2==1){
          console.log(i);
      }
  }
  for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i=0;i<=100;i++){
    if(i==0 || i==1){
        continue;
    }
    let sum=0;
    for(let j=i-1;j>1;j--){
    if(i%j==0){
        sum++;
    }
    }
    if(sum==0){
        console.log(i,'Prime Number');
    }
}

let sum2=0;
for(let i=0;i<=100;i++){
    sum2+=i;
}
console.log(sum2);

let evenSum=0;
let oddSum=0;

for(let i=0;i<=100;i++){
    if(i%2==0){
        evenSum+=i;
    }
    else{
        oddSum+=i;
    }
}
console.log(evenSum);
console.log(oddSum);

const arr = [];
for(let i=0;i<5;i++){
    arr.push(Math.random())
}
console.log(arr);
const _arr= [];
for(let i=0;i<5;i++){
    let randomNumber = Math.random();
    while(_arr.includes(randomNumber)){
        randomNumber = Math.random();
    }
    _arr.push(randomNumber);
}
console.log(_arr);


let strings="01234567890qwertyuıopğüasdfjklşizxcvnbmöç.";
let random = "";
for(let i=0;i<6;i++){
    random+=strings.charAt(Math.random()*strings.length);
}
console.log(random);

random="";
//Level2 
for(let i=0;i<15;i++){
    random+=strings.charAt(Math.random()*strings.length);
}
console.log(random);
random = "";
let hex="#123456789abcdef";

for(let i=0;i<7;i++){
random+=hex.charAt(Math.random()*hex.length);
}
console.log(random)

console.log(`rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`);
let _arr1 = [];
for(let i=0;i<countries.length;i++){
_arr1.push(countries[i].toUpperCase());
}
console.log(_arr1);
let _arr2 = [];
for(let i=0;i<countries.length;i++){
_arr2.push(countries[i].length);
}
console.log(_arr2);

let _arr3 = [];

for(let i=0;i<countries.length;i++){
    let arr = [countries[i],countries[i].substring(0,3).toUpperCase(),countries[i].length]
    _arr3.push(arr);
}
console.log(_arr3);
let _arr4 = [];
for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
_arr4.push(countries[i]);
    }
}
if(_arr4.length>0){
    console.log(_arr4);
}
else{
    console.log('All these countries are without land');
}

let _arr5 = [];
for(let i=0;i<countries.length;i++){
    if(countries[i].endsWith('ia')){
_arr5.push(countries[i]);
    }
}
if(_arr5.length>0){
    console.log(_arr5);
}
else{
    console.log('These are countries ends without ia');
}
let max = 0;
for(let i=0;i<countries.length;i++){
if(max<countries[i].length){
    max = countries[i].length;
}
}
console.log(max);

let _arr6 = [];
for(let i=0;i<countries.length;i++){
    if(countries[i].length==5){
_arr6.push(countries[i]);
    }
}

console.log(_arr6);
let maxLength = webTechs[0];
for(let i=1;i<webTechs.length;i++){
    if(webTechs[i].length>maxLength.length){
        maxLength = webTechs[i];
    }
}

console.log(maxLength);

let _arr7 = [];
for(let i=0;i<webTechs.length;i++){
let arr2 = [webTechs[i],webTechs[i].length];
_arr7.push(arr2);
}

console.log(_arr7);


let acronym = ''
for (let i=0; i<mernStack.length; i++){
    acronym+=mernStack[i][0]
}
console.log(acronym)

let fruits = ['banana', 'orange', 'mango', 'lemon'];

let _arr8 =[];

for(let i=fruits.length-1;i>=0;i--){
    _arr8.push(fruits[i])
}
console.log(_arr8);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i=0;i<fullStack.length;i++){
     for(let j=0;j<fullStack[i].length;j++){
         console.log(fullStack[i][j]);
     }
  }

 let _arr9 = [];

 for(let i=0;i<countries.length;i++){
     _arr9.push(countries[i]);

 }
 console.log(_arr9);

 let sortedCountries = _arr9.sort();

 webTechs.sort();
 mernStack.sort();

 