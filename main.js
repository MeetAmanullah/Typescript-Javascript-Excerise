"use strict";
// Question 1
let Fruits = ["Apple", "Banana", "Mango", "orange"];
console.log("Fruits:", Fruits);
// Question 2
let numbers = [10, 20, 30, 40];
console.log("Numbers:", numbers);
// Question 3
let thridfruit = Fruits[3];
console.log(thridfruit);
// Question 4
numbers[1] = 25;
console.log(numbers);
// Question 5
Fruits.push('Grapes');
console.log(Fruits);
// Question 6
Fruits.pop();
console.log(Fruits);
// Question 7
Fruits.shift();
console.log(Fruits);
// Question 8
Fruits.unshift("Kiwi");
console.log(Fruits);
// Question 9
Fruits.splice(1, 2);
console.log(Fruits);
// Question 10
Fruits.splice(2, 0, "pear", "pineapple");
console.log(Fruits);
// Question 11
let citrusFruit = Fruits.splice(0, 2);
console.log(citrusFruit);
// Question 12
let lastTwoFruits = Fruits.splice(-2);
console.log(lastTwoFruits);
