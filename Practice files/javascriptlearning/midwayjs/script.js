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
