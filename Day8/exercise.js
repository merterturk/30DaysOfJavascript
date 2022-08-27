let dog = {};
console.log(dog);

dog = {
    name:'test',
    color:'black',
    legs:4,
    age:2,
    bark: function(){
        return `woof woof!`;
    },
    breed:true,
    getDogInfo:function(){
        console.log(`${this.name} ${this.color} ${this.legs} ${this.age} ${this.bark()} ${this.breed}`)
    }
}
console.log(dog);
console.log(dog.bark());
dog.getDogInfo();


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users);

let user = Object.entries(users);
let arr = [];
  for(let i=0;i<user.length;i++){
     arr.push({name:user[i][0],number:user[i][1].skills.length});
  }
let max = arr[0].number;

for(let i=1;i<arr.length;i++){
    if(arr[i].number>max){
        max = `${arr[i].number} ${arr[i].name}`;
    }
}
console.log(max);

let loggedInUsers = 0;
let points50UpUsers = 0;
for(let i=0;i<user.length;i++){
    if(user[i][1].isLoggedIn){
      loggedInUsers++;
    }
    if(user[i][1].points>=50){
      points50UpUsers++;
    }
}
console.log(loggedInUsers,points50UpUsers);

const MERNStack = ["MongoDB","Express","React","Node"];
const MernStackUsers = [];


for(let i=0;i<user.length;i++){
  let count = 0;
  for(let j=0;j<user[i][1].skills.length;j++){
    if(MERNStack.indexOf(user[i][1].skills[j])!=-1){
      count++;
    }
   
  }
  if(count==4){
    MernStackUsers.push(user[i][1]);
  }
}
console.log(MernStackUsers);


const usersCopy = Object.assign({},users);
usersCopy["Mert"] = {};
console.log(usersCopy);


const _keys = Object.keys(users);
console.log(_keys);

const _values = Object.values(users);
console.log(_values);

console.log(countries);

const country = countries[0];

console.log(country.name,country.capital,country.population,country.languages);