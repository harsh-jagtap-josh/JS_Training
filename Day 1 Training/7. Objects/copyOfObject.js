// 1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

let a = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

let NewA = { ...a, address: { ...a.address, details: [...a.address.details] } };
NewA.address.details[0] = "5";
console.log(a);
console.log(NewA);

// 2. Write a function filterObj that will filter out all the keys of a flat object
//  that have objects or arrays using Object.keys and Object.entries. Example:

// let obj = {
//   a: "Apple",
//   b: ["Basketball", "Baseball"],
//   c: {
//     call: "cellphone",
//   },
//   d: "Dog",
// };

// const filterObject = (obj) => {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);

//   let newObj = {};
//   for (let i = 0; i < keys.length; i++) {
//     if (typeof obj[keys[i]] != "object") {
//       newObj[keys[i]] = values[i];
//     }
//   }
//   return newObj;
// };

// filteredObj = filterObject(obj);
// console.log(filteredObj);
