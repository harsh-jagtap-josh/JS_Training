// Use the typeof operator to find the types of different variables. 
// Specially note what typeof operator returns for arrays, null values and NaN. 
// How can you find if a variable an array or NaN besides typeof? 

let a = 10;
let b = "string"
let c = true
let d = {a: "This is an object"}
let f = 1.1;
let u = undefined;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(f, typeof f);
console.log(u, typeof u);

// ======================================================================================================================

// QUESTION
// --> Return type for typeof operators for Arrays, Null values and NaN:

let arr = [1,2,3,3,4]
let n = null;
let nan = NaN;

console.log(typeof arr);
console.log(typeof n);
console.log(typeof nan);

// ANSWER
// --> It return type `object` for arrays and null values, and type `number` for NaN 

// ======================================================================================================================

// QUESTION
// How can you find if a variable an array or NaN besides typeof? 

// --> for NaN we can use `isNaN()` function provided by javascript to find if the variable is NaN without using `typeof`

console.log(isNaN(10));
console.log(isNaN(NaN));

// --> for arrays we can use `Array.isArray()` built-in function provided by javascript to find if variable is an Array without using `typeof`

array1 = [1,2,3,4]
array2 = "string"

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
