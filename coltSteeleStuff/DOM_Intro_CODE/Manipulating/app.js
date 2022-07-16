const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

const banner = document.getElementById("banner");
// careful, this does not work like an ARRAY
const images = document.getElementsByTagName("img");
for (let img of images) {
  console.log(img.src);
}

const squareImages = document.getElementsByClassName("square");

//query selector! newer and better?!
document.querySelector(".square");
document.querySelector('a[title="java"]');
document.querySelectorAll("p");
document.querySelectorAll("p a");

document.querySelector("p").innerText;
document.querySelector("p").innerText = "lololol";
document.querySelector("h1").innerHTML = "<i>CHICKIE</i>";

const h1 = document.querySelector("h1");

for (let link of allLinks) {
  link.style.color = "rgb(0, 108,134)";
}

window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll("span");
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}

const h2 = document.querySelector("h2");

h2.classList.toggle("purple");
h2.classList.add("border");

//toggle highlight on all the li items
// const lis = document.querySelectorAll('li');
// for (let i = 0; i < lis.length; i++){
//     lis[i].classList.toggle('highlight');
// }

const firstBold = document.querySelector("b");
const paragraph = firstBold.parentElement;

// append and prepend
const newH3 = document.createElement("h3");
newH3.innerText = "I am new";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("I am some new text put in here by append");
p.append("Here is another piece added", "Now the third piece");
const newB = document.createElement("b");
newB.append("BOLDED APPENDER");
p.prepend(newB);

// adding an h2 between two elements
const header2 = document.createElement("h2");
header2.append("This is a new h2 added a weird way");
// const h1 = document.querySelector("h1"); already added
h1.insertAdjacentElement("afterend", header2);

// adding 100 buttons to the page...
// for (let i = 0; i<100; i++){
//   const newButton = document.createElement("button");
// newButton.innerText = "I am new";
// const elem = document.getElementById('container');
// container.appendChild(newButton);
// }

//remove something from the page
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);
//or
const b = document.querySelector("b");
b.parentElement.removeChild(b);
//much easier remove below
const img = document.querySelector("img");
img.remove();
