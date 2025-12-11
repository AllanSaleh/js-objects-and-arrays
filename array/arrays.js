// Arrays are the same as Python lists
// Order collections of any elements
// access using indecies
// 0 - based index (starts at 0)

let fruits = ["apple", "banana", "pear"]
const mixedArray = ["Hello", 12, true, {name: "object"}]

console.log(fruits)
console.log(mixedArray)


// Accessing Arrays
console.log("======== Accessing Arrays ===========")
console.log(fruits[1])
console.log(fruits[fruits.length - 1]) //Calculates the last index in an array

// Array methods

const numbers = [1,2,3,4,5,6]

// adding elements
numbers.push(7) //Adds to the end of the array O(1)
numbers.unshift(0) //Adds to the beginning of the array O(n)

console.log(numbers)

// removing elements
let lastIttemRemoved = numbers.pop() //removes and returns the last item that was removed O(1)
console.log(numbers)
console.log("Last item that was popped", lastIttemRemoved)

let firstNumber = numbers.shift() //removes and returns the first item from the beginning of array that was removed O(n)

console.log(numbers)
console.log("First item that was removed from beginnning", firstNumber)

// let middleItem = numbers.pop(1) Cannot remove item from specific location with pop function

// Slice vs. Splice

console.log("Slice VS Splice")

let sliced = numbers.slice(1, 4) //Out-of-place (non-destructive)
console.log(sliced)
console.log(numbers)


const nums = [1,2,3,4,5,6,7]
// SPLICE: arr.splice(start_inclusive, delete_count, elements to add)
// Splice allows us to remove, replace, or insert elements at any position of an array
// let spliced = nums.splice(2, 3) Removing 3 elements at index 2
// let spliced = nums.splice(2, 3, 'a', 'b') Replacing
let spliced = nums.splice(2, 0, 'a', 'b') // insert elements at a specific index


console.log(nums)
console.log(spliced)

// Iterating over arrays

// For of Loop
// Allos you to directly loop over items in an array

fruits = ["apple", "banana", "pear"]
for (let fruit of fruits){
    console.log(fruit)
}

for (let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i])
}

// .forEach() Method

// foreach:  run this fucntion for ever element in this array
fruits.forEach(fruit => {
    capFruit = fruit.toUpperCase()
    console.log(capFruit)
})

console.log(fruits)

// .map method
// syntax: array.map(callbackFn): returns a new array of modified items

let capFruits = fruits.map(fruit => fruit.toUpperCase())
console.log(capFruits)

console.log(fruits)

// .filter method
// syntax: array.filter(callbackFn that produce true of false) return a new list of all items that "passed" the test

const numbs = [1,2,3,4,5,6,7,8]

let evens = numbs.filter(num => num % 2 === 0); //Checking if each number is even, if so, allow through to output list

console.log(evens)

