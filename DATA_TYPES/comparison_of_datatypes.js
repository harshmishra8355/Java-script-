console.log("2">1);     // JS converts both values to numbers ---> "2"--> 2
console.log("02">1);    // same
console.log(null >0);   // in this case first "null" is converted ---> Number(null)--> 0        ( null = 0 ) ---> 0>0 = false
console.log(null == 0); //      null is not equal to any other value, even 0. therefore output is "false"
console.log(null >= 0); //      null converted to 0 (numeric comparison)

console.log(Number(null)); // 0


// console.log("5" = 5);
console.log("5"==5); // == → automatic type conversion
console.log("5" === 5);     // === → no conversion, types must match


// == → compares after converting types
// === → compares directly without converting



// mportant Note:
// For > / < operators, JS always tries numeric comparison.
// null is 0, undefined is NaN.


console.log("harsh"== "harshm"); // when comparing strings, JavaScript checks each character’s Unicode value (case-sensitive, left to right).
console.log("harsh" == "harsh");    // true
console.log("harsh" === "harsh");   // true
console.log("A" < "a");     // true
console.log("B">"b");       // false ---> check unicode of this

console.log("h".charCodeAt(0));  // This method returns the Unicode value (UTF-16 code) of the character at a specific position in a string.
