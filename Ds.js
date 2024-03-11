let fruits = ["Apple", "Banana", "Orange"];

// Accessing elements in the array
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Orange"

// Modifying an element in the array
fruits[1] = "Grapes";
console.log(fruits); // Output: ["Apple", "Grapes", "Orange"]

// Adding elements to the array
fruits.push("Strawberry");
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Strawberry"]

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Grapes", "Orange"]

// Getting the length of the array
console.log(fruits.length); // Output: 3
