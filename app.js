// Modern JavaScript Syntax Lab 

// Exercise 1: Applying `Array.prototype.map()`

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const doubledNums = nums.map((num) => {
    return num * 2;
});

console.log(doubledNums);

// Exercise 2: Array Destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

