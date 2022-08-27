const person = {} // empty object


const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person2 = {
    firstName: 'Mert',
    lastName: 'Ertürk',
    age: 25,
    country: 'Turkey',
    city: 'Tekirdağ',
    skills: [
      'C#',
      'ASP.NET CORE',
      'HTML',
      'CSS',
      'Javascript'
    ],
    isMarried: false,
    getFullName: function() {
        return `${this.firstName}${this.lastName}`
      },
      'phone number': '+3584545454545'
  }
// accessing values using .
console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.location) // undefined

// value can be accessed using square bracket and key name
console.log(person2['firstName'])
console.log(person2['lastName'])
console.log(person2['age'])
console.log(person2['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])


const person3 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person3.nationality = 'Ethiopian'
person3.country = 'Finland'
person3.title = 'teacher'
person3.skills.push('Meteor')
person3.skills.push('SasS')
person3.isMarried = true

person3.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person3)
console.log(person3.getPersonInfo())

const copyPerson = Object.assign({}, person3)
console.log(copyPerson)

//Object methods


const keys = Object.keys(copyPerson)
console.log(keys) 
const address = Object.keys(copyPerson.skills)
console.log(address) 


const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))

