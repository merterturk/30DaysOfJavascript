/*
Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.
*/


const companies = new Set()
console.log(companies);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages2 = new Set(languages2)
  
  for (const language of setOfLanguages2) {
    console.log(language)
  }


  const companies2 = new Set() // creating an empty set
console.log(companies2.size) // 0

companies2.add('Google') // add element to the set
companies2.add('Facebook')
companies2.add('Amazon')
companies2.add('Oracle')
companies2.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

const companies3 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies3) {
  setOfCompanies.add(company)
}


console.log(setOfCompanies.delete('Google'))
console.log(setOfCompanies.size) // 4 elements left in the set


console.log(setOfCompanies.has('Apple')) // false
console.log(setOfCompanies.has('Facebook')) // true


setOfCompanies.clear()
console.log(setOfCompanies)


const languages3 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages3)
  console.log("langset",langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    console.log("L:",l);
    const filteredLang = languages3.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)


const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)


let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]
let f = [...d, ...e]

let D = new Set(d)
let E = new Set(e)
let F = new Set(f)

console.log(F)


let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
console.log('c',c);
let C = new Set(c)

console.log(C)


const map = new Map()
console.log(map);

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map2 = new Map(countries)
  console.log(map2)
  console.log(map2.size)


const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
console.log(countriesMap.get('Finland'))



for (const country of countriesMap) {
    console.log(country)
  }
  for (const [country, city] of countriesMap){
    console.log(country, city)
   }