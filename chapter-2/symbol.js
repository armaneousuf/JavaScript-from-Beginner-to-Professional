let str1 = 'JavaScript is fun!';
let str2 = 'JavaScript is fun!';

console.log('These two strings are the same:', str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");

console.log('These two symbols are the same:', sym1 === sym2);
console.log(typeof sym1);
console.log(typeof str1);


// let empty = null;                
// let terribleThingToDo = undefined;
// console.log(terribleThingToDo, empty);