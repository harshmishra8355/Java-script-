let name = "harsh"
console.log(name);  // harsh
console.log(typeof name);   // String
console.log(name[3]);   // s
console.log(name.length);   // 5

// String is Immutable ----> cannot change 
name[0] = "M"
console.log(name);  // harsh 


// toUpperCase() and toLowerCase():-
let a = "hello world"
console.log(a.toUpperCase()); // HARSH

let text = "HELLO WORLD";
console.log(text.toLowerCase());


// trim() ----> Remove WhiteSpaces.
let b = '     hello baby    '
console.log(b.trim());  // remove spcaes from both end
console.log(b.trimEnd()); //    remove only spaces from end
console.log(b.trimStart()); //  remove only spaces from starting

// slice() ------> Exctract part of the string.
let c = 'chaiaurcode';
console.log(c.slice(0,4));  // chai  ---> it include first letter but not last one
console.log(c.slice(0,8));  // chaiaurc


// replace() and replaceAll():-
let d = "I love JS. JS is fun!";
console.log(d.replace("JS","JavaScript"));  // I love JavaScript. JS is fun! ---> this function will only replace first JS in the sentence .
console.log(d.replaceAll("JS","JavaScript"));   // I love JavaScript. JavaScript is fun! ---> this function will replace all JS with JavaScript in the sentence.


// Template Literals (Backticks `):-  string interpolation and multi-line strings.
let name1 = "Harsh";
let last_name = "Mishra"
let age = 23;
let address = "Mumbai";
console.log(`Hello ${name1} your age is ${age} and your address is  ${address}`);        

// concat() ---> join two String
let name2 = "Harsh";
console.log(name2.concat(" Rakesh ",last_name));



// Another way to create String :- 
let country = new String("INDIA,SRILANKA,RUSSIA,USA")
console.log(typeof country);    // object
console.log(country.lastIndexOf("A"));    // find char("A") at which position -----> 4
console.log(country.toLocaleLowerCase());   // india 
// NOTE :- But the original String will not change bcz the original String is in Heap memory 
console.log(country);   // [String: 'INDIA']
console.log(country.charAt(3)); // find string at positioin 3
console.log(country.indexOf("D"));  // tell at which position the give String is at sentence
console.log(country.includes("X")); //  false ----> this function will tell that "X" is present in "INDIA" or not 
console.log(country.split(","));    // [ 'INDIA', 'SRILANKA', 'RUSSIA', 'USA' ] -----> convert to array
