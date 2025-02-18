// QUESTION 1-5 (ALL Questions)
// 1. Declare a variable let age = 25;. 
//  Write a series of if else statements that will: 
// ○ Print child to the console if age is less than equal to 12. 
// ○ Print teen to the console if age is between 13 and 18 (inclusive). 
// ○ Print adult to the console if age is above 18 

let age = 25;
if (age <= 12) {
    console.log("Child")
} else if (age > 12 && age <= 18) {
    console.log("Teen");
} else {
    console.log("Adult");
}

// ==========================================================================================================================

// 2. Do the same using switch case. 

age = 25

switch (age) {
    case (age <= 12):
        console.log("Child");
        break;
    case (age > 12 && age <= 18):
        console.log("Teen");
        break;
    default:
        console.log("Adult");
        break;
}

// ==========================================================================================================================

// 3. Declare a variable let arraySize = 25;. 
// Using a for loop, add numbers from one onwards into an array till the arraySize is reached. 

let arraySize = 25;

let newArray = []
for (let i = 1; i < arraySize + 1; i++){
    newArray.push(i);
}

console.log(newArray);

// ==========================================================================================================================

// 4. Accomplish the same using a while loop.

let array = [];
let itr = 1;
while (itr <= arraySize) {
    array.push(itr);
    itr++;
}

console.log(array)

// ==========================================================================================================================

// 5. Can you use return instead of break in loops? 
// ANSWER --> yes we can use return instead of break in loops it works the same, but using returns is mostly preferred in functions.

let iter = 5;

while (iter){
    if (iter < 0){
        return;
    }
    console.log(iter);
    iter--
}