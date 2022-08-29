// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  
  console.log(cube(callback, 3))

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))



const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))


/*
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
*/


function callback2(){
    console.log('Hello');
}

setTimeout(callback2,2000); 


function sayHello() {
    console.log('Hello')
  }
  let interval = setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
  clearInterval(interval);
/*
  arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function
  arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function and explicit return
  arr.forEach((element, index, arr) => console.log(index, element, arr))
*/


  let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num))
console.log(sum)


let sum2 = 0;
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => sum += num)
console.log(sum2)


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

countries.forEach(country => console.log(country.toUpperCase()))


/*
map
map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
*/

/*
const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })
  */


  /*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers4 = [1, 2, 3, 4, 5]

const newNumbers4 = numbers4.map(item=>item*2);
console.log(newNumbers4)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase()) 
console.log(namesToUpperCase) // ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']


const countries3 = [
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
    'Kenya',
  ]
  const countriesToUpperCase = countries3.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)
  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

  const countriesFirstThreeLetters = countries3.map(country =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters);


/*
Filter: Filter out items which full fill filtering conditions and return a new array.
*/
//Filter countries containing land
const countriesContainingLand = countries3.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries3.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries3.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)


  const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)


  /*
reduce
reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.
  */

/*
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
*/

const numbers5 = [1, 2, 3, 4, 5]
const sum5 = numbers5.reduce((acc, cur) => acc + cur, 0)

console.log(sum5)


/*
every
every: Check if all the elements are similar in one aspect. It returns boolean
*/
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names3.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

/* 
find
find: Return the first element which satisfies the condition
*/


const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names5.find((name) => name.length > 7)
console.log(result)


const scores2 = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const score = scores2.find((user) => user.score > 80)
  console.log(score)

  /* 
  findIndex
findIndex: Return the position of the first element which satisfies the condition
  */

const names6 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages6 = [24, 22, 25, 32, 35, 18]

const result6 = names6.findIndex((name) => name.length > 7)
console.log(result6) // 0

const age6 = ages6.findIndex((age) => age < 20)
console.log(age) // 5


/*
some
some: Check if some of the elements are similar in one aspect. It returns boolean
*/

const names7 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools7 = [true, true, true, false]

const areSomeTrue = bools7.some((b) =>  b === true)

console.log(areSomeTrue) //true

const areAllStr2 = names7.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false


/*
sort
sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.
*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
console.log(products.sort((a,b) => b.localeCompare(a)))

/*
Sorting Numeric values
As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.
*/

const numbers8 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers8.sort()) //[100, 3.14, 37, 9.81]
numbers8.sort(function (a, b) {
  return a - b
})

console.log(numbers8) // [3.14, 9.81, 37, 100]

numbers8.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]


/*
Sorting Object Arrays
Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.
*/
/*
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  */
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]

