const numbers = [1,2,3,4,5];

const result = numbers
    .filter(n => n % 2 === 1) // filter odd numbers
    .map(n => n * 10) // multiply each by 10
    .reduce((a,b)=>a+b, 5); // sum them all up where 5 is the initial value

console.log(result);