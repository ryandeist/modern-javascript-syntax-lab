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

// Exercise 3: Object Destructuring

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
const {make, model} = car;

console.log(make);
console.log(model);

// Exercise 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

// Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
// Change the `model` property of `myCar` to 'q7'. Log both objects.
  
const myCar = {...car};

console.log(myCar);

myCar.model = 'q7';

console.log(car);
console.log(myCar);

// Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const propertyName = 'username';

const userProfile = {
    [propertyName] : 'OwnedbyBazooka',
};

console.log(userProfile);

// Exercise 7: Apply `import` and `export`
// see `exportingFile.js` and `importingFile.js`

// Exercise 8: Default Parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function describeNoun(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}`);
}; 

describeNoun();
describeNoun('pencil', 'black');






