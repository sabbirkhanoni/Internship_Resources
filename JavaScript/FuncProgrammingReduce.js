const numbers = [1,2,3,4];

const sum = numbers.reduce(
    (total, num) => total + num,
    5 //initial value
);

console.log(sum);