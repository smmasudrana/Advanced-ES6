const numbers = [5, 6, 9, 7, 8, 3, 4]
// let sum = 0;
// for(const num of numbers){
//     sum = sum + num;
// }

const total = numbers.reduce((acc, curr) => acc + curr);
console.log(total);


