const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products2 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const products2Test = [
    { product: 'banana', price: 3,test:25 },
    { product: 'mango', price: 6,test:36 },
    { product: 'potato', price: ' ',test:48 },
    { product: 'avocado', price: 8,test:29},
    { product: 'coffee', price: 10,test:23},
    { product: 'tea', price: '',test:33}
  ]

countries2.forEach(country => console.log(country));
names2.forEach((name2)=>{
    console.log(name2);
})

const upperCountries = countries2.map(country => country.toUpperCase())
console.log(upperCountries);

const CountriesLength = countries2.map(country => country.length);
console.log(CountriesLength);

const squareNumbers = numbers9.map(x=> x*x);
console.log(squareNumbers);

const upperNames = names2.map(name => name.toUpperCase());
console.log(upperNames);

const productsPrice = products2.map(x=>x.price);
console.log(productsPrice);


const productsPriceAndTest = products2Test.map((x)=>{
    return {
        priceTest : x.price,
        Test : x.test
    }
});
console.log(productsPriceAndTest);

const filterCountiesContainLand = countries2.filter(x=>x.toLowerCase().includes("land"));
console.log(filterCountiesContainLand);

const filterCountiesHaveSixCharacter = countries2.filter(x=>x.length==6);
console.log(filterCountiesHaveSixCharacter);

const filterCountiesHaveMoreThanSixCharacter = countries2.filter(x=>x.length>=6);
console.log(filterCountiesHaveMoreThanSixCharacter);

const filterCountriesStartWithECharacter = countries2.filter(x=>x.startsWith('E'));
console.log(filterCountriesStartWithECharacter);

const prices = products2.filter(x=>{
    return typeof x.price != 'string';
})
console.log(prices);


const getStringLists = (arr) => {
return arr.filter(x=> typeof x=='string');
}

let arrTest = [1,2,3,4,9,25];

const sumOfArray = arrTest.reduce((acc,cur)=> acc+cur,0);
console.log(sumOfArray);

const CheckNamesLength = names2.some(x=>x.length>7);
console.log(CheckNamesLength);

const CheckCountries = countries2.every(x=>x.toLowerCase().includes('land'));
console.log(CheckCountries);

const FindSixLettersCountries = countries2.find(x=>x.length==6);
console.log(FindSixLettersCountries);

const FindIndexSixLettersCountries = countries2.findIndex(x=>x.length==6);
console.log(FindIndexSixLettersCountries);

const FindNorwayInCountries = countries2.findIndex(x=>x=="Norway");
console.log(FindNorwayInCountries);

const FindRussiaInCountries = countries2.findIndex(x=>x=="Russia");
console.log(FindRussiaInCountries);


const TotalPrices = products2.filter(x=> typeof x.price != 'string').reduce((acc,current)=>acc+current.price,0);
console.log(TotalPrices);

