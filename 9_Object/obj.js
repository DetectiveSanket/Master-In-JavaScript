
// ⁡⁢⁣⁣𝗝𝗦𝗢𝗡.𝗦𝘁𝗿𝗶𝗻𝗴𝗶𝗳𝘆()?⁡
    // Ojbect to JSON string
    const objectJ = {
        name: "John",
        age: 30,
        city: "New York",
        pin: 12345,
        status : true
    }

    console.log(objectJ);
    console.log(typeof objectJ); // "object"

    // convert object to JSON string
    const jsonString = JSON.stringify(objectJ);
    console.log(jsonString);
    console.log(typeof jsonString); // "string"
    

// ⁡⁣⁣⁢𝗝𝗦𝗢𝗡.𝗽𝗮𝗿𝘀𝗲()?⁡
    // convert JSON string back to object
    const parseredObject = JSON.parse(jsonString);
    console.log(parseredObject);
    console.log(typeof parseredObject); // "object"
//-------------------------------------------------------------
    // Array
    const array = [1, 2, 3, 4, 5];
    console.log(array);
    console.log(typeof array)

    const jsonArrayString = JSON.stringify(array);
    console.log(jsonArrayString);
    console.log(typeof jsonArrayString); // "string"

    const parseredArray = JSON.parse(jsonArrayString);
    console.log(parseredArray);
    console.log(typeof parseredArray); // "object"

//-----------------------------------------------
let obj = {} // empty object

obj.name = "John"; // adding a property
obj.age = 30;      // adding another property
console.log(obj);
console.log("\n");

//------------------------------------------------------------

    let person = {
        name: "Alice",
        age: 25,
        city: "New York",
    };

    person.age; // 25
    person["city"]; // "New York"
    console.log(person); // { name: "Alice", age: 25, city: "New York" }

    person.country = "USA"; // adding a new property
    person.age = 26; // updating an existing property
    delete person.city; // deleting a property

    console.log(person); // { name: "Alice", age: 26, country: "USA" }
    console.log(typeof person); // "object"
    console.log("\n");

//-------------------------------------------------------------

let details = {
    name: "sanket",
    address:{
        city: "Mumbai",
        pin:34,
        location:{
            latitude: 19.0760,
            longitude: 72.8777
        }
    }
}
console.log(details); // { name: "sanket", address: { city: "Mumbai", pin: 34, location: { latitude: 19.0760, longitude: 72.8777 } } } }
details.address.city; // "Mumbai"
details.address.location.latitude; // 19.0760

//# ⁡⁢⁣⁣destructuring⁡
let {latitude , longitude} = details.address.location; 
console.log(latitude, longitude); // 19.0760 72.8777

let {a , b} = details.address.location
console.log(a , b) // undefine undefine

// let { name, address: { city, pin, location: { latitude, longitude } } } = details;

//-------------------------------------------------------------

//# ⁡⁢⁣⁣for in⁡ :- ⁡⁣⁣⁢Iterating over object properties⁡
for (let key in details) {
    console.log(key, details[key]); // key : value ex- name :  sanket, address : { city: "Mumbai", pin: 34, location: { latitude: 19.0760, longitude: 72.8777 } }
}

//----------------------------

//# ⁢⁣⁣keys⁡ :- ⁢⁣⁡⁣⁣⁢Getting object keys and storing them in an array⁡
let keys = Object.keys(details);
console.log(keys); // [ "name", "address" ]

//# ⁡⁢⁣⁣entries⁡ :- ⁢⁣⁡⁣⁣⁢Getting object entries (key-value pairs) and storing them in an array⁡⁡
let entries = Object.entries(details);
console.log(entries); // [ [ "name", "sanket" ], [ "address", { city: "Mumbai", pin: 34, location: { latitude: 19.0760, longitude: 72.8777 } } ] ]

//# ⁡⁢⁣⁣values⁡ :- ⁡⁣⁣⁢Getting object values and storing them in an array⁡
let values = Object.values(details);
console.log(values); // [ "sanket", { city: "Mumbai", pin: 34, location: { latitude: 19.0760, longitude: 72.8777 } } ]

//# ⁡⁢⁣⁣Spread operator⁡
let newDetails = { ...details, country: "India" };
console.log(newDetails);

//# ⁡⁢⁣⁣forEach⁡ :- ⁡⁣⁣⁢Iterating over object values⁡
values.forEach((value) => {
    console.log(value);
});


//--------------------------------------------------

//## ⁡⁢⁣⁣Deep Copy vs Shallow Copy⁡

    /* 
        Shallow Copy: Creates a new object, but nested objects are still referenced.
        Deep Copy: Creates a new object and recursively copies all nested objects.
    */
let shallowCopy = { ...details };
let deepCopy = JSON.parse(JSON.stringify(details)); // Deep copy

shallowCopy.address.city = "Bangalore";
deepCopy.address.city = "Chennai";

console.log(details.address.city); // "Bangalore"
console.log(shallowCopy.address.city); // "Bangalore"
console.log(deepCopy.address.city); // "Chennai"


// ## Shallow Copy
    let obj1 = {
        name: "sanket",
        age: 21,
        city: "pune",
    }
    // object are reference type data type , when we copy the object it will create a new reference to the same object in memory. this is called shallow copy.
    let copyObjRef = obj1; // copy by reference
    console.log(copyObjRef); // {name: "sanket", age: 21, city: "pune"}
    copyObjRef.name = "Sanket Talekar";
    console.log(copyObjRef.name); // Sanket Talekar
    console.log(obj1.name); // original object also changed Sanket Talekar

    // to solve this issue we use spread operator to create a new object with the same properties. this is called shallow copy. BUt you should be careful when using spread operator for copying objects with nested objects, because it will create a new reference to the same nested object in memory. this is called deep copy.

    let copyObjSpread = { ...obj1 }; // shallow copy
    console.log(copyObjSpread); // {name: "Sanket Talekar", age: 21, city: "pune"}
    copyObjSpread.name = "Sanket Talekar";
    console.log(copyObjSpread.name); // Sanket Talekar
    console.log(obj1.name); // original object remain same Sanket Talekar

    // but if the object has nested object then it will create a new reference to the same nested object in memory. this is called deep copy.
    let obj2 = {
        name: "sanket",
        age: 21,
        address: {
            city: "pune",   
            pin: 344,
        }
    }
    let copyObjNested = { ...obj2 };
    console.log(copyObjNested); // {name: "sanket", age: 21, address: {city: "pune", pin: 344}}
    copyObjNested.address.city = "mumbai";
    console.log(copyObjNested.address.city);
    console.log(obj2.address.city); // original object also changed mumbai

    // to solve this issue we use deep copy
    let copyObjDeep = JSON.parse(JSON.stringify(obj2)); // deep copy
    copyObjDeep.address.city = "delhi";
    console.log(copyObjDeep.address.city); // delhi
    console.log(obj2.address.city); // original object remain same mumbai
    

    //------------------------------------------------------------------------//

    
// diff way to to create object.

// 1. Object literal syntax
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("person: " , person);
console.log("\n");


// 2. Using the Object constructor

const person2 = new Object();

person2.name = "Jane";
person2.age = 25;
person2.city = "Los Angeles";

console.log("person2: " , person2);
console.log("persor2", person2)
console.log("\n");

// 3. Using a constructor function

function personn(name , age , city) {
    this.name = name;
    this.age= age;
    this.city = city;
}

const person3 = new personn("Alice" , 28 , "Chicago");
console.log("person3: " , person3);
console.log("\n");

// 4. Using a class

class personnn {
    constructor(name , age , city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

}
const person4 = new personnn("Bob" , 35 , "San Francisco");
console.log("person4: " , person4);
console.log("\n");

// 5. Using Object.create()

const person5 = Object.create();
person5.name = "Charlie";
person5.age = 40;
person5.city = "Miami";

console.log("person5: " , person5);
console.log("\n");

// 6. Using JSON.parse()

const personJson = '{"name": "David", "age": 22, "city": "Seattle"}';
const person6 = JSON.parse(personJson);
console.log("person6: " , person6);
console.log("\n");

// 7. Using a factory function

function createPerson(name , age , city) {  
    return {
        name: name,
        age: age,
        city: city
    };
}

const person7 = ct.assign()

const person8 = Object.assign({}, person);
console.log("person8: " , person8);
console.log("\n");
createPerson("Eve" , 27 , "Austin");
console.log("person7: " , person7);
console.log("\n");

// 8. Using Obje


