// "e" ----> The e notation helps represent very big or very small numbers without writing too many zeros.
let a = 123e1   // 1230
let c = 123e2   // 12300 
console.log(a);
console.log(c);
let b = 123e-5; // 0.00123 
console.log(b);


// Integer Precision :- JavaScript can accurately represent integers only up to 15 digits.
let d = 999999999999999;
console.log(d ,"----> total 15 digits");
let e = 9999999999999999;
console.log(e,"------> total 16 digits of '9' ");

// What’s happening:
// a = 999999999999999 ✅ → has 15 digits, so JavaScript can store it accurately.
// b = 9999999999999999 ❌ → has 16 digits, so JavaScript can’t store it exactly — it rounds it to the nearest possible value that it can represent.

let d1 = 9999999999999999;  // total 16 digits of 9
// now comparing 'd1' and 'e' 
console.log(d1 == e);   // true



const score = new Number(12345.3456345)
console.log(score);     // [Number: 12345.3456345]
console.log(score.toString().length);   //   13 
console.log(score.toFixed(4));  //  12345.3456 ----> after decimal it will print only 4 numbers
console.log(score.toPrecision(4));  //  1.235e+4    ------> "1.235e+4" = 1.235 × 10⁴ = 12350 (same value, just different format).   e+4 to tell it’s ×10⁴ in size.

const numbers = 1000000000;
console.log(numbers.toLocaleString('en-IN'));      // 1,00,00,00,000 ----> It automatically adds commas as per the Indian style (thousands, lakhs, crores).


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("\n");

console.log(Math.E);    // 2.718281828459045 ----->     The exp is a mathematical constant having an approximate value equal to 2.718
console.log(Math.PI);   // 3.141592653589793 ------> return PI value
console.log(Math.abs(-3.234));   //  3.234        It always gives a positive number
console.log(Math.round(3.93456));   // 4 ----> The number is passed as a parameter to its nearest integer.
console.log(Math.ceil(5.3));        // 6 -----> Passed as a parameter to its nearest integer in an Upward direction of Rounding.
console.log(Math.floor(Math.random()*10)+1);    // random whole number between 1 and 10.


const min = 50;
const max = 100;
console.log(Math.floor(Math.random()*(max - min + 1))+ min);

/*
Math.abs(x) → Gives positive (absolute) value

Math.round(x) → Rounds to nearest whole number

Math.floor(x) → Rounds down to nearest integer

Math.ceil(x) → Rounds up to nearest integer

Math.trunc(x) → Removes decimal part, keeps integer

Math.pow(x, y) → x raised to power y

Math.sqrt(x) → Square root of a number

Math.cbrt(x) → Cube root of a number

Math.max(a, b, ...) → Returns largest number

Math.min(a, b, ...) → Returns smallest number

Math.random() → Gives random number between 0 and 1

Math.sign(x) → Shows if number is positive, negative, or zero

Math.exp(x) → e raised to power x

Math.log(x) → Natural logarithm (base e)

Math.log10(x) → Logarithm base 10

Math.log2(x) → Logarithm base 2

Math.sin(x) → Sine (in radians)

Math.cos(x) → Cosine (in radians)

Math.tan(x) → Tangent (in radians)

Math.PI → Constant value of π (3.14159)

Math.E → Euler’s constant (2.718)

Math.hypot(a, b) → Square root of (a² + b²)
*/
  
       