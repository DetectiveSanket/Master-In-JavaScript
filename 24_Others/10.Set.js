/* 
    # Set

    * A Set is a collection of unique values of any type. Duplicates are automatically ignored. 

    * Unlike arrays, Sets don't have indexes. Common use: removing duplicates, membership testing.

*/
const set = new Set([1, 2, 2, 3, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
set.has(2);   // true
set.size;     // 4

//  Array.from(set); // [1, 2, 3, 4] -> .from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const arr = [1,2,2,2,3,4,3,4,5];
const uniqueArr = [... new Set(arr)];

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

const uniqueArr2 = [... new Set([1, 2 ,2 ,2 ,3 ,4 , 3, 4, 5])];

console.log(uniqueArr2); // Output: [1, 2, 3, 4, 5]



// ----

set.delete(1);

// Convert to array

[...set];               // [2, 3, 4]

Array.from(set);        // [2, 3, 4]

// Remove duplicates from array

[...new Set([1,1,2,3,3])]; // [1, 2, 3]


// --- 

