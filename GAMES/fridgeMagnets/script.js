let buttons1 = document.querySelector("#buttons1");
let buttons2 = document.querySelector("#buttons2");
let buttons3 = document.querySelector("#buttons3");
let buttons4 = document.querySelector("#buttons4");
let buttons5 = document.querySelector("#buttons5");
let word1 = document.getElementById("word1");
let word2 = document.getElementById("word2");
let word3 = document.getElementById("word3");
let word4 = document.getElementById("word4");
let word5 = document.getElementById("word5");
word1.innerText = randomWords[Math.floor(Math.random() * 10000) + 1];
word2.innerText = randomWords[Math.floor(Math.random() * 10000) + 1];
word3.innerText = randomWords[Math.floor(Math.random() * 10000) + 1];
word4.innerText = randomWords[Math.floor(Math.random() * 10000) + 1];
word5.innerText = randomWords[Math.floor(Math.random() * 10000) + 1];

//creates i#s of buttons in each of the five areas
const createButtons = (x, y, z) => {
  for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = randomWords[Math.floor(Math.random() * 10000) + 1];
    btn.className = y + "wordHolderButton";
    x.appendChild(btn);
    btn.id = y + i;
  }
};
//calls creatbuttons and assigns id's to each individual button
createButtons(buttons1, "grpOne", word1);
createButtons(buttons2, "grpTwo", word2);
createButtons(buttons3, "grpThree", word3);
createButtons(buttons4, "grpFour", word4);
createButtons(buttons5, "grpFive", word5);

// function to add eventlisteners to every button and assign that buttons text to the corresponding word1-5
const addEventClickers = (x, y) => {
  for (let i = 0; i < 10; i++) {
    document.getElementById(x + i).addEventListener("click", function () {
      let text = document.getElementById(x + i).innerHTML;
      y.innerText = text;
    });
  }
};
//calls the add event clickers function
addEventClickers("grpOne", word1);
addEventClickers("grpTwo", word2);
addEventClickers("grpThree", word3);
addEventClickers("grpFour", word4);
addEventClickers("grpFive", word5);
