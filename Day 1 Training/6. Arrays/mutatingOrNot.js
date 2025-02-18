// QUESTION
// 2) What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:
// ○ push
// ○ pop
// ○ filter
// ○ find
// ○ sort
// ○ map

let array = [1, 2, 3, 4, 5];

array.push(7);
console.log(array); // Is a Mutating method as it modifies original array

array.pop();
console.log(array); // Is a Mutating method as it modifies original array

array.filter((i) => i % 2 == 0);
console.log(array); // Is NOT a Mutating method as it returns a filtered array, but doesn't modify original array

array.find((i) => i == 3);
console.log(array); // Is NOT a Mutating method as it returns the first value satisfying condition provided, but doesn't modify original array

array.sort();
console.log(array); // Is NOT a Mutating method as it returns a sorted array, but doesn't modify original array

array.map((i) => i + 10);
console.log(array); // Is NOT a Mutating method as it returns the mapped and updated array, but doesn't modify original array
