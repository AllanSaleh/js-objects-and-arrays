// Basic Object Creation

// Objects are equivalent to Dictionaries in Python
// Key Value Pair structure
// Keys must be unique

const student = {
    name: "Benjamin",
    age: 35,
    major: "Computer Science",
    gpa: 4.0,
    isGraduated: false
}

console.log(student)

// Accessing values in JS Objects
console.log("\n============== Accesssing Properties ============")
console.log("Name:", student["name"]) //Bracket Notation
console.log("Age:", student.age) // Dot Notation
console.log("Major:", student.major)

console.log("\n============== Adding Properties ============")
student["email"] = "benjamin@email.com" //bracket notation
student.gradYear = "2026" //dot notation
console.log(student)

console.log("\n============== Updating Properties ============")
student.gradYear = "2025" //dot notation
student["email"] = "benjamin12@egmail.com" //bracket notation
console.log(student)

// Delete a key value pair
delete student.gradYear;
console.log(student)


const student2 = {
    name: "Benjamin",
    age: 35,
    major: "Computer Science",
    gpa: 4.0,
    isGraduated: false,

    displayProfile: function(){
        console.log("Name", this.name);
        console.log("age", this.age);
        console.log("major", this.major);
        console.log("gpa", this.gpa);
        console.log("isGraduated", this.isGraduated);
    } // Very uncommon as its rare to create a function that's used by one object
}

student2.displayProfile()

// Object Methods
console.log("=== Universal Object Methods ===")
console.log("Keys:", Object.keys(student2)) // Python students2.keys() => list of keys
console.log("Values:", Object.values(student2)) // Python students2.values() => list of keys
console.log("Entries:", Object.entries(student2)) // Python students2.items() => list of keys

