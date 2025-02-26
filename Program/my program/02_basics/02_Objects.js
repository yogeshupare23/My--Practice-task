// Object literals
const JsUser = {
  name: "yogesh",
  age: 24,
  location: "Beed",
};

// console.log(JsUser["name"]);
// console.log(JsUser["age"]);

// JsUser.greeting = function () {
//   console.log(`Welcome ${this.name}`);
// };

// console.log(JsUser.greeting());

//part2
// singleton Objects

// const appUser = new Object();
// console.log(appUser);

//adding key-value is object

const appUser1 = {};
appUser1.id = "5345";
appUser1.name = "yogesh";
appUser1.isLoggesIn = false;

// console.log(appUser1);

// Object within Object

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Yogesh",
      lastname: "Upare",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

//combine object

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const Users = [
  {
    id: 1,
    email: "A@gmal.com",
  },
  {
    id: 1,
    email: "A@gmal.com",
  },
  {
    id: 1,
    email: "A@gmal.com",
  },
  {
    id: 1,
    email: "A@gmal.com",
  },
];

Users[1].email;
// console.log(appUser1);

// console.log(Object.keys(appUser1));
// console.log(Object.values(appUser1));
// console.log(Object.entries(appUser1));
let person = {
  name: "Alice",
};
console.log(person.__proto__); // Outputs: Object.prototype
