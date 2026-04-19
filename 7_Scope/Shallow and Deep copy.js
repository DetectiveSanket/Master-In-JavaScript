
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

/*
   ⁡⁢⁣⁣ 𝗮) 𝗦𝗵𝗮𝗹𝗹𝗼𝘄 𝗖𝗼𝗽𝘆: ⁡
        * A shallow copy creates a new outer object, but nested objects/arrays are still copied by reference.

        - In Simple word, ⁡⁣⁣⁢Shallow copy means copying the top-level properties of an object or array, but nested objects or arrays are not copied and still reference the same memory location.⁡

        - It is best to copy the primitive data types like string, number, boolean etc. because they are immutable and they are copied by value. But when we copy the reference data types like object and array then it is called shallow copy because it only copies the reference of the object or array and not the actual object or array.

        - For example, when we use the spread operator to copy an array or object, it creates a shallow copy.

        - We create shllow copy using ⁡⁣⁣⁢spread operator⁡ for arrays and objects.

        & That means:
            - top-level properties are copied
            - nested objects are __shared__
            
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
            console.log(originalArray); //

            shallowArray[0] = 10;
            console.log(shallowArray); // [10, 2, 3 ,4 , 5] -> changed
            console.log(originalArray); // [1, 2, 3 ,4 ,5] -> not changed

            //But IF 
                let NewArray = [1,2,3,[4,5]];
                let shallowCopy = [...NewArray];
                shallowCopy[3][0] = 10;
                console.log(NewArray); // [1,2,3,[10,5]] -> changed because nested array is shared between original and shallow copy.

/*               
    ⁡⁢⁣⁣𝗯) 𝗗𝗲𝗲𝗽 𝗖𝗼𝗽𝘆:⁡
        - A deep copy creates a completely independent copy, including all nested objects/arrays.

        - In Simple word, ⁡⁣⁣⁢Deep copy means copying all levels of an object or array, including nested objects or arrays, so that the new copy is completely independent of the original.⁡

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