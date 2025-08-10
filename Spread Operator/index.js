/* 
    > Spread and Rest Operators

    1. Spread Operator
       - It's spread or expands the values of an iterable (like an array)
       - copy the array , merge array , spread the array ,  (use cases)
       - Used to split up array elements OR object properties
       - Used in function calls/array literals
       - Used to copy arrays/object

    2. Rest Operator
       - It's rest or collects multiple elements and condenses them into a single element
       - Used in function parameters
       - Used to merge multiple parameters into an array
       - Used to destructure arrays/objects
*/

// spread  operator example
  
// > spread the array
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

// > copy the array (shallow copy)
let arr1 = [4, 5, 6];
let arr2 = [...arr1 , 3 , 2 , "sanket"];
let arr3 = [...arr1];
console.log(arr2); // [4, 5, 6, 3, 2]
console.log(arr3); // [4, 5, 6]

// > merge array
let arr4 = [...arr1, ...arr2];
console.log(arr4); // [4, 5, 6, 4, 5, 6, 3, 2]

// > spread the string                                    
let str = "sanket";
console.log(...str); // s a n k e t
let arr5 = [...str]; // stored string in array


console.log(arr5); // ["s", "a", "n", "k", "e", "t"] convert into array

// > spread the object
let obj = {
    name: "sanket",
    age: 21,
    city: "pune",
}

console.log(obj); // name age city
                           
let copy = {...obj};
console.log(copy); // name age city 
copy.name = "Sanket Talekar";
console.log(copy); // name age city sanket singh

let objcopy = {
    ...copy,
    age:344,
    city:"mumbai",
    country:"india",
    you: "you"
}
console.log(objcopy); // name age city sanket singh india

// > function call
let users = ['sanket' , 'sagar' , 'sanjay' ];
function greet(name1,name2,name3) {
   console.log(`Hello ${name1}, ${name2}, ${name3}`); 
}

greet(...users); // Hello sanket, sagar, sanjay


// rest operator example

function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// rest with destructuring
let arr6 = [1 , 3 , 4, 5, 6, 7];
let [a , b , ...rest] = arr6;
console.log(a, b, rest); // 1 3 [4, 5, 6, 7]
console.log(rest);

// rest with object

let obj2 = {
    name: "sanket",
    age: 21,
    city: "pune",
}

