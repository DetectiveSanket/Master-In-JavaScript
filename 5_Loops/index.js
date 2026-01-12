//*## For in -> used to interated on object..

const obj = { name: "John", age: 30, city: "New York" };

for(let key in obj) {
    console.log(`${key} : ${obj[key]}`);
    console.log(key , "" , obj[key]);
    // console.log(obj.key)
}

obj.name = "sanket"; // changing the value of name key
console.log(obj.name); // sanket

//*# For...of -> Used to interated on Array...

let arr = [10, 20, 30, 40, 50];

for(let val of arr) {
    console.log(val); // 10, 20, 30, 40, 50
} 

let len = arr.length;
delete arr[2];
console.log(arr); // [ 10, 20, <1 empty item>, 40, 50 ]

arr[2] = delete arr[2];
console.log(arr); // [ 10, 20, true, 40, 50 ]

arr[7] = 70;
console.log(arr); // [ 10, 20, true, 40, 50, <2 empty items>, 70 ]

console.log(arr.length); // 8

//*# ForEach

let forEachArray = [1, 2, 3, 4, 5];

forEachArray.forEach((element , index) => {
    return console.log(`Element at index ${index} is ${element}`);
})

//*# Map
let mapArray = [1, 2, 3, 4, 5];

let newMap = mapArray.map((ele) => {
    return ele * 2;
})

console.log(newMap); // [ 2, 4, 6, 8, 10 ]

