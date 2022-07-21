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

const createButtons = (x, y) => {
  for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = randomWords[Math.floor(Math.random() * 10000) + 1];
    btn.className = y + "wordHolderButton";
    x.appendChild(btn);
    btn.id = y + i;
  }
};

createButtons(buttons1, "grpOne");
createButtons(buttons2, "grpTwo");
createButtons(buttons3, "grpThree");
createButtons(buttons4, "grpFour");
createButtons(buttons5, "grpFive");

const addingClickers = (x, y) => {
  for (let i = 0; i < 10; i++) {
    x.addEventListener("click", function () {
      updateWord();
    });
  }
};
addingClickers(buttons1, word1);
addingClickers(buttons2, word2);
addingClickers(buttons3, word3);
addingClickers(buttons4, word4);
addingClickers(buttons5, word5);

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
  y.innerText = this.innerText;
};
