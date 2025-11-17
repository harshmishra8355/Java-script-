// Array
 const a = ["Harsh","mishra", "Naagraj"]
 console.log(a);

 // object
 let a1 = {
    name: "Harsh",
    age : 24,
 }

 // function 
 const myFunction = function(){
    console.log("hello world");
 }

myFunction();

console.log(typeof a1);

// List of TypeOf :- 

// console.log(typeof 42);              // "number"
// console.log(typeof "Harsh");         // "string"
// console.log(typeof true);            // "boolean"
// console.log(typeof undefined);       // "undefined"
// console.log(typeof null);            // "object" ❌ quirk 
// console.log(typeof Symbol("id"));    // "symbol"
// console.log(typeof 123n);            // "bigint"

// console.log(typeof {a:1});           // "object"
// console.log(typeof [1,2,3]);         // "object"      In JS, everything complex that holds multiple values is an object
// console.log(typeof function(){});    // "function"
// console.log(typeof new Date());      // "object"
