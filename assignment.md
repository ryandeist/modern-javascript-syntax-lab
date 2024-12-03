# Modern JS Syntax Exercise

## Review: `Array.prototype.map()`
The `Array.prototype.map()` method returns a new array with the results of calling a function on every element in an existing array. This allows for the transformation of each element inside the array, without altering the original.

Take a look at the example below:

```
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

In this example, we’ve used the `Array.prototype.map()` method on `array1 `to generate `array2`. Each element in `array2` is the result of appending `' ice cream'` to the end of a string element in `array1`.

The `Array.prototype.map()` method is used to iterate over `array1`. For every element in `array1`, it will call upon the provided function. When the function is called upon, it receives the current element being processed as an argument. The value returned from the function will take the place of the original element in the new array.

> `Array.prototype.map()` returns a **new array** with altered values. It does *not* alter the original array

### Exercise 1: Applying `Array.prototype.map()`

```
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
```

## Array Destructuring
Array destructuring in JavaScript is a way of unpacking the elements of an array. With array destructuring, we can extract elements from an array and store them in variables with a single line of code.

When we destructure an array, the elements are matched positionally with the variables we define, meaning the order in which we declare variables corresponds with the order of elements in the array.

```
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'
```

In the example above, the first two elements of `petsArray` are unpacked into `firstPet` and `secondPet`.

> You have full control of the variable names!

### Exercise 2: Array Destructuring

```
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
```

## Review: Object Destructuring
Destructuring can also be applied to objects. With object destructuring, we can extract properties from an object. Instead of accessing properties through dot notation or bracket notation, the values of specific properties in an object can be assigned to variables.

```
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'
```

In the example above, the `person` object is deconstructed to extract the `name` and `role` properties. This approach allows us to access the values of `name` and `role` without having to use dot notation for each property.

> Unlike array destructuring, where elements are matched based on their position, the variables created in object destructuring, such as `const { name, role }`, need to match the names of existing properties in the object.

### Exercise 3: Destructuring objects

```
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
```