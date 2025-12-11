# Objects & Arrays - Quick Reference Cheat Sheet

## Objects

### Creation & Access
```javascript
// Object creation
const obj = {key: value, key2: value2};
const obj = new Object();

// Property access
obj.key                    // Dot notation
obj["key"]                 // Bracket notation
obj[variable]              // Dynamic key

// Adding/Modifying properties
obj.newKey = value;
obj["newKey"] = value;
```

### Object Methods
```javascript
// Object methods
Object.keys(obj)           // Get all keys
Object.values(obj)         // Get all values
Object.entries(obj)        // Get key-value pairs
Object.assign(target, source) // Copy properties
Object.freeze(obj)         // Make immutable
```

### Object Iteration
```javascript
// For...in loop
for (let key in obj) {
    console.log(key, obj[key]);
}

// Object.entries with forEach
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});
```

### Object Methods (Functions as Properties)
```javascript
const calculator = {
    result: 0,
    add: function(num) {
        this.result += num;
        return this; // For chaining
    },
    reset: function() {
        this.result = 0;
        return this;
    }
};
```

---

## Arrays

### Creation & Access
```javascript
// Array creation
const arr = [1, 2, 3];
const arr = new Array(1, 2, 3);
const arr = Array.from(iterable);

// Access elements
arr[0]                     // First element
arr[arr.length - 1]        // Last element
arr.length                 // Array length
```

### Adding/Removing Elements
```javascript
// Adding elements
arr.push(item)             // Add to end
arr.unshift(item)          // Add to beginning
arr.splice(index, 0, item) // Insert at index

// Removing elements
arr.pop()                  // Remove from end
arr.shift()                // Remove from beginning
arr.splice(index, count)   // Remove count elements from index
```

### Array Methods

#### Non-Mutating Methods
```javascript
arr.slice(start, end)      // Extract portion (new array)
arr.concat(arr2)           // Combine arrays (new array)
arr.join(separator)        // Convert to string
arr.indexOf(item)          // Find first index
arr.lastIndexOf(item)      // Find last index
arr.includes(item)         // Check if contains item
```

#### Iteration Methods
```javascript
arr.forEach(callback)      // Execute for each element
arr.map(callback)          // Transform each element (new array)
arr.filter(callback)       // Select elements (new array)
arr.find(callback)         // Find first matching element
arr.findIndex(callback)    // Find first matching index
arr.some(callback)         // Check if any element matches
arr.every(callback)        // Check if all elements match
arr.reduce(callback, initial) // Accumulate values
```

#### Sorting & Reversing
```javascript
arr.sort()                 // Sort alphabetically
arr.sort((a, b) => a - b)  // Sort numerically
arr.reverse()              // Reverse array (mutating)
```

### Method Chaining
```javascript
const result = arr
    .filter(item => item > 5)
    .map(item => item * 2)
    .sort((a, b) => b - a);
```

---

## Destructuring

### Object Destructuring
```javascript
const {prop1, prop2} = obj;
const {prop1: newName} = obj;
const {prop1, prop2 = defaultValue} = obj;
const {nested: {prop}} = obj;
const {prop1, ...rest} = obj;
```

### Array Destructuring
```javascript
const [first, second] = arr;
const [first, , third] = arr;
const [first, ...rest] = arr;
const [first, second = defaultValue] = arr;
```

### Function Parameters
```javascript
function func({prop1, prop2}) { }
function func([first, second]) { }
```

---

## Template Literals

### Basic Syntax
```javascript
const str = `Hello ${name}!`;
const multiLine = `
    Line 1
    Line 2
`;
```

### Expressions
```javascript
const result = `Sum: ${a + b}`;
const conditional = `Status: ${isActive ? 'Active' : 'Inactive'}`;
```

### Tagged Templates
```javascript
function tag(strings, ...values) {
    // Process template literal
}
const result = tag`Hello ${name}!`;
```

---

## JSON

### Converting to JSON
```javascript
JSON.stringify(obj)        // Convert to JSON string
JSON.stringify(obj, null, 2) // Pretty print
JSON.stringify(obj, replacer) // Custom replacer function
```

### Parsing JSON
```javascript
JSON.parse(jsonString)     // Parse JSON string
```

### Error Handling
```javascript
try {
    const obj = JSON.parse(jsonString);
} catch (error) {
    console.error('Invalid JSON:', error.message);
}
```

---

## Common Patterns

### Object Property Checking
```javascript
'key' in obj               // Check if property exists
obj.hasOwnProperty('key')  // Check own property
obj.key !== undefined      // Check if defined
```

### Array Element Checking
```javascript
arr.includes(item)         // Check if contains
arr.indexOf(item) !== -1   // Check if contains
arr.some(item => condition) // Check if any matches
arr.every(item => condition) // Check if all match
```

### Safe Property Access
```javascript
obj?.prop?.nested          // Optional chaining
obj && obj.prop && obj.prop.nested // Traditional way
```

### Array/Object Copying
```javascript
const arrCopy = [...arr];           // Shallow copy array
const objCopy = {...obj};           // Shallow copy object
const deepCopy = JSON.parse(JSON.stringify(obj)); // Deep copy
```

---

## Python vs JavaScript Quick Reference

| Python | JavaScript |
|--------|------------|
| `dict = {"key": value}` | `const obj = {key: value}` |
| `dict["key"]` | `obj.key` or `obj["key"]` |
| `list = [1, 2, 3]` | `const arr = [1, 2, 3]` |
| `list.append(item)` | `arr.push(item)` |
| `list.pop()` | `arr.pop()` |
| `len(list)` | `arr.length` |
| `list[1:3]` | `arr.slice(1, 3)` |
| `f"Hello {name}"` | `` `Hello ${name}` `` |
| `json.dumps(obj)` | `JSON.stringify(obj)` |
| `json.loads(str)` | `JSON.parse(str)` |

---

## Common Gotchas

### Object References
```javascript
const obj1 = {a: 1};
const obj2 = obj1;        // Same reference!
obj2.a = 2;
console.log(obj1.a);      // 2 (not 1!)
```

### Array References
```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;        // Same reference!
arr2.push(4);
console.log(arr1);        // [1, 2, 3, 4]
```

### Mutating vs Non-Mutating
```javascript
// Mutating methods (change original)
arr.push(item);
arr.pop();
arr.sort();
arr.reverse();

// Non-mutating methods (return new array)
arr.slice();
arr.map();
arr.filter();
arr.concat();
```

### Destructuring Defaults
```javascript
const {name = "Unknown"} = obj; // Only if undefined
const {name = "Unknown"} = {name: null}; // null is not undefined!
```

---

## Performance Tips

### Array Methods
- Use `for` loop for simple iterations (fastest)
- Use `forEach` for readability
- Use `map`/`filter` for transformations
- Avoid nested loops when possible

### Object Operations
- Use `Object.keys()` for iteration
- Use `Object.hasOwnProperty()` for property checks
- Avoid deep nesting when possible

### Memory Management
- Use `delete obj.prop` to remove properties
- Use `arr.length = 0` to clear arrays
- Be careful with closures and references

---

## Debugging Tips

### Console Methods
```javascript
console.log(obj);         // Basic logging
console.table(arr);       // Table format
console.dir(obj);         // Detailed object view
console.group("Label");   // Grouped logging
console.groupEnd();
```

### Common Errors
- `Cannot read property 'x' of undefined` - Check if object exists
- `TypeError: arr.map is not a function` - Check if it's an array
- `SyntaxError: Unexpected token` - Check JSON syntax
- `ReferenceError: Cannot access before initialization` - Check variable scope

---

## Quick Fixes

### Safe Array Access
```javascript
const first = arr[0] || defaultValue;
const last = arr[arr.length - 1] || defaultValue;
```

### Safe Object Access
```javascript
const value = obj?.prop?.nested || defaultValue;
const value = obj && obj.prop && obj.prop.nested;
```

### Array Validation
```javascript
if (Array.isArray(arr)) {
    // Safe to use array methods
}
```

### Object Validation
```javascript
if (typeof obj === 'object' && obj !== null) {
    // Safe to use object methods
}
```