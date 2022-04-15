/*
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function

*/ 


//Function Declaration

//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses

  function SayHello(){
      console.log('hello')
  }
  SayHello();

  // function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  addTwoNumbers();

// Function returning value
  function printFullName (){
    let firstName = 'Mert'
    let lastName = 'Ertürk'
    let fullName = `${firstName} ${lastName}`
    return fullName
}
console.log(printFullName())

function addTwoNumbers() {
    let numOne = 15
    let numTwo = 18
    return numOne+numTwo
}
console.log(addTwoNumbers())

// Function with a parameter

function multiply(num1,num2){
    return num1*num2
}
console.log(multiply(2,5))


function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));

  const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
  }
console.log(areaOfCircle(10))


const addition = (num1,num2)=>{
    return num1+num2;
}
console.log(addition(2,5));


//Function with unlimited number of parameters

function sumAllNums() {
    console.log(arguments)
   }
   
   sumAllNums(1,2,3,4)


   function sumAllNums() {
    let sum = 0
    for (let i = 0; i<arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


  const sumAllNums1 = (...args) => {
    console.log(args)
   }
   
 sumAllNums1(1, 2, 3, 4)


 const sumAllNums2 = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNums2(1, 2, 3, 4)) // 10
  console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173



  //Anonymous Function

  const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

  anonymousFun();


//Expression Function
  const square = function(n) {
    return n * n
  }
  
  console.log(square(2)); // -> 4


  //Self Invoking Functions

  (function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)


  //Arrow Function

  const square1 = n => {
    return n * n
  }
  
  console.log(square1(2))  // -> 4


  // if we have only one line in the code block, it can be written as follows, explicit return
const square2 = n => n * n  // -> 4


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


  const printFullName2 = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName2('Mert', 'Ertürk'))

  const printFullName1 = (firstName, lastName) => `${firstName} ${lastName}`
  console.log(printFullName1('Mert','Ertürk'))

  //Function with default parameters

  function greetings(name = 'Mert') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Test'))


  const greetings1 = (name = 'Mert') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greetings1())
  console.log(greetings1('Test'))
