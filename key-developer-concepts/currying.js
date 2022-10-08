// currying: is the techniqe of translating the evaluation of a function that takes multiple arguments
// a method to save memory
const multiply = (a, b) => a * b;
multiply(3, 4); // 12

const curriedMultiply = (a) => (b) => a * b; // 12
curriedMultiply(5)(3); // 12
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(4); // 20 // only run (b)=>a*b part
