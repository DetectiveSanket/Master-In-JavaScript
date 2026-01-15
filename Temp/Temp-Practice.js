
const sanket = {
    name: "sanket",
    age: 33,
    address:{
        pin:34343,
        me:"ok",
        city_address: {
            main_road: "open",
            single: true
        }
    }   
};


// # Lest start From Spread Operator

// explin me what is spread operator with example
// spread operator is use to spread the value of array or object
let arr = [1,2,3,4,5];
let arr2 = [...arr,6,7,8]; // what we done here we spread the value of arr and add some more value
console.log(arr2); // [1,2,3,4,5,6,7,8]

// so basically spread operator is use to copy the value of array or object and add some more value
// to be more clear:- spread operation actually get or collect all the vlaues from array and oject and spread (meeans copy) them to new array or object.

// so tell me all the use case of spread operator
// 1. copy the array
let arr3 = [...arr];
console.log(arr3); // [1,2,3,4,5]

// so i have confusion between copy the array with the help of spread operator and direct assign the array to new array like let arr3 = arr; so what is the difference between them
// when we direct assign the array to new array like let arr3 = arr; then both arr and arr3 point to same memory location so if we change the value of arr3 then arr will also change. but when we use spread operator to copy the array like let arr3 = [...arr]; then both arr and arr3 point to different memory location so if we change the value of arr3 then arr will not change

// ok got it , new question what is what it called shallow copy and deep copy
// when we use spread operator to copy the array or object then it is called shallow copy because it only copies the first level of the array or object. but when we use JSON.parse(JSON.stringify(obj)) to copy the object then it is called deep copy because it copies all the levels of the object.

// ok all the level means nested object also
// yes nested object also


//perfect , got it... so what i understood is that spread operator is use to copy the array or object and it is called shallow copy because it only copies the first level of the array or object. but when we use JSON.parse(JSON.stringify(obj)) to copy the object then it is called deep copy because it copies all the levels of the object including nested object.

// so give me example of shallow copy and deep copy
let shallowCopy = [...arr]; // shallow copy
let deepCopy = JSON.parse(JSON.stringify(sanket)); // deep copy

// 2. merge the array
let arr4 = [...arr, ...arr2];
console.log(arr4); // [1,2,3,4,5,1,2,3,4,5,6,7,8]

// 3. spread the string
let str = "sanket";
let arr5 = [...str];
console.log(arr5); // ["s","a","n","k","e","t"]
console.log(objcopy); // name age city sanket singh 344 mumbai

// > spread in function call
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
// so basically spread operator is use to spread the value of array or object

// 4. spread the object
let objcopy = {
    ...sanket,
    age:34,
    city:"mumbai",
    country:"india"
}
console.log(objcopy); // name age city sanket singh 344 mumbai

// # End Spread Operator

//-------------------------------------------------------------



