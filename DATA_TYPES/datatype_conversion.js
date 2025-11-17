let age = "33";
console.log(typeof age);  // string

// convert string to number

let age1 = "45abd";
let valueInNumber = Number(age1)   // converting string to number 
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number


let isloggedIn = 1;
let booeanIsLoggedIn = Boolean(isloggedIn)
console.log(booeanIsLoggedIn);


let emptyboolean = "";
let booleanIsLoggedIn = Boolean(emptyboolean)
console.log(booleanIsLoggedIn); // Empty string "" is considered false, not true

// Falsy values in JavaScript:
// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN

// Everything else is truthy.


let somenumber = 33;
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);


// Implicit Conversion :- JS automatically converts data type.
console.log("45" + 34); // 4534
console.log(Number("45")+ 34); // "45"---> 45 ---> 45+34 = 79       "45" is converted into a number before addition.
console.log(+"45"+34); // 79        The + before a string tries to convert it to a number

console.log("1"+2+2);   // "1" + 2 + 2 --> "1" + 2 → "12" --> "12" + 2 → "122" --> "122"
console.log(1+2+"2");   // 1 + 2 + "2" -->  1 + 2 → 3	-->  3 + "2" = "32"	-->  "32"
console.log("1"+3*4);   //  "1" + 3 * 4 → "1" + 12 → "112"       --->      Multiplication happens before addition — even if strings are involved.


console.log("45" - 34); // 11 ----> If the operator is not +, JS converts strings to numbers automatically.
console.log("2"*"34"); // 68 ----> If the operator is not +, JS converts strings to numbers automatically.


console.log(false + 5);  // 5 ---> 0+5      (false = 0)
console.log(true + 32); // 33 ----> 1 + 32  (true = 1)


console.log(Number(undefined));  // Nan
console.log(Number(null));      // 0



// Explicit Conversion (Manual) -----> control how the conversion happens using functions.

let a = "10"
let b = Number(a);
console.log(b);     // 10
console.log(typeof b);    // number

let c = "";
let d = Number(c);
console.log(d); // 0
console.log(typeof d);  // number


let e = true;
let f = Number(e);
console.log(f);     // 1
console.log(typeof f);      // Number

let g = "abc"
let h = Number(g);
console.log(h);     // NaN
console.log(typeof h);  // number


let i = "15px";
let j = parseInt(i)     // praseInt are used for extracting numbers (integrs) from string.
console.log(j); // 15
console.log(typeof j); // number

console.log(parseInt("45abs")+34);      // 79 ---->      praseInt remove number from string then add with 34

let k = "1.3abdc";
let l = parseFloat(k);  // prasefloat are used for extracting numbers (decimal) from string.
console.log(l);     // 1.3
console.log(typeof l);      // number


// Convert to String
let m = 123;
let n = true;
let o = null;

let p = String(m);  // "123"
let q = String(n);  // "true"
let r = String(0);  // "0"

console.log(p);
console.log(q);
console.log(r);

console.log(typeof p,q,r);



// Prefix and Postfix:-

let a1 = 12;
let b1 = 23;
let c1 = a1 + b1;
console.log(c1++); // postfix ---- > 35
console.log(c1);    // 36


let a2 = 1;
let b2 = 2;
let c2 = a2 + b2;
console.log(++c2);  // 4 ---> prefix