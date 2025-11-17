let name = "harsh";
const age = 24;
var city = "mumbai"
console.log(name,age,city);

/*
let ----> changeable value
const -----> fixed value
var -----> old method (avoid using it)
*/

// Why we don’t use var anymore in modern JavaScript

// var is function scoped
if (true){
    var x = 10;
    let y = 20;
}
console.log(x);  // since "x" is inside the {} then also we can access it
// console.log(y);  // ReferenceError: y is not defined -----> in "let" we can't access outside the {}


// 'var 'allow Re-Declaration
var name1 = "harsh";
var name1 = "aryan";
let name2 = "harsh";
// let name2 = "aryan"
console.log(name1);     // aryan 
console.log(name2);     // SyntaxError: Identifier 'name2' has already been declared


// Hoisting Problem with var
console.log(p);     // undefined {t’s confusing because it doesn’t throw an error, but the variable isn’t ready yet}
var p =20;
// console.log(o);     // ReferenceError: Cannot access 'o' before initialization
// let o = 23;
