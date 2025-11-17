// Primitive Data Types → Stored in Stack
// Primitive values live in the stack → copied individually

let name = "Harsh";        // String
let age = 24;              // Number
let isStudent = true;      // Boolean
let marks;                 // Undefined
let address = null;        // Null
let id = Symbol("123");     // Symbol       this stored in unique address , even if its variable name is same
let bigNum = 12345678901234567890n; // BigInt
console.log(name,age,isStudent,marks,address,id,bigNum);

// JS is Dynamically Typed Languages: you don’t need to declare data types explicitly JavaScript decides the type automatically at runtime
age = 23
console.log("age is ",age);



// Statically Typed Languages:-
// In a statically typed language, you must declare the data type of a variable before using it, and that type cannot change later.
// this is mostly use in C, Java, TypeScript 


let user1 = {
    name : "harsh",
    age : 2,
    id2 : Symbol("101") 
}
console.log(typeof user1.id2);


let user2 = {
    name : "harsh",
    age : 2,
    id2 : Symbol("101")
}

console.log(typeof user2.id2);

console.log(user1 == user2); //  False    each Symbol is stored in a different memory location, which is why they are always unique.


// NOTE:- Each normal Symbol() has its own unique identity and memory address, even if it has the same description string.
