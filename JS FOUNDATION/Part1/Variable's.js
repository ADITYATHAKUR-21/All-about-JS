//  <----------------- Variable's ---------------->

// string
console.log("This is String");

// Number
console.log(124);

// Boolen
console.log(true);

// Bigint
console.log(6465555565656566);

// Undefine
console.log(undefined);

// Null
console.log(null);

// Array
let name = ["Aditya", "Rohan", "Ankit"];
console.log(name);

// Object
const marks = {
  year : "Bca-1",
  marks: 312
}
console.log(marks);

// Symbol
const mySymbol = Symbol('key');

const obj = {
  [mySymbol] : "Store Key"
}

console.log(obj[mySymbol]);
