//refers to my other .js file and has list of notes in order starting at C
const scaleHolder = document.getElementById("scaleHolder");

//creates the 8 p elements to display the notes in a scale
const createScales = (x, y) => {
  for (let i = 0; i < 8; i++) {
    let notes = document.createElement("p");
    notes.innerText = scaleNotes[i];
    notes.className = "individualNotes";
    x.appendChild(notes);
    notes.id = y + i;
  }
};

//calls function to create the notes and assignes id of note[i] (1-8)
createScales(scaleHolder, "note");
const indexStart = 445;
//list of scale... degrees? I need to index from main scaleHolder
//start needs to be root dependant on the "select scale" option,
//and index goes up in number from there dictated below
const ionian = [indexStart, 2, 2, 1, 2, 2, 2, 1];
const dorian = ["start", 2, 1, 2, 2, 2, 1, 2];
const phrygian = ["start", 1, 2, 2, 2, 1, 2, 2];
const lydian = ["start", 2, 2, 2, 1, 2, 2, 1];
const mixolydian = ["start", 2, 2, 1, 2, 2, 1, 2];
const aeolian = ["start", 2, 1, 2, 2, 1, 2, 2];
const locrian = ["start", 1, 2, 2, 1, 2, 2, 2];
