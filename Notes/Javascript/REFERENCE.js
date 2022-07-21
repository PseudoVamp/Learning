// collection of javascript references

//declaring variables
var notUsedThatOften = "Var used to declare a variable";
let isABetterOption = "Let is able to be changed as you go";
const hopefullyDoesntChange = "sets a constant variable";

//booleans are true or false
let isLoggedIn = false;
let areYouHungry = true;

//Strings and indicies
let myFirstString = "Things inside quotes are strings";
console.log(myFirstString[2]);
// will print out the letter i from the string

//index / slice / replace
let tvShow = "catdog";
tvShow.indexOf("dog"); // 3 is the start of dog
tvShow.slice(3, 6);
//slice returns just "dog" as a new string
//can save it to a new variable
tvShow.replace("dog", "cat");
// will replace and give a new string "catcat"

//String template literals using ` backticks
let product = "Artichoke";
let artichokePrice = "2.25";
let artichokeQty = "22";
console.log(
  `You just bought ${artichokeQty} ${product}s. Total is $${
    artichokePrice * artichokeQty
  }.`
);
// You just bought 22 Artichokes. Total is $49.5.

null;
// setting a value to nothing
undefined;
//javascript saying I don't know?!

//MATH
Math.floor(3.99); //3
Math.pow(2, 5); //32 (2 to the 5th)
Math.round(5.2); // 5
Math.abs(-456); // 456
Math.random(); // any number between 0 and 1, a decimal
Math.floor(Math.random() * 100) + 1; //random number between 1 and 100
> // greater than
< // less than
>=// greater than or equal to
<= //less than or equal to</>
==// equality
!= // not equal to
=== // strict equality
!== //strict non equality
    
//DOUBLE equals, coerces to the same type
5 == 5 //true
"b" == "c" //false
7 == "7" // true
0 == "" // true
true == false // false
0 == false //true
null == undefined //true
//TRIPLE equals, does not convert to same type
5 === 5//true
1 === 2 //false
2 === "2" //false
false === 0 //false
// != , NOT equal
10 != "10" //false
10 !== "10" // true 

//alert and prompt
console.log("Hey there buddy!");
console.alert("WARNING, VIRUS AHEAD!");
console.prompt("Please enter a number!");
let thisPrompt = console.prompt("Enter a number for this prompt");
parseInt(thisPrompt) + 1; // adds one to the user input for thisPrompt


// if and else
let score = 3;
if (score === 3) {
  console.log("Your score is 3!");
} else {
  console.log("Keep playing to get a score of 3 to win!);
}

const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!")
} else {
    console.log("INCORRECT PASSWORD")
}



//listening for keyboard inputs
window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log("UP!");
      break;  
    case 'ArrowDown':
      console.log('DOWN!')
      break;
      case 'ArrowLeft':
        console.log("LEFT!");
        break;
      case 'ArrowRight':
        console.log('RIGHT!')
      break;
      default:
      console.log("IGNORED!")
  }
})



//updating an h1 as we type, going back to blank resets default text
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('input', function(e){
    
    h1.innerText = "Welcome, "+ input.value;
});
input.addEventListener('input',function(e){
    if( input.value === ""){
    h1.innerText = "Enter your Username";
    }
});
