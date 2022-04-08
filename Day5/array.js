// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// syntax
// This the most recommended way to create an empty list
const arr2 = []
console.log(arr2)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

const arr3 = [
    'Mert',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers1.length)  // => to know the size of the array, which is 6
console.log(numbers1)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0])      //  -> 0
console.log(numbers1[5])      //  -> 100

let lastIndex1= numbers.length - 1;
console.log(numbers[lastIndex1]) // -> 100

const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20

console.log(numbers2) // [10, 20, 3, 4, 5]

// Array Methods

const arr4 = Array() // creates an an empty array
console.log(arr4)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// Fill
const arr5 = Array() // creates an an empty array
console.log(arr5)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

//Concat : To concatenate two arrays.
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//Length :To know the size of the array
const numbers6 = [1, 2, 3, 4, 5]
console.log(numbers6.length) // -> 5 is the size of the array

//IndexOf : To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbers7 = [1, 2, 3, 4, 5]

console.log(numbers7.indexOf(5)) // -> 4
console.log(numbers7.indexOf(0)) // -> -1
console.log(numbers7.indexOf(1)) // -> 0
console.log(numbers7.indexOf(6)) // -> -1

// let us check if a banana exist in the array

const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits2.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

//lastIndexOf:It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const numbers3 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers3.lastIndexOf(2)) // 7
console.log(numbers3.lastIndexOf(0)) // -1
console.log(numbers3.lastIndexOf(1)) //  6
console.log(numbers3.lastIndexOf(4)) //  3
console.log(numbers3.lastIndexOf(6)) // -1

//includes : To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbers4 = [1, 2, 3, 4, 5]

console.log(numbers4.includes(5)) // true
console.log(numbers4.includes(0)) // false
console.log(numbers4.includes(1)) // true
console.log(numbers4.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false


const numbers5 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers5)) // true

const number = 100
console.log(Array.isArray(number)) // false

const numbers8= [1, 2, 3, 4, 5]
console.log(numbers8.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9.join()) // 1,2,3,4,5

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const numbers10 = [1,2,3,4,5]

  console.log(numbers10.slice()) // -> it copies all  item
  console.log(numbers10.slice(0)) // -> it copies all  item
  console.log(numbers10.slice(0, numbers.length)) // it copies all  item
  console.log(numbers10.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

  //Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

  const numbers11 = [1, 2, 3, 4, 5]

  console.log(numbers11.splice())  // [] 
  console.log(numbers11);     
  const numbers12 = [1, 2, 3, 4, 5]
  console.log(numbers12.splice(0,1))    // 1 
  console.log(numbers12);   //[2,3,4,5]    
  const numbers13 = [1, 2, 3, 4, 5, 6];
  console.log(numbers13.splice(3, 3, 7, 8, 9))  // -> [1,2,3,7,8,9]

  console.log(numbers13);



//Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arr1  = ['item1', 'item2','item3']
arr1.push('new item')
console.log(arr1)
// ['item1', 'item2','item3','new item']

arr1.pop(); //[item1,item2,item3]
console.log(arr1);

arr1.shift(); // remove one item from the beginning

console.log(arr1);

arr1.unshift(0) // -> add one item from the beginning

console.log(arr1);

arr1.reverse(); // reverse array order for example 1,2,3,4,5 -> 5,4,3,2,1

//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const _names = ["Object","Array","Let","Var"]; 
_names.sort(); //Array Let Object Var

console.log(_names);

