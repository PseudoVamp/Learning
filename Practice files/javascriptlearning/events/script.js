const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me");
  console.log("I hope it worked");
};

function scream() {
  console.log("AHHHHAHAHAHHAHA");
}
btn.onmouseenter = scream;

const bestBtn = document.querySelector("#best");
bestBtn.addEventListener("click", function () {
  console.log("I JUST GOT CLICKED");
});

//hellogoodbye
const hello = document.querySelector("#hello");
const goodbye = document.querySelector("#goodbye");

hello.addEventListener("click", function () {
  console.log("hello");
});
goodbye.addEventListener("click", function () {
  console.log("goodbye");
});
