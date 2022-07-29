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
note0.innerText = scaleNotes[startSpot] + " - I";
note1.innerText = scaleNotes[startSpot + 2] + " - ii";
note2.innerText = scaleNotes[startSpot + 4] + " - iii";
note3.innerText = scaleNotes[startSpot + 5] + " - IV";
note4.innerText = scaleNotes[startSpot + 7] + " - V";
note5.innerText = scaleNotes[startSpot + 9] + " - vi";
note6.innerText = scaleNotes[startSpot + 11] + " - vii°";
note7.innerText = scaleNotes[startSpot + 12] + " - I";
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
    note0.innerText = scaleNotes[startSpot] + " - I";
    note1.innerText = scaleNotes[startSpot + 2] + " - ii";
    note2.innerText = scaleNotes[startSpot + 4] + " - iii";
    note3.innerText = scaleNotes[startSpot + 5] + " - IV";
    note4.innerText = scaleNotes[startSpot + 7] + " - V";
    note5.innerText = scaleNotes[startSpot + 9] + " - vi";
    note6.innerText = scaleNotes[startSpot + 11] + " - vii°";
    note7.innerText = scaleNotes[startSpot + 12] + " - I";
  } else if (mode === "Dorian") {
    note0.innerText = scaleNotes[startSpot] + " - ii";
    note1.innerText = scaleNotes[startSpot + 2] + " - iii";
    note2.innerText = scaleNotes[startSpot + 3] + " - IV";
    note3.innerText = scaleNotes[startSpot + 5] + " - V";
    note4.innerText = scaleNotes[startSpot + 7] + " - vi";
    note5.innerText = scaleNotes[startSpot + 9] + " - vii°";
    note6.innerText = scaleNotes[startSpot + 10] + " - I";
    note7.innerText = scaleNotes[startSpot + 12] + " - ii";
  } else if (mode === "Phrygian") {
    note0.innerText = scaleNotes[startSpot] + " - iii";
    note1.innerText = scaleNotes[startSpot + 1] + " - IV";
    note2.innerText = scaleNotes[startSpot + 3] + " - V";
    note3.innerText = scaleNotes[startSpot + 5] + " - vi";
    note4.innerText = scaleNotes[startSpot + 7] + " - vii°";
    note5.innerText = scaleNotes[startSpot + 8] + " - I";
    note6.innerText = scaleNotes[startSpot + 10] + " - ii";
    note7.innerText = scaleNotes[startSpot + 12] + " - iii";
  } else if (mode === "Lydian") {
    note0.innerText = scaleNotes[startSpot] + " - IV";
    note1.innerText = scaleNotes[startSpot + 2] + " - V";
    note2.innerText = scaleNotes[startSpot + 4] + " - vi";
    note3.innerText = scaleNotes[startSpot + 6] + " - vii°";
    note4.innerText = scaleNotes[startSpot + 7] + " - I";
    note5.innerText = scaleNotes[startSpot + 9] + " - ii";
    note6.innerText = scaleNotes[startSpot + 11] + " - iii";
    note7.innerText = scaleNotes[startSpot + 12] + " - IV";
  } else if (mode === "Mixolydian") {
    note0.innerText = scaleNotes[startSpot] + " - V";
    note1.innerText = scaleNotes[startSpot + 2] + " - vi";
    note2.innerText = scaleNotes[startSpot + 4] + " - vii°";
    note3.innerText = scaleNotes[startSpot + 5] + " - I";
    note4.innerText = scaleNotes[startSpot + 7] + " - ii";
    note5.innerText = scaleNotes[startSpot + 9] + " - iii";
    note6.innerText = scaleNotes[startSpot + 10] + " - IV";
    note7.innerText = scaleNotes[startSpot + 12] + " - V";
  } else if (mode === "Aeolian") {
    note0.innerText = scaleNotes[startSpot] + " - vi";
    note1.innerText = scaleNotes[startSpot + 2] + " - vii°";
    note2.innerText = scaleNotes[startSpot + 3] + " - I";
    note3.innerText = scaleNotes[startSpot + 5] + " - ii";
    note4.innerText = scaleNotes[startSpot + 7] + " - iii";
    note5.innerText = scaleNotes[startSpot + 8] + " - IV";
    note6.innerText = scaleNotes[startSpot + 10] + " - V";
    note7.innerText = scaleNotes[startSpot + 12] + " - vi";
  } else if (mode === "Locrian") {
    note0.innerText = scaleNotes[startSpot] + " - vii°";
    note1.innerText = scaleNotes[startSpot + 1] + " - I";
    note2.innerText = scaleNotes[startSpot + 3] + " - ii";
    note3.innerText = scaleNotes[startSpot + 5] + " - iii";
    note4.innerText = scaleNotes[startSpot + 6] + " - IV";
    note5.innerText = scaleNotes[startSpot + 8] + " - V";
    note6.innerText = scaleNotes[startSpot + 10] + " - vi";
    note7.innerText = scaleNotes[startSpot + 12] + " - vii°";
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
