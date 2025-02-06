// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument

(() => {
  console.log("Printing before..");

  setTimeout(() => console.log("Printing after.."), 3000);
})();
