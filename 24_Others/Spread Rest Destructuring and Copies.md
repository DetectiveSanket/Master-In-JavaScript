# Spread, Rest, Destructuring, and Copies in JavaScript

This guide explains four JavaScript ideas in a friendly way:

- the spread operator
- the rest operator
- destructuring
- shallow copies and deep copies

The three dots (`...`) are used for both **spread** and **rest**. The meaning
comes from where the dots are written.

---

## 1. The spread operator: opening a box

Imagine that you have a box of apples:

```text
Box A: [apple, banana, orange]
```

The **spread operator** opens the box and takes out its items one by one.
It is written with three dots before an array, object, or other iterable:

```js
const fruits = ["apple", "banana", "orange"];
const moreFruits = [...fruits, "mango"];

console.log(moreFruits);
// ["apple", "banana", "orange", "mango"]
```

The three dots mean: "Take everything inside `fruits` and place each item
here."

### Everyday example

Suppose two children bring snacks to a picnic. You can put all the snacks into
one basket:

```js
const snacksFromAva = ["chips", "cookies"];
const snacksFromLeo = ["apples", "juice"];

const picnicBasket = [...snacksFromAva, ...snacksFromLeo];

console.log(picnicBasket);
// ["chips", "cookies", "apples", "juice"]
```

### Spread with arrays

#### Copy an array

```js
const originalNumbers = [1, 2, 3];
const copiedNumbers = [...originalNumbers];

console.log(copiedNumbers); // [1, 2, 3]
console.log(copiedNumbers === originalNumbers); // false
```

The arrays contain the same items, but they are different array containers.

#### Combine arrays

```js
const redTeam = ["Mia", "Sam"];
const blueTeam = ["Noah", "Zoe"];

const allPlayers = [...redTeam, ...blueTeam];

console.log(allPlayers); // ["Mia", "Sam", "Noah", "Zoe"]
```

#### Add items while copying

```js
const schoolSubjects = ["Math", "Science"];
const updatedSubjects = [...schoolSubjects, "Art", "Music"];

console.log(updatedSubjects); // ["Math", "Science", "Art", "Music"]
```

#### Spread a string

Strings are iterable, so their characters can be spread into an array:

```js
const word = "CAT";
const letters = [...word];

console.log(letters); // ["C", "A", "T"]
```

#### Spread into a function call

```js
const scores = [10, 20, 30];

function addThreeNumbers(first, second, third) {
  return first + second + third;
}

console.log(addThreeNumbers(...scores)); // 60
```

This means: "Take the items in `scores` and pass them as separate arguments."

### Spread with objects

For an object, spread copies its enumerable properties into a new object:

```js
const student = {
  name: "Aarav",
  age: 10
};

const studentWithGrade = {
  ...student,
  grade: 5
};

console.log(studentWithGrade);
// { name: "Aarav", age: 10, grade: 5 }
```

You can also update one property while making a new object:

```js
const oldProfile = {
  name: "Maya",
  favoriteColor: "blue"
};

const newProfile = {
  ...oldProfile,
  favoriteColor: "green"
};

console.log(newProfile.favoriteColor); // green
console.log(oldProfile.favoriteColor); // blue
```

When two object properties have the same name, the property written later wins:

```js
const firstBox = { color: "red", size: "small" };
const secondBox = { color: "blue" };

const finalBox = { ...firstBox, ...secondBox };

console.log(finalBox); // { color: "blue", size: "small" }
```

---

## 2. The rest operator: gathering leftover items

The **rest operator** also uses three dots, but it does the opposite job of
spread. Instead of opening a box, rest gathers the remaining items into a new
box.

Imagine a teacher gives the first two pencils to two children and puts all
remaining pencils in a container called `remainingPencils`:

```js
const pencils = ["red", "blue", "green", "yellow"];
const [firstPencil, secondPencil, ...remainingPencils] = pencils;

console.log(firstPencil); // red
console.log(secondPencil); // blue
console.log(remainingPencils); // ["green", "yellow"]
```

### Rest in a function

Rest is very useful when a function does not know how many values it will
receive:

```js
function addAllNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(addAllNumbers(2, 4)); // 6
console.log(addAllNumbers(1, 2, 3, 4)); // 10
```

Here, all the arguments are gathered into the `numbers` array.

You can use normal parameters before the rest parameter:

```js
function greetTeam(teamName, ...players) {
  console.log(`${teamName} players:`);
  players.forEach((player) => console.log(player));
}

greetTeam("Red Team", "Mia", "Sam", "Leo");
// Red Team players:
// Mia
// Sam
// Leo
```

The rest parameter must be the last parameter because JavaScript needs to know
where the leftover values begin:

```js
function example(first, ...everythingElse) {
  console.log(first);
  console.log(everythingElse);
}
```

### Rest in array destructuring

```js
const colors = ["red", "green", "blue", "yellow"];
const [favoriteColor, ...otherColors] = colors;

console.log(favoriteColor); // red
console.log(otherColors); // ["green", "blue", "yellow"]
```

### Rest in object destructuring

```js
const child = {
  name: "Riya",
  age: 10,
  hobby: "drawing",
  city: "Pune"
};

const { name, ...otherDetails } = child;

console.log(name); // Riya
console.log(otherDetails);
// { age: 10, hobby: "drawing", city: "Pune" }
```

The rest object contains the properties that were not picked out.

---

## 3. Rest and spread: what is the difference?

Both use `...`, but their jobs are opposite:

| Feature | What it does | Child-friendly picture |
| --- | --- | --- |
| Spread | Takes items out and places them separately | Opening a box |
| Rest | Collects leftover items into one new group | Packing items into a box |

### Side-by-side example

```js
const numbers = [1, 2, 3, 4];

// Rest: gather the remaining items.
const [first, ...leftovers] = numbers;

// Spread: open the leftovers and place them into a new array.
const newNumbers = [0, ...leftovers, 5];

console.log(first); // 1
console.log(leftovers); // [2, 3, 4]
console.log(newNumbers); // [0, 2, 3, 4, 5]
```

### A quick rule

- In an array or object being created, `...` usually means **spread**.
- In a function parameter list, `...` means **rest**.
- In destructuring, `...` at the end gathers the remaining values, so it is
  **rest**.

```js
const copy = [...numbers]; // spread
const { name, ...details } = child; // rest inside destructuring
function show(...items) {} // rest parameter
```

---

## 4. Destructuring: unpacking a box

**Destructuring** means taking values out of an array or object and putting them
into variables.

Imagine receiving a lunchbox with a sandwich, fruit, and juice. Destructuring
lets you label each item without repeatedly opening the lunchbox by position.

### Array destructuring

Arrays use position. The first variable receives the first item, the second
variable receives the second item, and so on:

```js
const lunch = ["sandwich", "apple", "juice"];
const [mainFood, fruit, drink] = lunch;

console.log(mainFood); // sandwich
console.log(fruit); // apple
console.log(drink); // juice
```

You can skip an item with an empty space:

```js
const numbers = [10, 20, 30];
const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

You can also provide a default value:

```js
const colors = ["blue"];
const [firstColor, secondColor = "white"] = colors;

console.log(firstColor); // blue
console.log(secondColor); // white
```

### Object destructuring

Objects use property names instead of positions:

```js
const book = {
  title: "The Space Adventure",
  pages: 120,
  author: "Nina"
};

const { title, author } = book;

console.log(title); // The Space Adventure
console.log(author); // Nina
```

You can rename a variable while destructuring:

```js
const user = {
  name: "Kabir",
  age: 10
};

const { name: childName, age: childAge } = user;

console.log(childName); // Kabir
console.log(childAge); // 10
```

You can also use a default value:

```js
const game = { name: "Treasure Hunt" };
const { name, level = 1 } = game;

console.log(name); // Treasure Hunt
console.log(level); // 1
```

### Destructuring in function parameters

A function can destructure an object while receiving it:

```js
function introduce({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

introduce({ name: "Aanya", age: 10 });
// Aanya is 10 years old.
```

### Swapping two values

Destructuring makes swapping two variables easy:

```js
let left = "red";
let right = "blue";

[left, right] = [right, left];

console.log(left); // blue
console.log(right); // red
```

---

## 5. Spread operator vs destructuring

These ideas can look similar because both often use arrays, objects, and three
dots. They are not the same.

### The main difference

- **Spread** is used to build something new or send values somewhere else.
- **Destructuring** is used to take selected values out and store them in
  variables.

### Example with an array

```js
const numbers = [1, 2, 3];

// Destructuring takes values out.
const [first, second] = numbers;
console.log(first, second); // 1 2

// Spread places values into a new array.
const copiedNumbers = [...numbers];
console.log(copiedNumbers); // [1, 2, 3]
```

### Example with an object

```js
const robot = {
  name: "Bolt",
  color: "silver"
};

// Destructuring takes properties out into variables.
const { name } = robot;
console.log(name); // Bolt

// Spread copies properties into a new object.
const robotCopy = { ...robot };
console.log(robotCopy); // { name: "Bolt", color: "silver" }
```

### Everyday comparison

Suppose a toy box contains a ball and a car:

- Destructuring is saying, "Give me the ball and put it in my hand."
- Spread is saying, "Take everything from this box and put it into another
  box."

Destructuring normally creates variables. Spread normally creates or fills an
array, object, or function call.

---

## 6. Shallow copy: a new outside box

A **copy** is useful when you want a second version of data. But there are two
important kinds of copy: shallow and deep.

A **shallow copy** creates a new outer array or object, but it does not make new
copies of nested arrays or objects.

Imagine a large toy box containing smaller toy boxes:

```text
Original large box
  - ball
  - small box: [car, train]

Shallow-copy large box
  - ball
  - the same small box: [car, train]
```

The large boxes are different, but both still point to the same small box.

### Shallow copy with an array

```js
const originalList = ["red", "green", "blue"];
const shallowList = [...originalList];

shallowList[0] = "yellow";

console.log(shallowList); // ["yellow", "green", "blue"]
console.log(originalList); // ["red", "green", "blue"]
```

This works independently because the array contains simple values.

### Shallow copy with a nested array

```js
const originalBoxes = [["ball", "car"], ["book"]];
const shallowBoxes = [...originalBoxes];

shallowBoxes[0].push("doll");

console.log(shallowBoxes);
// [["ball", "car", "doll"], ["book"]]

console.log(originalBoxes);
// [["ball", "car", "doll"], ["book"]]
```

Why did the original change? The outer arrays are different, but the first
inner array is shared by both copies.

### Shallow copy with an object

```js
const originalStudent = {
  name: "Ishaan",
  address: {
    city: "Pune"
  }
};

const shallowStudent = { ...originalStudent };

shallowStudent.name = "Arjun";
shallowStudent.address.city = "Mumbai";

console.log(originalStudent.name); // Ishaan
console.log(originalStudent.address.city); // Mumbai
```

Changing the top-level `name` did not affect the original. Changing the nested
`address.city` did affect the original because the nested `address` object is
shared.

### Common ways to make a shallow copy

```js
const arrayCopy = [...originalList];
const objectCopy = { ...originalStudent };

const arrayCopyAnotherWay = originalList.slice();
const objectCopyAnotherWay = Object.assign({}, originalStudent);
```

---

## 7. Deep copy: new boxes all the way down

A **deep copy** creates a new outer container and new copies of its nested
arrays and objects too.

Imagine copying the large toy box and also copying every smaller toy box inside
it. Nothing inside the new set is shared with the original set.

```js
const originalHouse = {
  owner: "Sara",
  rooms: {
    bedroom: {
      color: "pink"
    }
  }
};

const deepHouse = structuredClone(originalHouse);

deepHouse.rooms.bedroom.color = "green";

console.log(deepHouse.rooms.bedroom.color); // green
console.log(originalHouse.rooms.bedroom.color); // pink
```

`structuredClone()` is a modern built-in way to make a deep copy of many
normal JavaScript values. It can copy nested arrays and objects.

Deep copying works with arrays too:

```js
const originalBoard = [[1, 2], [3, 4]];
const deepBoard = structuredClone(originalBoard);

deepBoard[0].push(99);

console.log(deepBoard); // [[1, 2, 99], [3, 4]]
console.log(originalBoard); // [[1, 2], [3, 4]]
```

### JSON deep-copy method and its limits

You may also see this older technique:

```js
const deepCopy = JSON.parse(JSON.stringify(originalHouse));
```

It can work for simple data containing strings, numbers, booleans, arrays, and
plain objects. However, it can lose or change values such as `undefined`,
functions, `Date` objects, `Map`, and `Set`. It also fails when the data has a
circular reference. For normal modern JavaScript data, prefer
`structuredClone()` when it is available.

### When should you use each copy?

Use a shallow copy when:

- you only need to change top-level values
- the data has no nested objects or arrays
- you understand that nested data is shared

Use a deep copy when:

- you need the copy to be independent at every level
- the data contains nested objects or arrays
- changing the copy must never change the original

---

## 8. How spread, destructuring, and copying relate

These ideas are connected, but each has a different job:

```js
const original = {
  name: "Neha",
  favoriteFoods: ["rice", "mango"]
};

// Destructuring: take values out.
const { name, favoriteFoods } = original;

// Spread: make a new outer object.
const shallowCopy = { ...original };

// Deep copy: make new nested containers too.
const deepCopy = structuredClone(original);
```

Important detail: using spread to copy an object or array makes a **shallow
copy**, not automatically a deep copy.

```js
shallowCopy.favoriteFoods.push("pizza");

console.log(original.favoriteFoods);
// ["rice", "mango", "pizza"] because the nested array is shared
```

The deep copy does not share that nested array:

```js
deepCopy.favoriteFoods.push("pasta");

console.log(original.favoriteFoods);
// ["rice", "mango", "pizza"]
```

---

## 9. Final memory trick

Think of the three dots as a small magic tool:

```text
Spread: open a box and spread its contents out.
Rest: gather the remaining contents into a box.
```

Then remember:

```text
Destructuring = taking values out into variables.
Shallow copy = new outside container, shared nested containers.
Deep copy = new containers all the way down.
```

### Quick reference

| Concept | Main question it answers | Example |
| --- | --- | --- |
| Spread | How do I put these values into a new place? | `[...numbers]` |
| Rest | How do I collect the remaining values? | `[first, ...others]` |
| Destructuring | How do I take values out into variables? | `const { name } = user` |
| Shallow copy | How do I copy only the outside? | `{ ...user }` |
| Deep copy | How do I copy the inside too? | `structuredClone(user)` |
