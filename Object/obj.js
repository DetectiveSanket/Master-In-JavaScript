
let obj = {} // empty object

obj.name = "John"; // adding a property
obj.age = 30;      // adding another property
console.log(obj);

//------------------------------------------------------------

let person = {
    name: "Alice",
    age: 25,
    city: "New York",
};
person.age; // 25
person["city"]; // "New York"
console.log(person); // { name: "Alice", age: 25, city: "New York" }

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