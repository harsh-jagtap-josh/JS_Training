// QUESTION -->

// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed

class Schema {
  constructor({
    name = "",
    email = "",
    age = 0,
    password = "",
    confirmpassword = "",
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
    this.confirmpassword = confirmpassword;
  }

  required(att, name) {
    if (typeof att === "number") {
      if (att === 0) {
        console.log(name, "is a required field!");
        return false;
      }
      return true;
    }
    if (typeof att === "string") {
      if (att === "") {
        console.log(name, "is a required field");
        return false;
      } else {
        return true;
      }
    }
  }

  checkRequired() {
    if (!this.required(this.name, "Name")) {
      return false;
    }
    if (!this.required(this.email, "Email")) {
      return false;
    }
    if (!this.required(this.age, "Age")) {
      return false;
    }
    if (!this.required(this.password, "Password")) {
      return false;
    }
    if (!this.required(this.confirmpassword, "Confirm Password")) {
      return false;
    }
    return true;
  }

  validateName() {
    if (this.name.length > 30) {
      console.log("Name is too big");
      return false;
    }
    if (this.name.length < 5) {
      console.log("Name is too small");
      return false;
    }
    return true;
  }

  validateAge() {
    if (this.age > 100 || this.age < 1) {
      console.log("Invalid age");
      return false;
    }
    return true;
  }

  validatePassword() {
    if (this.password.length > 10) {
      console.log("Password is very long, make it short!");
      return false;
    }

    if (this.password.length < 4) {
      console.log("Password is too short, make it long!");
      return false;
    }

    if (this.password !== this.confirmpassword) {
      console.log("Password and Confirm password don't match!");
      return false;
    }
    return true;
  }

  validate() {
    if (!this.checkRequired()) {
      return;
    }
    if (!this.validateName()) {
      return;
    }
    if (!this.validateAge()) {
      return;
    }
    if (!this.validatePassword()) {
      return;
    }
    console.log("Validation successfull!");
  }
}

let User = new Schema({
  name: "Harsh",
  email: "asdf",
  password: "asdfasdf",
  age: 10,
  confirmpassword: "asdfasdf",
});
User.validate();
