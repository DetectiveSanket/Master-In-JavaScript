/* 
    ⁡⁢⁣⁢> 𝗦𝗽𝗿𝗲𝗮𝗱 𝗮𝗻𝗱 𝗥𝗲𝘀𝘁 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿𝘀⁡

   ⁡⁢⁣⁣ 𝟭. 𝗦𝗽𝗿𝗲𝗮𝗱 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡
       - It's spread or expands the values of an iterable (like an array)
       - copy the array , merge array , spread the array ,  (use cases)
       - Used to split up array elements OR object properties
       - Used in function calls/array literals
       - Used to copy arrays/object
*/


// # ⁡⁣⁢⁣𝗟𝗲𝘀𝘁 𝘀𝘁𝗮𝗿𝘁 𝗙𝗿𝗼𝗺 𝗦𝗽𝗿𝗲𝗮𝗱 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡

/*   
    • ⁡⁣⁢⁣𝗲𝘅𝗽𝗹𝗶𝗻 𝗺𝗲 𝘄𝗵𝗮𝘁 𝗶𝘀 𝘀𝗽𝗿𝗲𝗮𝗱 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝘄𝗶𝘁𝗵 𝗲𝘅𝗮𝗺𝗽𝗹𝗲?⁡
    --> spread operator is use to spread the value of array or object. 
        - spread means copy

        for example:
            ⁡⁢⁢⁢let arr1 = [1,2,3];
            let arr2 = [...arr1,4,5,6];
            clg(arr2);⁡ // [1,2,3,4,5,6]

        * so basically spread operator is use to copy the value of array or object and add some more value (if you want its option or choise).

    >< To be more clear:- spread operation actually get or collect all the vlaues from array and oject and spread (means copy) them to new array or object.   
    
    • ⁡⁣⁢⁣𝘀𝗼 𝘁𝗲𝗹𝗹 𝗺𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘂𝘀𝗲 𝗰𝗮𝘀𝗲 𝗼𝗳 𝘀𝗽𝗿𝗲𝗮𝗱 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿?⁡
    --> ⁡⁢⁣⁣1. copy the array
        2. merge the array
        3. spread the string
        4. spread the object
        5. function call⁡

   ⁡⁢⁣⁣ 𝟭) 𝗰𝗼𝗽𝘆 𝘁𝗵𝗲 𝗮𝗿𝗿𝗮𝘆⁡
        ⁡⁢⁢⁢let arr1 = [1,2,3];
        let arr2 = [...arr1];
        clg(arr2);⁡ // [1,2,3] // this is called shallow copy 
        
        * So i have confusion between copy the array with the help of spread operator and direct assign the array to new array like let arr1 = arr2; so what is the difference between them

            --> when we direct assign the array to new array ⁡⁣⁣⁢like let arr1 = arr2; then both arr1 and arr2 point to same memory location⁡ so if we change the value of arr2 then arr1 will also change. > But when we use ⁡⁣⁣⁢spread operator⁡ to copy the array like let arr2 = [...arr1]; then both arr1 and arr2 point to different memory location so if we change the value of arr2 then arr1 will not change
     
      - ⁡⁣⁢⁣𝗻𝗲𝘄 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻 W𝗵𝗮𝘁 𝗶𝘀 𝘀𝗵𝗮𝗹𝗹𝗼𝘄 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗲𝗲𝗽 𝗰𝗼𝗽𝘆?⁡
            --> when we use ⁡⁣⁣⁢spread operator⁡ to copy the array or object then it is called ⁡⁣⁣⁢shallow copy⁡ because it only copies the first level of the array or object. > But when we use ⁡⁣⁣⁢𝗝𝗦𝗢𝗡.𝗽𝗮𝗿𝘀𝗲(𝗝𝗦𝗢𝗡.𝘀𝘁𝗿𝗶𝗻𝗴𝗶𝗳𝘆(𝗼𝗯𝗷))⁡ to copy the object then it is called deep copy because it copies all the levels of the object.

        -• ⁡⁣⁢⁣𝗼𝗸 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗹𝗲𝘃𝗲𝗹 𝗺𝗲𝗮𝗻𝘀 𝗻𝗲𝘀𝘁𝗲𝗱 𝗼𝗯𝗷𝗲𝗰𝘁 𝗮𝗹𝘀𝗼?⁡
            --> yes nested object also

        >> ⁡⁣⁢⁣can you make deep capy with array also?⁡
            --> no deep copy is only for object because array don't have nested structure like object.     

    -• perfect , got it... so what i understood is that spread operator is use to copy the array or object and it is called shallow copy because it only copies the first level of the array or object. > But when we use JSON.parse(JSON.stringify(obj)) to copy the object then it is called deep copy because it copies all the levels of the object including nested object.

    -• so give me example of shallow copy and deep copy?
        let shallowCopy = [...arr1]; // shallow copy
        let deepCopy = JSON.parse(JSON.stringify(obj)); // deep copy
           ->> deepCopy is used in real life application when we want to copy the object and we don't want to change the original object.

    ⁡⁢⁣⁣𝟮) 𝗺𝗲𝗿𝗴𝗲 𝘁𝗵𝗲 𝗮𝗿𝗿𝗮𝘆⁡
        ⁡⁢⁢⁢𝗹𝗲𝘁 𝗮𝗿𝗿𝟭 = [𝟭,𝟮,𝟯];
        𝗹𝗲𝘁 𝗮𝗿𝗿𝟮 = [𝟰,𝟱,𝟲];
        𝗹𝗲𝘁 𝗮𝗿𝗿𝟯 = [...𝗮𝗿𝗿𝟭,...𝗮𝗿𝗿𝟮];
        𝗰𝗹𝗴(𝗮𝗿𝗿𝟯);⁡ // [1,2,3,4,5,6]
        
    ⁡⁢⁣⁣𝟯) 𝘀𝗽𝗿𝗲𝗮𝗱 𝘁𝗵𝗲 𝘀𝘁𝗿𝗶𝗻𝗴⁡
        ⁡⁢⁢⁢𝗹𝗲𝘁 𝘀𝘁𝗿 = "𝘀𝗮𝗻𝗸𝗲𝘁";
        𝗹𝗲𝘁 𝗮𝗿𝗿𝟭 = [...𝘀𝘁𝗿];
        𝗰𝗹𝗴(𝗮𝗿𝗿𝟭)⁡; // ["s","a","n","k","e","t"] // convert into array

   ⁡⁢⁣⁣ 𝟰) 𝘀𝗽𝗿𝗲𝗮𝗱 𝘁𝗵𝗲 𝗼𝗯𝗷𝗲𝗰𝘁


    𝟱) 𝘀𝗽𝗿𝗲𝗮𝗱 𝘁𝗵𝗲 𝗮𝗿𝗿𝗮𝘆⁡
        ⁡⁢⁢⁢𝗹𝗲𝘁 𝗮𝗿𝗿 = [𝟭, 𝟮, 𝟯];
        𝗰𝗼𝗻𝘀𝗼𝗹𝗲.𝗹𝗼𝗴(...𝗮𝗿𝗿);⁡ // 1 2 3

   ⁡⁢⁣⁣ 𝟲) 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗰𝗮𝗹𝗹⁡
       ->> what is function call with spread operator?
            --> function call with spread operator is use to spread the value of array or object as function arguments.

            for example:

                let users = ['sanket' , 'sagar' , 'sanjay' ];
                function greet(name1,name2,name3) {
                   console.log(`Hello ${name1}, ${name2}, ${name3}`); 
                }
                   
                greet(...users); // Hello sanket, sagar, sanjay

            ->> so basically spread operator is use to spread the value of array or object as function arguments.

            <>> Is ther any use case of Spread operator in function call?
                --> yes there is use case of spread operator in function call. it is used to pass array elements as function arguments.

                for example:

                    function sum(a, b, c) {
                        return a + b + c;
                    }

                    let numbers = [1, 2, 3];
                    console.log(sum(...numbers)); // 6
*/

//--------------------- 4 Spread the object ----------------------------

let obj = {
    name: "sanket",
    age: 21,
    city: "pune",
}

console.log(obj); // {name: "sanket", age: 21, city: "pune"}

// let copy the object into new object
let copyObje = { ...obj };
console.log(copyObje); // {name: "sanket", age: 21, city: "pune"}


// this is called shallow copy
copyObje.name = "Sanket Talekar";
console.log(copyObje.name); // Sanket Talekar

console.log(obj.name); // original object remain same


// Let talk about deep copy

let sanket = {
    name: "sanket",
    age: 21,
    address: {
        city: "pune",
        pin: 344,
    }
}

// first doing with shallow copy
let shallowCopy = { ...sanket };

console.log(sanket); // {name: "sanket", age: 21, address: {city: "pune", pin: 344}}
console.log(shallowCopy); // {name: "sanket", age: 21, address: {city: "pune", pin: 344}}

// now changing the nested object value in shallow copy
shallowCopy.address.city = "mumbai";
console.log(shallowCopy.address.city); // mumbai
console.log(sanket.address.city); // original object also changed mumbai

// to solve this issue we use deep copy
let deepCopy = JSON.parse(JSON.stringify(sanket)); // deep copy

deepCopy.address.city = "delhi";
console.log(deepCopy.address.city); // delhi
console.log(sanket.address.city); // original object remain same mumbai


//-------------------------END WITH SPEAD WITH OBJ------------------------------------


