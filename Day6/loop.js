for(let i = 0; i <= 5; i++){
    console.log(i)
  }

  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

  const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
for(let i = 0; i < countries1.length; i++){
  newArr.push(countries1[i].toUpperCase())
}
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15

const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0
for(let i = 0; i < numbers1.length; i++){
  newArr1.push( numbers[i] ** 2)

}

console.log(newArr1)  // [1, 4, 9, 16, 25]


let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

let j = 1
do {
  console.log(j)
  j++
} while (j >= 5)

// 0 1 2 3 4 5


const numbers2 = [1, 2, 3, 4, 5]

for (const num of numbers2) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers2) {
  console.log(num * num)
}

// 1 4 9 16 25

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2


for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
