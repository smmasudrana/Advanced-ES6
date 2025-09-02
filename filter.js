const numbers = [1, 5, 6, 2, 29, 7, 3];

const greaterThan10 = numbers.filter(x => x > 10);
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(greaterThan10);
console.log(evenNumbers);