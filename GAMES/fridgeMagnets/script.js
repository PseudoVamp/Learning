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
const createButtons = (x, y) => {
  for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = randomWords[Math.floor(Math.random() * 10000) + 1];
    btn.className = y + "wordHolderButton";
    x.appendChild(btn);
    btn.id = y + i;
  }
};

//calls creatbuttons and assigns id's to each individual button
createButtons(buttons1, "grpOne");
createButtons(buttons2, "grpTwo");
createButtons(buttons3, "grpThree");
createButtons(buttons4, "grpFour");
createButtons(buttons5, "grpFive");

//function to add event listeners to all buttons to update each of their relative words
const addingClickers = (x, y, z) => {
  for (let i = 0; i < 10; i++) {
    x.addEventListener("click", function () {
      y.innerText = z + i.innerText;
    });
  }
};
//calls addingClickers on buttons and assigns what word to update with each click
addingClickers(buttons1, word1, "#grpOne");
addingClickers(buttons2, word2, "#grpTwo");
addingClickers(buttons3, word3, "#grpThree");
addingClickers(buttons4, word4, "#grpFour");
addingClickers(buttons5, word5, "#grpFive");

// const addingClickers = (x, y) => {
//     for (let i = 0; i < 10; i++) {
//       x.addEventListener("click", function () {
//         let newWord = x.innerText;
//         y.innerText = newWord;
//       });
//     }
//   };
const updateWord = (x, y) => {
  //   console.log(this.innerText);
  y.innerText = buttons1.innerText;
};

console.log(groupOne.innerText);
