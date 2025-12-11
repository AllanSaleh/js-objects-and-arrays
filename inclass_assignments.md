# Lesson 3: Objects & Arrays - In-Class Assignments

## Assignment 1: Book Object Builder

### Objective
Create a book object with basic properties and one method that returns information.

### Requirements
1. Create a `book` object with these properties:
   - `title` (book title)
   - `author` (author name)
   - `pages` (number of pages)
   - `isRead` (boolean - true if you've read it, false if not)

2. Add one method called `getBookInfo()` that:
   - Returns a formatted string with all book information
   - Shows "read" or "not read" based on the `isRead` property
   - Uses `this` to access object properties
   - Uses template literals for string formatting

### Test Your Code
```javascript
// Call the getBookInfo method
console.log(book.getBookInfo());

// Change the isRead property and test again
book.isRead = true;
console.log(book.getBookInfo());
```

---

## Assignment 2: Shopping Cart System

### Objective
Build a shopping cart system using array methods for item management and calculations.

### Requirements
1. Create a `shoppingCart` object with:
   - `items` array (initially empty)
   - `addItem(name, price, quantity)` method
   - `removeItem(name)` method
   - `updateQuantity(name, quantity)` method
   - `calculateSubtotal()` method
   - `applyDiscount(percentage)` method
   - `displayCart()` method

2. The `addItem` method should:
   - Add new items or update quantity if item already exists
   - Store item as object with name, price, and quantity

3. The `removeItem` method should:
   - Remove item completely from the cart

4. The `updateQuantity` method should:
   - Update quantity of existing item

5. The `calculateSubtotal` method should:
   - Calculate total price of all items
   - Use array methods (reduce, map, etc.)

6. The `applyDiscount` method should:
   - Apply percentage discount to subtotal
   - Return discounted total

7. The `displayCart` method should:
   - Show all items with quantities and prices
   - Display subtotal

### Test Your Code
```javascript
// Test your shopping cart
shoppingCart.addItem("Laptop", 999.99, 1);
shoppingCart.addItem("Mouse", 29.99, 2);
shoppingCart.addItem("Keyboard", 79.99, 1);
shoppingCart.displayCart();

console.log("Subtotal:", shoppingCart.calculateSubtotal());
console.log("With 10% discount:", shoppingCart.applyDiscount(10));

// Test removing an item
shoppingCart.removeItem("Mouse");
shoppingCart.displayCart();
```

---
