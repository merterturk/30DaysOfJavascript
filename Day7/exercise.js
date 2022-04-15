const fullName = name => `${name}`;

console.log(fullName('Mert Ertürk'));

const fullName2 = (name,surname) => `${name} ${surname}`;

console.log(fullName2('Mert','Ertürk'))

const addNumbers = (num1,num2)=> num1+num2;

console.log(addNumbers(1,3));

const areaOfRectangle = (length,width)=> length*width;

console.log(areaOfRectangle(5,5));

const perimeterOfRectangle = (length,width)=> 2*(length+width);

console.log(perimeterOfRectangle(3,4));

const volumeOfRectPrism = (length,width,height)=>length*width*height;

console.log(volumeOfRectPrism(3,4,5));

const areaOfCircle1 = r => Math.PI*r*r;

console.log(areaOfCircle1(5));

const circumOfCircle = r=> 2*Math.PI*r;
console.log(circumOfCircle(3));

const density = (mass,volume)=> mass/volume;

console.log(density(15,3));

const findMax = (...args)=>{
 let max = args[0];
 
 for(let i=1;i<args.length;i++){
     if(max<args[i]){
         max=args[i];
     }
 }
 return max;
}

console.log(findMax(0,10,5));
console.log(findMax(0,-10,-2));

const printArray = (...args)=>{
for(let i=0;i<args.length;i++){
    console.log(args[i]);
}
}
printArray(3,4,5);
const date = new Date();
const showDateTime = ()=>{
    console.log(`${date.getDate()}/${date.getMonth()<10 ? `0${date.getMonth()+1}` : date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}
showDateTime();


const swapValue = (x,y)=>{
    let temp = x;
    x = y;
    y=temp;
    console.log(`x=>${x}`,`y=>${y}`)
}

swapValue(3,4);
let newArr = [];
const reverseArray = (arr)=>{
   
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
       console.log(arr[i]);
    }
    console.log(newArr);
}
reverseArray([1,2,3]);

let newstringArr = [];
const capitalizeArray = (arr)=>{
for(let i=0;i<arr.length;i++){
newstringArr.push(arr[i].toUpperCase());
}
console.log(newstringArr);
}

capitalizeArray(["turkey","germany","france"])

const addItem = (item)=>{
item.push("Iceland");
return item;
}

console.log(addItem(["turkey","germany","france"]));
let item = [1,2,3,4,5];
const removeItem = (index)=>{
    item.splice(index-1,1);
    return item;
}

console.log(removeItem(2))


const sumOfNumbers = (number)=>{
    let sum=0;
    for(let i=0;i<=number;i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumOfNumbers(25));


const sumOfOdds = (number)=>{
    let sum=0;
    for(let i=0;i<=number;i++){
        if(i%2==1){
            sum = sum+i;
        }
    }
    return sum;
}
console.log(sumOfOdds(5));

const sumOfEven = (number)=>{
    let sum=0;
    for(let i=0;i<=number;i++){
        if(i%2==0){
            sum = sum+i;
        }
    }
    return sum;
}
console.log(sumOfEven(6));


const evensAndOdds = (number)=>{
    let evenCount = 0;
    let oddCount = 0;

    for(let i=0;i<=number;i++){
        if(i%2===0){
            evenCount++;
        }
        else{
            oddCount++;
        }
    }
  

    console.log(`The number of odds are ${oddCount}`);
    console.log(`The number of evens are ${evenCount}`);
}

evensAndOdds(2);


const sumOfArgument = (...args)=>{
    let sum=0;
    for(let i=0;i<args.length;i++){
    sum+=args[i];
    }
    return sum;
}

console.log(sumOfArgument(1,2,3,4,5));