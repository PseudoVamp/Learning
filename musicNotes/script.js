//refers to my other .js file and has list of notes in order starting at C
const scaleHolder = document.getElementById("scaleHolder");

//defines the starting spot in the array(which scale note is selected)
//and returns a number to start the formula for the mode on
let startSpot = 0;
let noteSelect = document.getElementById("noteSelect");
noteSelect.addEventListener("change", function () {
  startSpot = parseInt(this.value);
});

//creates the 8 p elements to display the notes in a scale
const createScales = (x, y) => {
  for (let i = 0; i < 8; i++) {
    let notes = document.createElement("p");

    notes.className = "individualNotes";
    x.appendChild(notes);
    notes.id = y + i;
  }
};
//calls function to create the notes and assignes id of note[i] (1-8)
createScales(scaleHolder, "note");
let note0 = document.getElementById("note0");
let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");
let note4 = document.getElementById("note4");
let note5 = document.getElementById("note5");
let note6 = document.getElementById("note6");
let note7 = document.getElementById("note7");
note0.innerText = scaleNotes[startSpot];
note1.innerText = scaleNotes[startSpot + 2];
note2.innerText = scaleNotes[startSpot + 4];
note3.innerText = scaleNotes[startSpot + 5];
note4.innerText = scaleNotes[startSpot + 7];
note5.innerText = scaleNotes[startSpot + 9];
note6.innerText = scaleNotes[startSpot + 11];
note7.innerText = scaleNotes[startSpot + 12];
//
//
//

//below is the same as above except for the mode select
let mode = "Ionian";
let modeSelect = document.getElementById("modeSelect");
modeSelect.addEventListener("change", function () {
  mode = this.value;
});

let getNotes = document.getElementById("getNotes");
getNotes.addEventListener("click", function () {
  if (mode === "Ionian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 2];
    note2.innerText = scaleNotes[startSpot + 4];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 9];
    note6.innerText = scaleNotes[startSpot + 11];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Dorian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 2];
    note2.innerText = scaleNotes[startSpot + 3];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 9];
    note6.innerText = scaleNotes[startSpot + 10];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Phrygian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 1];
    note2.innerText = scaleNotes[startSpot + 3];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 8];
    note6.innerText = scaleNotes[startSpot + 10];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Lydian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 2];
    note2.innerText = scaleNotes[startSpot + 4];
    note3.innerText = scaleNotes[startSpot + 6];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 9];
    note6.innerText = scaleNotes[startSpot + 11];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Mixolydian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 2];
    note2.innerText = scaleNotes[startSpot + 4];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 9];
    note6.innerText = scaleNotes[startSpot + 10];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Aeolian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 2];
    note2.innerText = scaleNotes[startSpot + 3];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 7];
    note5.innerText = scaleNotes[startSpot + 8];
    note6.innerText = scaleNotes[startSpot + 10];
    note7.innerText = scaleNotes[startSpot + 12];
  } else if (mode === "Locrian") {
    note0.innerText = scaleNotes[startSpot];
    note1.innerText = scaleNotes[startSpot + 1];
    note2.innerText = scaleNotes[startSpot + 3];
    note3.innerText = scaleNotes[startSpot + 5];
    note4.innerText = scaleNotes[startSpot + 6];
    note5.innerText = scaleNotes[startSpot + 8];
    note6.innerText = scaleNotes[startSpot + 10];
    note7.innerText = scaleNotes[startSpot + 12];
  }
});
//below is bad,just use for reference
//list of scale... degrees? I need to index from main scaleHolder
//start needs to be root dependant on the "select scale" option,
//and index goes up in number from there dictated below
// const ionian = ["start", 2, 2, 1, 2, 2, 2, 1];
// const dorian = ["start", 2, 1, 2, 2, 2, 1, 2];
// const phrygian = ["start", 1, 2, 2, 2, 1, 2, 2];
// const lydian = ["start", 2, 2, 2, 1, 2, 2, 1];
// const mixolydian = ["start", 2, 2, 1, 2, 2, 1, 2];
// const aeolian = ["start", 2, 1, 2, 2, 1, 2, 2];
// const locrian = ["start", 1, 2, 2, 1, 2, 2, 2];
