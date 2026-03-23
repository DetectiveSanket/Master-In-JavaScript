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

//---------------------

/* 
    ## what use of 'for of' and 'for in' loop and how they are different from each other.


    > for...of and for...in are both loops in JavaScript, but they are used for different things.

        ## 1. `for...of`

            - Used to loop through __values__ of an iterable.
            
            ### Works with:
                - Arrays
                - Strings
                - Maps
                - Sets
                - NodeLists
                - Other iterables
            
            ### Example:
            
            ```js
                ⁡⁢⁢⁢const arr = [10, 20, 30];
                
                for (const value of arr) {
                    console.log(value);
                }⁡
            ```
            
            ### Output:
            
            ```js
   ⁡⁢⁢⁢             10
                20
                30⁡
            ```
            
            > Here, `value` gets the array elements directly.

            ### String example:
            
            ```js
⁡⁢⁢⁢                const name = "JS";
                
                for (const ch of name) {
                    console.log(ch);
                }⁡
            ```
            
            Output:
            
            ```js
⁡⁢⁢⁢                J
                S⁡
            ```
    ---------------------------------------------------
    ## 2. `for...in`

        - Used to loop through __keys / property names__.
        
        ### Mostly used with:
            - Objects
        
        ### Example:
        
        ```js
⁡⁢⁢⁢            const user = {
            name: "Sanket",
            age: 22,
            city: "Pune"⁡
        };
        
⁡⁢⁢⁢            for (const key in user) {
            console.log(key, user[key]);
            }⁡
        ```
        
        ### Output:
        
        ```js
 ⁡⁢⁢⁢           name Sanket
            age 22
            city Pune⁡
        ```
        
        Here:
        - `key` = property name
        - `user[key]` = property value
----------------------------------------------------

        # When to use

            ## Use `for...of` when:
                - You want array values
                - You want characters from a string
                - You want cleaner looping on iterables
            
            ## Use `for...in` when: 
                - You want object keys
                - You need property names
        
        ---
        
        # Important note
        
        ⁡⁣⁣⁢𝗔𝘃𝗼𝗶𝗱 𝘂𝘀𝗶𝗻𝗴 `𝗳𝗼𝗿...𝗶𝗻` 𝗳𝗼𝗿 𝗮𝗿𝗿𝗮𝘆𝘀 𝗶𝗻 𝗺𝗼𝘀𝘁 𝗰𝗮𝘀𝗲𝘀, 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗶𝘁 𝗴𝗶𝘃𝗲𝘀 𝗶𝗻𝗱𝗲𝘅𝗲𝘀 𝗮𝗻𝗱 𝗰𝗮𝗻 𝗮𝗹𝘀𝗼 𝗶𝗻𝗰𝗹𝘂𝗱𝗲 𝗶𝗻𝗵𝗲𝗿𝗶𝘁𝗲𝗱 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀.⁡

        # Simple rule to remember
            - `for...of` → __of values__
            - `for...in` → __in object keys__

             
*/ 