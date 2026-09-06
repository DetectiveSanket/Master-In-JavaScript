# Browser Storage: `localStorage` and `sessionStorage`

Browser storage lets a web page remember small pieces of data in the user's browser. It is useful for preferences, temporary form progress, recently selected options, and other non-sensitive client-side data.

The two storage objects you will use most often are:

- `localStorage`: keeps data after the browser tab and browser are closed.
- `sessionStorage`: keeps data only for the current browser tab session.

Both use the same API and both store values as **strings**.

---

## 1. The basic idea

Think of storage as a small key-value cupboard:

```text
key              value
"theme"          "dark"
"language"       "en"
"fontSize"       "18"
```

JavaScript writes a value using a key and later reads it using the same key:

```js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log(theme); // "dark"
```

- The **key** is the name used to find the data.
- The **value** is the data stored under that name.
- Setting the same key again replaces its old value.

The API is synchronous, which means each operation finishes immediately from the code's point of view.

---

## 2. `localStorage` versus `sessionStorage`

| Feature | `localStorage` | `sessionStorage` |
| --- | --- | --- |
| Lifetime | Until code removes it or the user clears site data | Until the page session ends |
| Shared between tabs? | Usually yes for the same origin | No; each tab has its own storage area |
| Survives reload? | Yes | Yes |
| Survives closing the tab? | Yes | No |
| API | Same methods | Same methods |
| Stores | Strings only | Strings only |

A page session normally lasts while its browser tab remains open. Reloading the tab does not normally remove `sessionStorage`; closing the tab ends that session.

### Quick comparison

```js
localStorage.setItem("rememberMe", "true");
// Usually still exists tomorrow.

sessionStorage.setItem("checkoutStep", "2");
// Useful while this tab is open; removed when the tab session ends.
```

Use `localStorage` for a preference that should be remembered. Use `sessionStorage` for temporary state that should not follow the user into a new tab.

---

## 3. The storage API

Both storage objects provide these main methods and properties:

```js
storage.setItem(key, value); // create or replace a value
storage.getItem(key);        // read a value
storage.removeItem(key);     // remove one key
storage.clear();             // remove all keys for this origin
storage.key(index);          // get the key at a numeric position
storage.length;              // number of stored keys
```

Replace `storage` with `localStorage` or `sessionStorage`.

### `setItem()` - save data

```js
localStorage.setItem("username", "Sanket");
sessionStorage.setItem("currentPage", "dashboard");
```

The method returns `undefined`. It does not return the saved value.

If the key already exists, the new value replaces the old value:

```js
localStorage.setItem("theme", "light");
localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme")); // "dark"
```

### `getItem()` - read data

```js
const username = localStorage.getItem("username");
console.log(username); // "Sanket"
```

When the key does not exist, `getItem()` returns `null`:

```js
const missingValue = localStorage.getItem("doesNotExist");
console.log(missingValue); // null
```

Checking for `null` is important because it tells you whether the value was absent.

### `removeItem()` - delete one value

```js
localStorage.removeItem("username");
console.log(localStorage.getItem("username")); // null
```

Removing a key that does not exist does not throw an error.

### `clear()` - delete everything for the current origin

```js
sessionStorage.clear();
```

Be careful: `clear()` removes every key in that storage area for the current origin, including keys created by other parts of your application.

### `length` and `key()` - inspect stored keys

```js
localStorage.setItem("theme", "dark");
localStorage.setItem("language", "en");

console.log(localStorage.length); // 2
console.log(localStorage.key(0)); // "theme" or "language"
```

The numeric order of keys should not be treated as meaningful. If you need predictable names, define them yourself.

---

## 4. Storage values are always strings

This is one of the most important rules:

```js
localStorage.setItem("count", 10);
localStorage.setItem("enabled", true);

console.log(localStorage.getItem("count"));   // "10"
console.log(localStorage.getItem("enabled")); // "true"
```

The original number and boolean types are not preserved.

### Convert a number back

```js
localStorage.setItem("count", String(10));

const count = Number(localStorage.getItem("count"));
console.log(count); // 10
console.log(typeof count); // "number"
```

### Convert a boolean back

```js
localStorage.setItem("enabled", String(true));

const enabled = localStorage.getItem("enabled") === "true";
console.log(enabled); // true
console.log(typeof enabled); // "boolean"
```

Avoid this common mistake:

```js
const enabled = Boolean(localStorage.getItem("enabled"));
```

`Boolean("false")` is `true` because every non-empty string is truthy. Compare the string explicitly instead.

---

## 5. Storing arrays and objects with JSON

Storage cannot directly store an array or object as its original JavaScript type. Use `JSON.stringify()` before saving and `JSON.parse()` after reading.

### Save an object

```js
const user = {
  id: 7,
  name: "Sanket",
  isAdmin: false,
};

localStorage.setItem("user", JSON.stringify(user));
```

### Read an object

```js
const savedUser = localStorage.getItem("user");
const userFromStorage = savedUser ? JSON.parse(savedUser) : null;

console.log(userFromStorage.name); // "Sanket"
```

### Save an array

```js
const todos = [
  { id: 1, title: "Learn storage", completed: true },
  { id: 2, title: "Build a project", completed: false },
];

localStorage.setItem("todos", JSON.stringify(todos));

const savedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(savedTodos[0].title); // "Learn storage"
```

### Safe JSON parsing

Stored data may be missing, manually changed, or corrupted. A reusable helper can protect the application from invalid JSON:

```js
function readJson(key, fallback) {
  const rawValue = localStorage.getItem(key);

  if (rawValue === null) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

const settings = readJson("settings", { theme: "light" });
```

---

## 6. A complete `localStorage` settings example

```js
const settingsKey = "appSettings";

function saveSettings(settings) {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function loadSettings() {
  const rawSettings = localStorage.getItem(settingsKey);

  if (rawSettings === null) {
    return {
      theme: "light",
      language: "en",
    };
  }

  try {
    return JSON.parse(rawSettings);
  } catch {
    return {
      theme: "light",
      language: "en",
    };
  }
}

function clearSettings() {
  localStorage.removeItem(settingsKey);
}

const settings = loadSettings();
settings.theme = "dark";
saveSettings(settings);
console.log(loadSettings()); // { theme: "dark", language: "en" }
```

The pattern is:

1. Choose a stable key.
2. Read the existing value.
3. Use a fallback when no value exists.
4. Parse structured data.
5. Update the JavaScript value.
6. Stringify and save the updated value.

---

## 7. A complete `sessionStorage` example

`sessionStorage` is useful for data that belongs only to the current tab, such as a multi-step form:

```js
const checkoutKey = "checkoutState";

function saveCheckoutState(step, email) {
  sessionStorage.setItem(
    checkoutKey,
    JSON.stringify({
      step,
      email,
    })
  );
}

function loadCheckoutState() {
  const rawState = sessionStorage.getItem(checkoutKey);
  return rawState ? JSON.parse(rawState) : { step: 1, email: "" };
}

saveCheckoutState(2, "user@example.com");
console.log(loadCheckoutState());
```

A second tab normally receives a separate `sessionStorage` area, so its checkout progress does not overwrite the first tab's progress.

---

## 8. Storage is scoped by origin

Storage belongs to an origin, which is the combination of protocol, host, and port:

```text
https://example.com
```

These have separate storage areas:

```text
http://example.com
https://example.com
https://www.example.com
https://example.com:3000
```

This is why `localStorage` from one website cannot be directly read by an unrelated website. It is also why development data at `localhost:3000` may be separate from data at `localhost:5173`.

---

## 9. The `storage` event

The `storage` event lets a page react when storage changes in another document with the same origin.

```js
window.addEventListener("storage", (event) => {
  console.log(event.key);       // changed key
  console.log(event.oldValue);  // previous value
  console.log(event.newValue);  // new value
  console.log(event.url);       // page that made the change
});
```

Important details:

- The event is commonly used to synchronize state between browser tabs.
- A page does not normally receive the event for a change it made to its own storage area.
- `event.key` is `null` when `clear()` caused the change.
- The event applies to `localStorage` and session storage behavior is more limited because sessions are tab-specific.

Example: synchronize a theme between tabs:

```js
window.addEventListener("storage", (event) => {
  if (event.key === "theme" && event.newValue) {
    document.body.dataset.theme = event.newValue;
  }
});
```

---

## 10. Storage is not a database

`localStorage` and `sessionStorage` are appropriate for small, simple values. They are not replacements for a database.

### Good uses

- Theme preference: `"dark"` or `"light"`
- Language preference
- Dismissed notification state
- Recently selected filter
- Temporary multi-step form progress
- A small cached response that can safely be recreated

### Poor uses

- Large files or large datasets
- Complex querying and indexing
- Frequently changing application state
- Data that must be shared securely between users
- Sensitive authentication tokens or private information
- Data that must never be lost

For larger structured client-side data, consider IndexedDB. For server-owned data, use a backend database.

---

## 11. Security rules

### Never trust storage as secure

Users can inspect and change storage through browser developer tools. Treat every stored value as untrusted input.

```js
const role = localStorage.getItem("role");
// Never use this alone to grant server-side permissions.
```

The server must enforce authentication and authorization.

### Do not store secrets in Web Storage

Any JavaScript running on the page can read `localStorage` and `sessionStorage`. If an attacker injects JavaScript through an XSS vulnerability, it may read those values.

Avoid storing:

- Passwords
- Private API keys
- Credit-card information
- Highly sensitive personal information
- Long-lived authentication tokens when safer options are available

For authentication, secure, `HttpOnly`, `Secure`, and appropriately configured cookies are often safer because JavaScript cannot read an `HttpOnly` cookie.

### Escape stored content before rendering

Storage values can be edited by the user. Do not insert them into HTML with `innerHTML` without sanitizing them. Prefer:

```js
const title = localStorage.getItem("title") || "Untitled";
element.textContent = title;
```

---

## 12. Quota and errors

Browsers limit how much Web Storage a site can use. The exact limit depends on the browser and storage conditions. A write can fail, for example when storage is full or unavailable.

Use `try...catch` around storage operations when the application must continue working even if storage cannot be used:

```js
function safelySave(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Could not save browser data:", error);
    return false;
  }
}
```

A resilient application treats storage as an optional enhancement, not as its only source of truth.

---

## 13. Common mistakes

### Mistake 1: Expecting objects to remain objects

```js
localStorage.setItem("user", { name: "Sanket" });
console.log(localStorage.getItem("user")); // "[object Object]"
```

Correct approach:

```js
localStorage.setItem("user", JSON.stringify({ name: "Sanket" }));
```

### Mistake 2: Forgetting that `getItem()` can return `null`

```js
const theme = localStorage.getItem("theme");
// Use a fallback when theme is null.
const selectedTheme = theme || "light";
```

### Mistake 3: Using `Boolean()` on a stored boolean

```js
localStorage.setItem("isOpen", "false");
Boolean(localStorage.getItem("isOpen")); // true: "false" is non-empty
```

Correct approach:

```js
const isOpen = localStorage.getItem("isOpen") === "true";
```

### Mistake 4: Calling `clear()` casually

`clear()` removes all keys for the current storage area. Prefer `removeItem("specificKey")` when you only need to remove one feature's data.

### Mistake 5: Assuming storage is shared by every tab

`localStorage` is shared by same-origin tabs. `sessionStorage` is tied to a tab session. Choose the API based on that lifecycle requirement.

---

## 14. Debugging storage in DevTools

In Chromium-based browsers:

1. Open Developer Tools.
2. Open the **Application** panel.
3. Open **Storage** or **Local Storage**.
4. Select the page's origin.
5. Inspect, edit, or delete keys.
6. Check **Session Storage** separately for tab-specific values.

You can also inspect values in the console:

```js
console.log(localStorage);
console.log(sessionStorage);
console.log(localStorage.getItem("theme"));
```

To reset only one application setting:

```js
localStorage.removeItem("appSettings");
```

To reset all local data for the current origin:

```js
localStorage.clear();
```

---

## 15. Decision guide

Ask this question first: **Should this value remain after the tab and browser are closed?**

- **Yes:** consider `localStorage`.
- **No, only during this tab session:** consider `sessionStorage`.
- **It is sensitive:** do not put it in Web Storage without carefully understanding the security risk.
- **It is large or needs queries:** consider IndexedDB or a server database.
- **It must be available to the server on every request:** consider a properly secured cookie.

---

## Final mental model

```text
localStorage   = same-origin browser memory that persists
sessionStorage = same-origin browser memory for one tab session

setItem        = save a string
getItem        = read a string or null
removeItem     = delete one key
clear          = delete all keys in that storage area
JSON.stringify = object/array -> string
JSON.parse     = string -> object/array
```

The essential workflow is:

```js
const key = "settings";
const value = { theme: "dark" };

localStorage.setItem(key, JSON.stringify(value));

const rawValue = localStorage.getItem(key);
const settings = rawValue ? JSON.parse(rawValue) : null;

console.log(settings); // { theme: "dark" }
```

Once you understand that Web Storage is **origin-scoped, string-only, limited, user-editable, and intended for small client-side data**, you understand the foundation needed to use `localStorage` and `sessionStorage` correctly.
