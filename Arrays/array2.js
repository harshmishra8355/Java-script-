const marvel_heros = ["thor","IM","CA","HULK"]
const DC_hero = ["superman","Batman","flash"]
// marvel_heros.push(DC_hero)
// console.log(marvel_heros);  // [ 'thor', 'IM', 'CA', 'HULK', [ 'superman', 'Batman', 'flash' ] ]
// console.log(marvel_heros.length);   // 5    -----> it takes "[ 'superman', 'Batman', 'flash' ]" this as a single data

// Explanation:
// When we use .push(), it adds the entire array [ 'superman', 'Batman', 'flash' ]
// as a single element to marvel_heros.
// So, the length becomes 5 because the DC_hero array is treated as one single item.


// merge two arrays ----> .concat()
const allHeros = marvel_heros.concat(DC_hero)
console.log(allHeros);  // [ 'thor', 'IM', 'CA', 'HULK', 'superman', 'Batman', 'flash' ]

const array3 = [1,2,3,[4,5,6,[23,34,45]],8,9]
const array4 = array3.flat(Infinity)
console.log(array4);    //  [1, 2, 3, 4,5,6,23,34,45,8,9 ]