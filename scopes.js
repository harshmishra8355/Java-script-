// SCOPES:- In JavaScript, scope determines the accessibility of variables and functions at different parts of the code.

// GLOBAL SCOPE:- variable can access anywhere from the code
let a = 546;
function hello() {
    console.log(a, "<--------Its accessing from the function");
}
hello()     //546 <--------Its accessing from the function
console.log("It's accessing outside the function------>", a);        // It's accessing outside the function------> 546


// FUNCTION SCOPE:- variable can only accessible only within the function it is declared 
function functionScope() {
    let b = "hello from function";
    console.log(b);
}
functionScope();        // hello from function
// console.log(b,"from outside the function");     // ReferenceError: b is not defined



// BLOCK SCOPE:- only accessible {} within the scope
function blockScope(){
    if (true){
        let d = "hello from block scope";
        console.log(d);
    }
    // console.log(d,"accessing outside the block scope");     // ReferenceError: d is not defined
}
blockScope()        // hello from block scope
