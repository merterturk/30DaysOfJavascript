const _text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
const _pattern = /\d+/g;
const _result = _text.match(_pattern);
let sum = 0;
_result.forEach((arr)=>{
    sum = sum + parseInt(arr);
})
console.log(sum);

let isValidVariable = (varName) => {
    let validVar = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(varName.match(validVar));
 }
 console.log(isValidVariable('234helloJS'));