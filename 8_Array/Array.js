

// ⁡⁣⁡⁢⁣⁣F⁡⁡⁢⁣⁣orEach⁡


let arr = [1 ,22,5, 4, 3, 2, 1];
    /* 
        - It executes the provided function once for each array element.
        * It does not create a new array.
        - It is generally used when you want to perform side effects (like logging) rather than transforming data.
        - It does not return a value.
        - It does not mutate the original array.
        - If ⁡⁣⁣⁢a change is made to the original array, it is not reflected in the forEach loop.⁡

        🔍 ⁡⁢⁣⁣𝘒𝘦𝘺 𝘊𝘩𝘢𝘳𝘢𝘤𝘵𝘦𝘳𝘪𝘴𝘵𝘪𝘤𝘴⁡
         - 𝗗𝗼𝗲𝘀 𝗻𝗼𝘁 𝗿𝗲𝘁𝘂𝗿𝗻 𝗮 𝗻𝗲𝘄 𝗮𝗿𝗿𝗮𝘆: Unlike map(), filter(), or reduce().
         - 𝗖𝗮𝗻𝗻𝗼𝘁 𝗯𝗿𝗲𝗮𝗸 𝗼𝗿 𝗿𝗲𝘁𝘂𝗿𝗻 𝗲𝗮𝗿𝗹𝘆: You can’t use break, continue, or return to exit early.
         - 𝗦𝗸𝗶𝗽𝘀 𝗲𝗺𝗽𝘁𝘆 𝘀𝗹𝗼𝘁𝘀: It won’t execute the callback for holes in sparse arrays.

        🛠️ ⁡⁢⁣⁣𝘜𝘴𝘦 𝘊𝘢𝘴𝘦𝘴⁡
         - Logging or printing array elements
         - Updating DOM element
         - Performing side effects (e.g., API calls, mutations) 

        ✅ ⁡⁢⁣⁣𝘉𝘦𝘴𝘵 𝘗𝘳𝘢𝘤𝘵𝘪𝘤𝘦𝘴⁡
         - Use forEach() when you want to do something with each element (side effects).
         - Use map() or filter() when you want to transform or filter data. 

    */

        arr.forEach(function(value, index, array) { // it take 0 to 3 arguments , value , index , array (its on you how many think you have to get)
            // value -> current element
            // index -> index of current element
            // array -> original array

            // console.log(`Value is ${value}`);
            // console.log(`Index is ${index}`);
            // console.log(`Array is ${array}`);
        })

        //* or with arrow function
        arr.forEach((value, index, array) => {
            // console.log(`Value is ${value}`);
            // console.log(`Index is ${index}`);
            // console.log(`Array is ${array}`);
        });

// ⁡⁢⁣⁣Map⁡

    /* 
        - map always create a new array and return it (return new array is compulsory)
        - It does not change the original array
        - It is used to iterate over an array and perform some operation on each element
        - First time it create new empty array with the same length as the original array and then fills it with the return values of the callback function
        - If ⁡⁣⁣⁢you don't return a value from the callback function, the new array will contain `undefined` for that element⁡


        <!-- Key Features -->

        Does not mutate the original array.
        Returns a new array with the same length.
        Skips empty slots in sparse arrays.

        <!-- Use Cases -->

        Transforming data (e.g., converting strings to uppercase)
        Extracting specific properties from objects
        Formatting data for display or export

        <!-- Common Pitfalls -->

        Forgetting to return a value inside the callback
        Using map() when side effects are intended (use forEach() instead)
        Assuming it modifies the original array
        
    */

        let mapArray = [1,55,1,2,66,12,45];
        let newMap = mapArray.map((val) => {
            return val * 2; // This will double each element in the original array and return a new array
        })

        console.log(newMap);

        //&condition in map
        let ifMapArray = [11 , 15 ,4,5,100];
        let newIfMap = ifMapArray.map((val) => {
            if (val > 10) {
                return val * 2;
            }
            //  else {
            //     return val;
            // }
        });

        console.log(newIfMap); // [ 22, 30, undefined, undefined, 200 ]

//# ⁡⁢⁣⁣Filter⁡      
    /* 
        - Same work as map but In new array only stored  elements that pass the test
        - The filter() method ⁡⁣⁣⁢creates a new array ⁡with all elements that pass the test implemented by the provided function.
        - It does not change the original array.
        - It is used to select a subset of elements from an array.
        - If no elements pass the test, an empty array is returned.
        - The filter() method does not mutate the original array.
        - If you want to keep the original array unchanged, use filter() instead of forEach().
        - here ⁡⁣⁣⁢we do not get undefined values in the new array, only the elements that pass the test are included⁡.

        - Here also we need to return a value from the function.
    */

    let filterArray = [1, 2, 3, 4, 5, 6];
    let newFilter = filterArray.filter((val) => {
        return val > 3; // This will keep only the elements greater than 3
    });

    console.log(newFilter); // [ 4, 5, 6 ]

//#⁡⁢⁣⁣ Reduce⁡
    /* 
        - ⁡⁣⁣⁢It is used to reduce an array to a single value by applying a function to each element and accumulating the result⁡.

        - Accumulator = The accumulated value returned from the last invocation of the callback function.(return value , it help to addition of array)
        - Current Value = The current element being processed in the array.(value in array)
    */

       let reduceArray = [1, 2, 3, 4, 5];
       let sum = reduceArray.reduce((accumulator, currentValue) => {
           return accumulator + currentValue;
       }, 0);

       console.log(sum); // 15

//# Find
    /* 
        - The find() method returns the value of the first element in the array that satisfies the provided testing function.
        - If no values satisfy the testing function, undefined is returned.
        - It does not change the original array.
    */

        let obj = [
            {
                id: 1,
                name: "John"
            },
            {
                id: 2,
                name: "Jane"
            },
            {
                id: 3,
                name: "John"
            }
        ]

        let newObj = obj.find((item) => {
            return item.name === "John";
        });

        console.log(newObj);

    let findArray = [5, 12, 8, 130, 44];
    let found = findArray.find((element) => {
        return element > 10;
    });

    console.log(found); // 12

//# ⁡⁢⁣⁣Some  
    /* 
        - The some() method tests whether at least one element in the array passes the test implemented by the provided function.
        - It returns a Boolean value.
        - It does not change the original array.• 
    */

    let someArray = [1, 2, 3, 4, 5];
    let hasEven = someArray.some((element) => {
        return element % 2 === 0;
    });

    console.log(hasEven); // true

//# Every
    /* 
        - The every() method tests whether all elements in the array pass the test implemented by the provided function.
        - It returns a Boolean value.
        - It does not change the original array.
    */

    let everyArray = [2, 4, 6, 8];
    let allEven = everyArray.every((element) => {
        return element % 2 === 0;
    });

    console.log(allEven); // true