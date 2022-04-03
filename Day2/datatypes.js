let numOne = 3;
let numTwo = 3;
console.log(numOne==numTwo); //true

let js = 'Javascript';
let py = 'Python'
let js2= 'Javascript';

console.log(py); // Python
console.log(js==py); // false
console.log(js==js2);
py[0] = 'A'; 
console.log(py); // Python

let nums = [1, 2, 3]; 

console.log(nums); //1,2,3

nums[1] = 15;
console.log(nums); //1,15,3

let numbers = [1, 15, 3];
console.log(nums==numbers) // false

let user1 = {
    name:'Mert',
    age:25
}
let user2 = {
    name:'Mert',
    age:25
}
console.log(user1==user2); // false

let nums1 = [1,4,6];

let nums2 = nums1;

console.log(nums1 == nums2) //true 

