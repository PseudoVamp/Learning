// const myMath = {
//   PI: 3.1459,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };
const myMath = {
  PI: 3.1459,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const square = {
  area(x) {
    return x * x;
  },
  perimeter(x) {
    return x * 4;
  },
};

const cat = {
  name: "Zelda Mii",
  color: "Black and White",
  breed: "Danger Floof",
  meow() {
    console.log(`${this.name} says MEOW`);
  },
};

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time!");
  }
}

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print(element) {
  console.log(element);
}
//three ways to print each variable in the above array
oneToTen.forEach(print);

oneToTen.forEach(function (el) {
  console.log(el);
});

for (let el of oneToTen) {
  console.log(el);
}

const oneToTenDoubled = oneToTen.map(function (num) {
  return num * 2;
});
console.log(oneToTenDoubled);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

// Write your code here
const firstNames = fullNames.map(function (fNames) {
  return fNames.first;
});

const squared = (x) => {
  return x * x;
};

const adding = (x, y) => {
  return x + y;
};
// or
const add = (a, b) => a + b;

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };   ----- could be written as below

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const greet = (x) => {
  return "Hey " + x + "!";
};

// set timeout//
setTimeout(() => {
  console.log("Hello");
}, 3000);

const id = setInterval(() => {
  console.log(Math.random());
}, 3000);

// clearInterval(id); to make it stop

const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findingFour = tenNumbers.filter((n) => {
  return n === 4;
});

const lowNumbers = tenNumbers.filter((x) => x < 5);

// SOME and EVERY tests

const exams = [80, 90, 99, 65, 32, 77, 88, 94, 45, 60, 90, 99];

exams.every((score) => score >= 75);
//false
exams.every((score) => score >= 30);
// true

exams.some((score) => score >= 50);
// checks if SOME of the scores are above 50

// i dont understand this- please come back to learn more!!!
// checks if an array is all even numbers?!? done differently
const allEvens = (nums) => {
  const isAllEven = nums.every((num) => num % 2 === 0);
  return isAllEven;
};

// using REDUCE
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

const totalPrice = prices.reduce((total, price) => {
  return total + price;
});

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// roll die with default parameters - can pass in nothing and defaults to 6
function diceRoll(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
// using default params in multiples, have the defaults be the last thing in case its left off
function defaultParamGreet(person, msg = "Heyo", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}

//spread - takes an array and treats the contents as individual arguments ( its the ...) math.max or math.min finds largest or smallest number
const spreadNums = [
  50, 29, 11, 99, 1250, 9595, 296, 912959, 109, 1, 5, 51, 23, 90,
];
console.log(Math.max(...spreadNums));

const spreadCats = ["Zelda", "Meow Face", "Chonk"];
const spreadDogs = ["Luke", "Piper", "Jackson", "Max"];
// spread to bring arrays together into a new larger array
const spreadPets = [...spreadCats, ...spreadDogs];

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
//used to combine OJBECTS together to form a new object
// family is common between them, the last one to have that descriptor will be the one that "wins" and is placed in the new array
const catDog = { ...feline, ...canine };
//can spready objects into strings / strings into arrays. will use the indicies of them as the key to the value

///REST similar to spread with the ... collects all the REST of the numbers
function tryingRest(...nums) {
  console.log(nums);
}
// rest puts everyone else into an ARRAY
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold goes to ${gold}`);
  console.log(`Silver goes to ${silver}`);
  console.log(`And thanks to everyone else: ${everyoneElse}`);
}

//destructuring arrays
const destructingArray = [
  91293, 12591259, 1369, 123995, 91239129, 125991529, 63193916, 1299539, 13699,
];

const [firstItem, secondItem, ...everythingElse] = destructingArray;

//destructuring objects
const websiteUser = {
  email: "jason@guitarjason.com",
  password: "poopsies",
  firstName: "Jason",
  lastName: "Campbell",
  born: 1990,
};

const { email, firstName, lastName } = websiteUser;
// colon here asigns it to a newer name variable
const { born: birthYear } = websiteUser;
//destructing with string template literals
// long way below, followed by shorter way
// function fullName(websiteUser) {
//   const { firstName, lastName } = websiteUser;
//   return `${firstName} ${lastName}`;
// }
function fullName({ firstName, lastName = "N/A" }) {
  return `${firstName} ${lastName}`;
}
