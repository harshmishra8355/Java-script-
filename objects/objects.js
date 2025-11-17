// "Objects" -----> collection of Key Value Pair


let person = {}
console.log(typeof person);     // object

let person2 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
console.log(person2.key1);      // value1


// Add new peoperty:
person2.key4 = "Value4"
console.log(person2.key4);      // Value4
console.log(person2);       // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'Value4' }

// Update :
person2.key4 = "value5";
console.log(person2.key4);      // value5
console.log(person2);       // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value5' }

// delete property:
delete person2.key4;
console.log(person2);       // { key1: 'value1', key2: 'value2', key3: 'value3' }

// Methods in Objects:
// 1. Function:
let person3 = {
    name1: "Harsh",
    age: 24,
    greet: function () {
        console.log("Hello Everybody , I am " + this.name1, "and my age is " + this.age);
    }
}
console.log(person3.name1);     // Harsh
person3.greet()         // Hello Everybody , I am Harsh and my age is 24

// 2. "this" keyword:   this keyword refers to the current object itself.
let person4 = {
    name1: "Harsh Mishra",
    age: 25,
    greet: function () {
        console.log("Hello Everybody , I am " + this.name1, "and my age is " + this.age);
    }
}
console.log(person4.name1);     // Harsh
person4.greet()     // Hello Everybody , I am Harsh Mishra and my age is 25

// Nested Objects:- contain another object inside it
let person5 = {
    name2: "Rakesh Mishra",
    age: 56,
    address: {
        city: "Mumbai",
        pincode: 4000072
    }
}

console.log(person5.address.city);  // Mumbai


// object Array:
let person6 = [
    { name3: "harsh", age: 23 },
    { name4: "Aryan", age: 24 },
    { name5: "Rakesh", age: 56 }
]

console.log(person6[1]);    // { name4: 'Aryan', age: 24 }
console.log(person6[2]);    // { name5: 'Rakesh', age: 56 }
console.log("person6 name ------>",person6[0].name3);   // person6 name ------> harsh  {to access specific value }
console.log("keys of Person6[0] ----->",Object.keys(person6[0]));      // keys of Person6[0] -----> only give keys of person6[0] index [ 'name3', 'age' ]
console.log("values of person6[0] ----->", Object.values(person6[0]));      // values of person6[0] -----> [ 'harsh', 23 ]



// Built in methods:

let person7 = {
    name3: "harsh",
    age: 23,
    city: "Mumbai",
    pincode: 4000072
}
console.log(Object.keys(person7));      // [ 'name3', 'age', 'city', 'pincode' ]
console.log(Object.values(person7));    // [ 'harsh', 23, 'Mumbai', 4000072 ]
console.log(Object.entries(person7));       /*  [ 'name3', 'harsh' ],[ 'age', 23 ],[ 'city', 'Mumbai' ],[ 'pincode', 4000072 ] */


// Symbol :-    represents a unique and immutable (unchangeable) value

let id1 = Symbol("Hello from user 1")
let id2 = Symbol("Hello from user 1")
console.log(id1 === id2);   // false
console.log(typeof id1);    // Symbol

let user = {
    name6: "harsh",
    age: 45
}

let id = Symbol("it's from id")
user[id] = 101;

console.log(user);  // { name6: 'harsh', age: 45, [Symbol(it\'s from id)]: 101 }
console.log(user[id]);
console.log(id === user[id]);

// Symbol gives you “hidden but discoverable” properties

console.log(Object.keys(user));     // [ 'name6', 'age' ] ---> here we wont se this  [Symbol(it\'s from id)]: 101 , because Symbol is private but not fully
for (let key in user) {
    console.log(key);
}
// output-----> name6   age

/*
✅ The loop only prints "name", not the symbol key.
So normal operations and external libraries won’t “accidentally” pick it up.

That’s the main purpose — “soft hiding”, not “true privacy.”
 */




//  Object.freeze():- it is buil in JS method that makes an object completely immutable(we can't make any changes in that)

let person8 = {
    name7: "Harsh Mishra",
    age: 24,
}
Object.freeze(person8);
console.log(person8);   // { name7: 'Harsh Mishra', age: 24 }
console.log(Object.isFrozen(person8));      // true ------> tell's whether this object is freeze or not

// Try to modify 

person8.name7 = "Aryan Dubey";
console.log(person8);   // { name7: 'Harsh Mishra', age: 24 } ------> is still same

person8.city = "Mumbai";
console.log(person8);   // { name7: 'Harsh Mishra', age: 24 } -----> didn't add any thing

delete person8.age;
console.log(person8);   // { name7: 'Harsh Mishra', age: 24 } ------> we can't delete anything


// Object.assign() -----> coply value from one or more source objects into target object (Meges objects together)

let obj1 = {a : 1, b : 3};  // target object    ------> The object that will receive the properties
let obj2 = {c : 2, d : 4};  // source object    ------> One or more objects from which properties will be copied
let obj3 = {obj1,obj2}      
console.log(obj3);      // { obj1: { a: 1, b: 3 }, obj2: { c: 2, d: 4 } }   Puts both objects inside one new object.


let obj4 = Object.assign({},obj1,obj2)
console.log(obj4);      // { a: 1, b: 3, c: 2, d: 4 }       Combines all key-value pairs into one object

// Another way to do this :
 let obj5 = {...obj1,...obj2}
 console.log(obj5);     // { a: 1, b: 3, c: 2, d: 4 } 


 // Object Destructuring :- Destructuring means “breaking down” an object (or array) into smaller variables so you can easily extract values without writing repetitive code.

 // without Destructuring
 let user1 = {
    name8 : "Harsh",
    age : 24
 }

 let name_of_the_student = user1.name8;
 let age = user1.age;

 console.log("Print user1 ---->",name_of_the_student,age);      // Print user1 ----> Harsh 24

// with Destructuring :- dont have to write dot method to access the elements of Objects
let user2 ={
    name9 : "Harsh Mishra",
    age1 : 34
}
let {name9,age1} = user2;   // Destructuring
console.log(name9);
console.log(age1);   

