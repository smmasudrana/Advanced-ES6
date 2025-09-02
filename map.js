// const numbers = [5, 4, 6, 5, 8]
// const doubled = []
// for(num of numbers){
//     const result = num * 2;
//     doubled.push(result);
// }

// console.log(doubled);

//with map----------------------
const numbers = [5, 4, 6, 5, 8]

const doubledIt = x => x * 2;
const doubled = numbers.map(doubledIt);
// const doubled = numbers.map(x => x * 2);     //same work 
const fiveTimes = numbers.map(num => num * 5);
const squared = numbers.map(num => num * num);


console.log(doubled);
console.log(fiveTimes);
console.log(squared);


//map with string--------------
const friends = ['zaved', 'pavel', 'nobel', 'kodbel']
const nameLengths = friends.map(name => name.length);

const firstLetters = friends.map(name => name[0].toLocaleUpperCase());

console.log(nameLengths);
console.log(firstLetters);


//multi line map
const marks = [5, 4, 6, 5, 8]
const result = marks.map((num, index) => {
    const lastResult= (num * index);
    return lastResult;
})
console.log(result);