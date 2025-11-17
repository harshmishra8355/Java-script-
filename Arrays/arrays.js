let  arr1 = [1,"Harsh","Orange",true]
// console.log(arr1);
// console.log(arr1.length);

// // push():- add element at end
// arr1.push("Mishra")
// console.log(arr1);              // [ 1, 'Harsh', 'Orange', true, 'Mishra' ]

// // pop() remove the last elemnt
// arr1.pop()
// console.log(arr1);  // [ 1, 'Harsh', 'Orange', true ]

// // unshift() --> add element at first
// arr1.unshift(24)
// console.log(arr1);      //  24, 1, 'Harsh', 'Orange', true ]

// // pop ----> remove element from last (don't requrie any parameter)
// arr1.pop();
// console.log(arr1);      // [ 24, 1, 'Harsh', 'Orange' ]

// // shift() ----> remove element from first
// arr1.shift()
// console.log(arr1);      // [ 1, 'Harsh', 'Orange' ]

// slice()-----> Copy portion (1,3)---> 1 = included , 3 = not included 
arr1.slice(1,3)
console.log(arr1.slice(1,3));

// splice() ------> remove that specific part index     
arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2);
arr2.splice(2,4)
console.log(arr2);      // [ 1, 2, 7, 8, 9 ]

