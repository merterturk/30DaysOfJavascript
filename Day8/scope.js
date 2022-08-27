ad = 'Mert';   // window scope

console.log(window.ad);

//scope.js
c = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
d = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(c, d)
  if (true) {
    console.log(c, d)
  }
}
console.log(c, d) // accessible


//Globa Scope

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible


//Local Scope

let e1 = 'JavaScript'; // is a global scope it will be found anywhere in this file
let f1 = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope2() {
  console.log(e1,f1); // JavaScript 10, accessible
  let value = false;
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(e1, f1, value) // JavaScript 10 true
}
letsLearnScope2();
console.log(e1, f1) // JavaScript 10, accessible



function letsLearnScope3() {
    var gravity = 9.81
    console.log(gravity)
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3

  //var -> function scope      let,const -> block scope


  function letsLearnScope5() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  // console.log(i), Uncaught ReferenceError: i is not defined