const oneToTwo = document.getElementById("1-2");
const oneToSix = document.getElementById("1-6");
const oneToTen = document.getElementById("1-10");
const oneToTwenty = document.getElementById("1-20");
const yourRoll = document.getElementById("yourRoll");

function oneRollTwo() {
  let rollTwo = Math.floor(Math.random() * 2) + 1;
  yourRoll.innerText = "Your roll is: " + rollTwo;
}
function oneRollSix() {
  let rollSix = Math.floor(Math.random() * 6) + 1;
  yourRoll.innerText = "Your roll is: " + rollSix;
}
function oneRollTen() {
  let rollTen = Math.floor(Math.random() * 10) + 1;
  yourRoll.innerText = "Your roll is: " + rollTen;
}
function oneRollTwenty() {
  let rollTwenty = Math.floor(Math.random() * 20) + 1;
  yourRoll.innerText = "Your roll is: " + rollTwenty;
}

oneToTwo.addEventListener("click", function () {
  oneRollTwo();
});
oneToSix.addEventListener("click", function () {
  oneRollSix();
});
oneToTen.addEventListener("click", function () {
  oneRollTen();
});
oneToTwenty.addEventListener("click", function () {
  oneRollTwenty();
});
