const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#winningScore");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1ScoreDisplay.classList.add("winner");
      p2ScoreDisplay.classList.add("loser");
    }
    p1ScoreDisplay.innerText = p1Score;
  }
});
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2ScoreDisplay.classList.add("winner");
      p1ScoreDisplay.classList.add("loser");
    }
    p2ScoreDisplay.innerText = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  p1Score = 0;
  p1ScoreDisplay.innerText = p1Score;
  p2Score = 0;
  p2ScoreDisplay.innerText = p2Score;
  isGameOver = false;
  p1ScoreDisplay.classList.remove("winner", "loser");
  p2ScoreDisplay.classList.remove("winner", "loser");
}
