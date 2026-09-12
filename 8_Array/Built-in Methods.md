# JavaScript Built-in Methods

Built-in methods are functions that JavaScript provides on values such as strings,
arrays, objects, and collections. The value before the dot is the receiver:

```js
receiver.method(arguments);
```

## Start here: choose one

```js
"JavaScript".slice(0, 4); // "Java"
["red", "green", "blue"].slice(0, 2); // ["red", "green"]
```

Explore `slice()` first when you want to copy a portion without changing the
original value.

```js
"red,green,blue".split(","); // ["red", "green", "blue"]
```

Explore `split()` first when you want to turn a string into an array of parts.

## 1. `slice()`

### What it does

`slice()` extracts a section and returns a new value. It does not modify the
original string or array.

### Data types

- **String:** returns a new string.
- **Array:** returns a new array.

### Usage patterns

```js
const word = "JavaScript";
word.slice(0, 4); // "Java"
word.slice(4); // "Script"
word.slice(-6); // "Script"
word.slice(0, -6); // "Java"

const colors = ["red", "green", "blue", "yellow"];
colors.slice(1, 3); // ["green", "blue"]
colors.slice(2); // ["blue", "yellow"]
colors.slice(-2); // ["blue", "yellow"]
```

The start index is included; the end index is excluded. Negative indexes count
backward from the end. Omitting the end index means "continue to the end".

### Result

`slice()` returns a string when called on a string and an array when called on
an array. With no arguments, `array.slice()` is a convenient shallow copy.

```js
const copy = colors.slice();
copy.push("purple");
console.log(colors); // ["red", "green", "blue", "yellow"]
```

## 2. `splice()`

### What it does

`splice()` removes, replaces, or inserts elements in an array. Unlike
`slice()`, it changes the original array.

### Data type

- **Array:** `splice()` is an array method.
- It is not a direct string method.

### Usage patterns

```js
const fruits = ["apple", "banana", "cherry", "date"];

const removed = fruits.splice(1, 2);

console.log(removed); // ["banana", "cherry"]
console.log(fruits); // ["apple", "date"]
```

The first argument is the start index. The second argument is the number of
elements to remove. Any additional arguments are inserted at the start index.

```js
const numbers = [1, 2, 5];

numbers.splice(2, 0, 3, 4); // remove 0, then insert 3 and 4
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.splice(1, 2, "two", "three");
console.log(numbers); // [1, "two", "three", 4, 5]
```

### Result

`splice()` returns a new array containing the elements that were removed. If
no elements are removed, it returns an empty array. The original array is
modified.

## 3. `split()`

### What it does

`split()` divides a string into an array of substrings using a separator. It is
the common first step when string data must be processed with array methods.

### Data type

- **String:** `split()` is a string method and returns an array.

### Usage patterns

```js
"one,two,three".split(","); // ["one", "two", "three"]
"hello world".split(" "); // ["hello", "world"]
"JavaScript".split(""); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
"one,two,three".split(",", 2); // ["one", "two"]
"  apple   orange  ".trim().split(/\s+/); // ["apple", "orange"]
```

The separator can be a string or a regular expression. The optional limit
restricts how many pieces are returned. With no separator, the original string
is returned as the only array element.

```js
"hello".split(); // ["hello"]
```

### Result

`split()` always returns an array when called successfully on a string. It does
not change the original string.

## 4. `reverse()`

### What it does

`reverse()` changes the order of the elements in an array in place.

### Data type

- **Array:** `reverse()` is an array method.
- It is not a direct string method. Convert a string to an array first when
  reversing characters.

### Usage patterns

```js
const numbers = [1, 2, 3];
const returnedArray = numbers.reverse();

console.log(numbers); // [3, 2, 1]
console.log(returnedArray === numbers); // true

const reversedWord = "hello".split("").reverse().join("");
console.log(reversedWord); // "olleh"
```

Because `reverse()` mutates its receiver, use a copy when the original order
must be preserved:

```js
const original = [1, 2, 3];
const reversedCopy = [...original].reverse();

console.log(original); // [1, 2, 3]
console.log(reversedCopy); // [3, 2, 1]
```

### Result

`reverse()` returns the same array after changing its order. It does not return a
new array.

## 5. `join()`

### What it does

`join()` combines array elements into one string, placing a separator between
each element.

### Data type

- **Array:** `join()` is an array method and returns a string.

### Usage patterns

```js
["JavaScript", "is", "useful"].join(" "); // "JavaScript is useful"
["2026", "09", "06"].join("-"); // "2026-09-06"
["a", "b", "c"].join(); // "a,b,c"
["a", "b", "c"].join(""); // "abc"
```

`join()` converts elements to strings. `null` and `undefined` become empty
fields rather than the words `"null"` and `"undefined"`.

```js
["a", null, undefined, "b"].join("-"); // "a---b"
```

### Result

`join()` always returns a string and does not modify the original array.

## The classic string-reversal pipeline

These methods can be chained because each step returns a value accepted by the
next step:

```js
const input = "hello world";
const output = input.split("").reverse().join("");

console.log(output); // "dlrow olleh"
```

1. `split("")`: string -> array of characters.
2. `reverse()`: array -> the same array in reverse order.
3. `join("")`: array -> string with no separator.

## Common method names to learn

### Strings

`slice`, `substring`, `includes`, `startsWith`, `endsWith`, `indexOf`,
`replace`, `replaceAll`, `split`, `trim`, `toUpperCase`, `toLowerCase`,
`charAt`, `at`, `padStart`, `padEnd`.

### Arrays

`slice`, `splice`, `includes`, `indexOf`, `at`, `find`, `findIndex`, `filter`,
`map`, `reduce`, `forEach`, `some`, `every`, `sort`, `reverse`, `join`,
`concat`, `flat`, `flatMap`, `push`, `pop`, `shift`, `unshift`.

### Objects and JSON

`Object.keys`, `Object.values`, `Object.entries`, `Object.fromEntries`,
`Object.assign`, `JSON.parse`, `JSON.stringify`.

### Modern collections and async code

`Set.prototype.has`, `Map.prototype.get`, `Map.prototype.set`,
`Promise.all`, `Promise.allSettled`, and `Promise.race`.

## `slice()` vs `splice()` vs `split()`

| Method | Used on | Purpose | Mutates original? | Returns |
| --- | --- | --- | --- | --- |
| `slice()` | String or array | Copies a selected portion | No | String or array |
| `splice()` | Array only | Removes, replaces, or inserts elements | Yes | Array of removed elements |
| `split()` | String only | Divides a string into pieces | No | Array |

```js
const letters = ["a", "b", "c", "d"];

letters.slice(1, 3); // ["b", "c"], letters stays unchanged
letters.splice(1, 2); // ["b", "c"], letters becomes ["a", "d"]

"a-b-c".split("-"); // ["a", "b", "c"]
```

Remember:

- `slice()` means **copy a portion** without changing the original.
- `splice()` means **change an array** by removing or inserting elements.
- `split()` means **divide a string** into an array.

## Important distinctions

- `slice()` copies a range and does not mutate; `splice()` removes or inserts
  array elements and does mutate.
- `split()` goes from string to array; `join()` goes from array to string.
- `reverse()` mutates an array; `[...array].reverse()` preserves the original.
- `map()` transforms every array element; `forEach()` is for side effects and
  returns `undefined`.
- `filter()` keeps matching elements; `find()` returns only the first match.
- `sort()` also mutates an array. For numbers, use `(a, b) => a - b` because
  the default sort compares values as strings.
