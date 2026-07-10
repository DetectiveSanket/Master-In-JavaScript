
/*
        ⁡⁢⁢⁢let arr1 = [1,2,3];
        let arr2 = [...arr1];
        clg(arr2);⁡ // [1,2,3] // this is called shallow copy 
        
        * So i have confusion between copy the array with the help of spread operator and direct assign the array to new array like let arr1 = arr2; so what is the difference between them

            --> when we direct assign the array to new array ⁡⁣⁣⁢like let arr1 = arr2; then both arr1 and arr2 point to same memory location⁡ so if we change the value of arr2 then arr1 will also change. 

            >>> But when we use ⁡⁣⁣⁢spread operator⁡ to copy the array like let arr2 = [...arr1]; then both arr1 and arr2 point to different memory location so if we change the value of arr2 then arr1 will not change. This is called shallow copy because it only copies the first level of the array.
     
    ? ⁡⁣⁢⁣𝗻𝗲𝘄 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻 W𝗵𝗮𝘁 𝗶𝘀 𝘀𝗵𝗮𝗹𝗹𝗼𝘄 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗲𝗲𝗽 𝗰𝗼𝗽𝘆 ?⁡
            --> when we use ⁡⁣⁣⁢spread operator⁡ to copy the array or object then it is called ⁡⁣⁣⁢shallow copy⁡ because it only copies the first level of the array or object. > But when we use ⁡⁣⁣⁢𝗝𝗦𝗢𝗡.𝗽𝗮𝗿𝘀𝗲(𝗝𝗦𝗢𝗡.𝘀𝘁𝗿𝗶𝗻𝗴𝗶𝗳𝘆(𝗼𝗯𝗷))⁡ to copy the object then it is called deep copy because it copies all the levels of the object.

    ? ⁡⁣⁢⁣⁡⁣⁢⁣𝗼𝗸 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗹𝗲𝘃𝗲𝗹 𝗺𝗲𝗮𝗻𝘀 𝗻𝗲𝘀𝘁𝗲𝗱 𝗼𝗯𝗷𝗲𝗰𝘁 𝗮𝗹𝘀𝗼?⁡
    --> yes nested object also

        >> ⁡⁣⁢⁣can you make deep capy with array also?⁡
            --> no deep copy is only for object because array don't have nested structure like object.     

    -• perfect , got it... so what i understood is that spread operator is use to copy the array or object and it is called shallow copy because it only copies the first level of the array or object. > But when we use JSON.parse(JSON.stringify(obj)) to copy the object then it is called deep copy because it copies all the levels of the object including nested object.

    -• so give me example of shallow copy and deep copy?
        let shallowCopy = [...arr1]; // shallow copy
        let deepCopy = JSON.parse(JSON.stringify(obj)); // deep copy
           ->> deepCopy is used in real life application when we want to copy the object and we don't want to change the original object.      

*/ 
   //! --------------------------------------------------------------------------------

   // **Deep copy:** 

/*
   ⁡⁢⁣⁣ 𝗮) 𝗦𝗵𝗮𝗹𝗹𝗼𝘄 𝗖𝗼𝗽𝘆: ⁡
        * A 𝘀͟𝗵͟𝗮͟𝗹͟𝗹͟𝗼͟𝘄 𝗰͟𝗼͟𝗽͟𝘆 creates a 𝙣𝙚𝙬 𝙘𝙤𝙥𝙮 of object or array, but nested objects or arrays still share the same references as the original. So, changes to nested data in one will also affect the other.

        - In Simple word, ⁡⁣⁣⁢Shallow copy means copying the top-level properties of an object or array, but nested objects or arrays are not copied and still reference the same memory location.⁡

        - It is best to copy the primitive data types like string, number, boolean etc. because they are immutable and they are copied by value. But 𝘄͟𝗵͟𝗲͟𝗻 𝘄͟𝗲 𝗰͟𝗼͟𝗽͟𝘆 𝘁͟𝗵͟𝗲 𝗿͟𝗲͟𝗳͟𝗲͟𝗿͟𝗲͟𝗻͟𝗰͟𝗲 𝗱͟𝗮͟𝘁͟𝗮 𝘁͟𝘆͟𝗽͟𝗲͟𝘀 𝗹͟𝗶͟𝗸͟𝗲 𝗼͟𝗯͟𝗷͟𝗲͟𝗰͟𝘁 𝗮͟𝗻͟𝗱 𝗮͟𝗿͟𝗿͟𝗮͟𝘆 𝘁͟𝗵͟𝗲͟𝗻 𝗶͟𝘁 𝗶͟𝘀 𝗰͟𝗮͟𝗹͟𝗹͟𝗲͟𝗱 𝘀͟𝗵͟𝗮͟𝗹͟𝗹͟𝗼͟𝘄 𝗰͟𝗼͟𝗽͟𝘆 because it only copies the reference of the object or array and not the actual object or array.

        - For example, ⁡⁣⁣⁢𝘄𝗵𝗲𝗻 𝘄𝗲 𝘂𝘀𝗲 𝘁𝗵𝗲 𝘀𝗽𝗿𝗲𝗮𝗱 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝘁𝗼 𝗰𝗼𝗽𝘆 𝗮𝗻 𝗮𝗿𝗿𝗮𝘆 𝗼𝗿 𝗼𝗯𝗷𝗲𝗰𝘁, 𝗶𝘁 𝗰𝗿𝗲𝗮𝘁𝗲𝘀 𝗮 𝘀𝗵𝗮𝗹𝗹𝗼𝘄 𝗰𝗼𝗽𝘆.⁡

        - We create shllow copy using ⁡⁣⁣⁢spread operator⁡ for arrays and objects.

        & That means:
            - top-level properties are copied
            - nested objects are __shared__

        ⁡⁣⁢⁣𝗛𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗮𝗰𝗵𝗶𝗲𝘃𝗲 𝗮 𝘀𝗵𝗮𝗹𝗹𝗼𝘄 𝗰𝗼𝗽𝘆 𝗼𝗳 𝗮𝗻 𝗮𝗿𝗿𝗮𝘆 𝗼𝗿 𝗼𝗯𝗷𝗲𝗰𝘁 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡
        ^ You can achieve a shallow copy of an array using the spread operator `[...]` or the `Array.prototype.slice()` method. For objects, you can use the spread operator `{...}` or `Object.assign()`.    

       ≽≽ Array and Object are reference data types. Mean when you copy array or object then it is not copied by value but it is copied by reference , so if you change in new or old array/object till you seen canges in both.
       
       ≽≽ So, when we copy an array or object using spread operator then it creates a shallow copy because it only copies the reference of the array or object and not the actual array or object.    
            
        * So, in shallow copy, only the top-level properties are copied, and nested objects or arrays are shared between the original and the copy. This means that changes to nested objects or arrays in the copy will affect the original object or array.
*/
            
            const original = {
                name: "Sanket",
                address: {
                    city: "Pune"
                }
            };

            const shallow = { ...original };

            shallow.name = "Rahul";
            shallow.address.city = "Mumbai";

            console.log(original.name); // Sanket
            console.log(original.address.city); // Mumbai

            //Array Example
            const originalArray = [1, 2, 3 ,4 ,5];
            const shallowArray = [...originalArray];

            console.log(shallowArray); // [1, 2, 3 ,4 ,5]
            console.log(originalArray); // [1, 2, 3 ,4 ,5]

            shallowArray[0] = 10;
            console.log(shallowArray); // [10, 2, 3 ,4 , 5] -> changed
            console.log(originalArray); // [1, 2, 3 ,4 ,5] -> not changed

            //But IF nested array is there then it will change because nested array is shared between original and shallow copy.
                let NewArray = [1,2,3,[4,5]];
                let shallowCopy = [...NewArray];
                shallowCopy[3][0] = 10;
                console.log(NewArray); // [1,2,3,[10,5]] -> changed because nested array is shared between original and shallow copy.

/*               
    ⁡⁢⁣⁣𝗯) 𝗗𝗲𝗲𝗽 𝗖𝗼𝗽𝘆:⁡
        * A 𝗱͟𝗲͟𝗲͟𝗽 𝗰͟𝗼͟𝗽͟𝘆 creates a new copy of object or array that completely 𝙞𝙣𝙙𝙚𝙥𝙚𝙣𝙙𝙚𝙣𝙩 𝙘𝙤𝙥𝙮 𝙤𝙛 𝙩𝙝𝙚 𝙤𝙧𝙞𝙜𝙞𝙣𝙖𝙡 𝙤𝙗𝙟𝙚𝙘𝙩 𝙤𝙧 𝙖𝙧𝙧𝙖𝙮, including all nested objects and arrays. So, changes in the copied version do not affect the original at any level.

        - In Simple word, ⁡⁣⁣⁢Deep copy means copying all levels of an object or array, including nested objects or arrays, so that the new copy is completely independent of the original.⁡
         
        ⁡⁣⁢⁣⁡⁣⁢▶ 𝗛𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗮𝗰𝗵𝗶𝗲𝘃𝗲 𝗮 𝗗𝗲𝗲𝗽 𝗰𝗼𝗽𝘆 𝗼𝗳 𝗮𝗻 𝗮𝗿𝗿𝗮𝘆 𝗼𝗿 𝗼𝗯𝗷𝗲𝗰𝘁 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁? 𝗔𝗻𝗱 𝘄𝗵𝗮𝘁 𝗮𝗿𝗲 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁𝘀 𝘄𝗮𝘆 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 𝗱𝗲𝗲𝗽 𝗰𝗼𝗽𝘆?⁡
        ^ You can achieve a deep copy of an object using `JSON.parse(JSON.stringify(obj))`. This method converts the object to a JSON string and then parses it back to a new object, effectively creating a deep copy. 

        ^ However, this method has limitations, such as not copying functions, undefined, or symbols. For arrays, you can also use this method, but it is not recommended for large arrays due to performance issues. For more complex objects, you may need to implement a custom deep copy function or use libraries like Lodash which provide a `_.cloneDeep()` method for deep copying.
        
        - It is best to use deep copy when we want to create a completely independent copy of an object or array, especially when it contains nested objects or arrays.

        - For example, when we use JSON.parse(JSON.stringify(obj)) to copy an object, it creates a deep copy.

        - We create deep copy using ⁡⁣⁣⁢JSON.parse(JSON.stringify(obj))⁡ for objects.
        

        & That means:
            - top-level properties are copied
            - nested objects are also copied
            - changes in copied object do not affect original
            
            
*/
            
            const original1 = {
                name: "Sanket",
                address: {
                    city: "Pune"
                }
            };

            const deep = JSON.parse(JSON.stringify(original1));

            deep.name = "Rahul";
            deep.address.city = "Mumbai";

            console.log(original1.name); // Sanket
            console.log(original1.address.city); // Pune