let myArray = [1, 2, 3, 4];
// map
myArray.map((el) => el + 1); // [2,3,4,5]
myArray.map(() => "b"); // ['b', b',b',b']

// filter
myArray = [1, 3, 5, 7, 9];
myArray.filter((el) => el > 4); // [5 , 7, 9]

// reduce
// reduce is a great array method to use when we want to do two things:
// 1) when wanna end up with one value in the end
// 2) when we want to persist the return or the outcome of iterating over our elements in each subsequent iteration
let array = [1, 2, 3, 4, 5];
array.reduce((accumulator, currentElement) => accumulator + currentElement, 0); // 15
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
array.reduce((accumulator, currentElement) => accumulator + currentElement, 10); // 25

// find
myArray = [1, 3, 5, 7, 9];
myArray.find((el) => el == 5); // 5 (give us the first matched element)
myArray.find((el) => el > 4); // 5
let peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];
peopleArray.find((person) => person.id === 4); // {id:4}

// includes
myArray = [1, 2, 3, 4, 5];
myArray.includes(3); // true
myArray.includes(9); // false

// if myArray inclues 2 starting from index number of 3
myArray.includes(2, 3); // false
myArray.includes(2, 1); // true

let newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

newArray.includes({ id: 2 }); // false: This is because of the way that JavaScript references Objects versus premitive types
// FYI: 6 primitive types
// string, boolean, null, undefined, number, symbol
const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };
newArray = [o1, o2, o3];
newArray.includes(o2); // true
