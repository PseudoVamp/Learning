console.log("Hello");

const playerName = prompt("Please enter your name!");

let userInput = prompt(
  "Hello " +
    playerName +
    " It's nice to meet you. Please choose a direction to start. Enter a direction.forward, backward, left, or right."
);

while ((userInput !== "forward", "backward", "left", "right")) {
  prompt(
    "That is not a valid Direction, please enter forward, backward, left, or right"
  );
}
if (userInput === "forward") {
  console.log("Here is the forward direction.");
}
if (userInput === "backward") {
  console.log("This is the backward direction.");
}
