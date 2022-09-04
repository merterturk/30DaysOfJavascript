const constants = [2.72, 3.14, 9.81, 37, 100]
const countries3 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle6 = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


const [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants;

const [fin,est,sw,den,nor] = countries;


const {width:w1,height:h1,area:a1,perimeter:p1} = rectangle;


for(const {name,scores,skills,age} of users){
    console.log(name,scores,skills,age);
}

for(const {name,scores,skills,age} of users){
   if(skills.length<2){
    console.log(name);
   }
}