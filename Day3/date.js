const date = new Date()
console.log(date) 
console.log(date.getFullYear());
console.log(date.getMonth()); //0->Ocak
console.log(date.getDate()); 
console.log(date.getDay()); // 0->Pazar
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds)
console.log(date.getTime())

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const getDate = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${getDate}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56