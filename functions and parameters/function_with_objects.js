

function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(3));

// Sperad Operator in Function  ----> we can pass multiple values in parameter
function calculateCartPrice2(...num2) {
    return num2
}
console.log(calculateCartPrice2(200,340,123,456));      // [ 200, 340, 123, 456 ]

function calculateCartPrice3(val1,val2,...num3) {
    return num3
}
console.log(calculateCartPrice3(200,340,123,456));      // [ 123, 456 ]

// object in function:
let user = {
    user_name : "Harsh Mishra",
    age : 23
}

function greet(anyobject) {
    console.log(`Username is ${anyobject.user_name} and his age is ${anyobject.age}`);
}
greet(user)     // Username is Harsh Mishra and his age is 23


// Array in function
const array01 =  [100,200,300,400,500];
function name_of_the_function(array_value) {
    return array_value[2]
}
console.log(name_of_the_function(array01));        // 300
console.log(name_of_the_function([123,453,567,333,678]));       // 567
