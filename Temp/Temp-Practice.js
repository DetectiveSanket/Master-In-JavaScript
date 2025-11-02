

let arr = [1, 2, 3, 4, 5];

for(let key in arr) {
    console.log(`Index ${key} has value ${arr[key]}`);
}

console.log("len is : ", arr.length);

delete arr[2];
console.log("len is ; " , arr.length)

console.log(arr);

console.log(arr[2])