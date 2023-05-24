const root = document.documentElement;

const fretboard = document.querySelector('.fretboard');
const instrumentSelector = document.querySelector('#instrument-selector');
const accidentalSelector = document.querySelector('.accidental-selector');
const numberOfFretsSelector = document.querySelector('#number-of-frets')
const showAllNotesSelector = document.querySelector('#show-all-notes');
const showMultipleNotesSelector = document.querySelector('#show-multiple-notes');
const noteNameSection = document.querySelector('.note-name-section');

let allNotes;
let showMultipleNotes = false;
let showAllNotes = false;
let numberOfFrets = 20;



const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleFretMarkPositions = [12, 24];

const notesFlats = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const notesSharps = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

let accidentals = 'flats';

const instrumentTuningPresets = {
    'Guitar': [4, 11, 7, 2, 9, 4],
    'Bass (4 strings)': [7, 2, 9, 4],
    'Bass (5 strings)': [7, 2, 9, 4, 11],
    'Ukulele': [9, 4, 0, 7]
};
let selectedInstrument = 'Guitar'
let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;

const app = {
    init() {
        this.setUpFretboard();
        this.setUpinstrumentSelector();
        this.setUpNoteNameSection();
        this.setUpEventListeners();
    },
    setUpFretboard() {
        fretboard.innerHTML = '';
        root.style.setProperty('--number-of-strings', numberOfStrings);
        // Add strings to fretboard
        for(let i = 0; i < numberOfStrings; i++) {
            let string = tools.addElement('div');
            string.classList.add('string');
            fretboard.appendChild(string);

            // Create frets
            for (let fret = 0; fret <= numberOfFrets; fret++) {
                let noteFret = tools.addElement('div');
                noteFret.classList.add('note-fret');
                string.appendChild(noteFret);
                
                let noteName = this.generateNoteNames((fret + instrumentTuningPresets[selectedInstrument][i]), accidentals);
                noteFret.setAttribute('data-note', noteName);
                
                // Add single fret marks
                if (i === 0 && singleFretMarkPositions.indexOf(fret) !== -1) {
                    noteFret.classList.add('single-fretmark');
                }

                // Add double fret marks
                if (i === 0 && doubleFretMarkPositions.indexOf(fret) !== -1) {
                    let doubleFretMark = tools.addElement('div');
                    doubleFretMark.classList.add('double-fretmark');
                    noteFret.appendChild(doubleFretMark);
                }

            }
        }
        allNotes = document.querySelectorAll('.note-fret');
    },
    generateNoteNames(noteIndex, accidentals) {
        noteIndex = noteIndex % 12;
        let noteName;
        if (accidentals === 'flats') {
            noteName = notesFlats[noteIndex];
        } else if (accidentals === 'sharps') {
            noteName = notesSharps[noteIndex];
        }
        return noteName;
    },
    setUpinstrumentSelector() {
        for(instrument in instrumentTuningPresets) {
            console.log(instrument);
            let instrumentOption = tools.addElement('option', instrument);
            instrumentSelector.appendChild(instrumentOption);
        }
    },

    setUpNoteNameSection() {
        noteNameSection.innerHTML= '';
      let noteNames;
      if (accidentals === 'flats') {
        noteNames = notesFlats;
      } else {
        noteNames = notesSharps;
      }
      noteNames.forEach((noteName) => {
        let noteNameElement = tools.addElement('span', noteName);
        noteNameSection.appendChild(noteNameElement);
      });
    },

    showNoteDot(event){
        // Check if show all notes is selected
        if (showAllNotes) {
            return;
        }
        if (event.target.classList.contains('note-fret')) {
            if (showMultipleNotes) {
                app.toggleMultipleNotes(event.target.dataset.note, 1);
            } else {
                event.target.style.setProperty('--noteDotOpacity', 1);
            }
        }
    },
    
    hideNoteDot(event){
        if (showAllNotes) {
            return;
        }
        if (showMultipleNotes) {
            app.toggleMultipleNotes(event.target.dataset.note, 0);  
        } else {
            event.target.style.setProperty('--noteDotOpacity', 0);
        }
    },
    setSelectedInstrument(event) {
        selectedInstrument = event.target.value;
        numberOfStrings = instrumentTuningPresets[selectedInstrument].length;
        app.setUpFretboard();
    },
    setAccidentals(event) {
        if(event.target.classList.contains('acc-select')) {
            accidentals = event.target.value;
            app.setUpFretboard();
            app.setUpNoteNameSection();
        } else {
            return;
        }
    },
    setNumberOfFrets() {
        numberOfFrets = numberOfFretsSelector.value;
        app.setUpFretboard();
    },
    setShowAllNotes() {
        showAllNotes = showAllNotesSelector.checked;
        if (showAllNotes) {
            root.style.setProperty('--noteDotOpacity', 1);
            app.setUpFretboard();
        } else {
            root.style.setProperty('--noteDotOpacity', 0);
            app.setUpFretboard();
        }
    },
    setUpEventListeners() {
        fretboard.addEventListener('mouseover', this.showNoteDot);
        fretboard.addEventListener('mouseout', this.hideNoteDot);
        instrumentSelector.addEventListener('change', this.setSelectedInstrument);
        accidentalSelector.addEventListener('click', this.setAccidentals);
        numberOfFretsSelector.addEventListener('change', this.setNumberOfFrets);
        showAllNotesSelector.addEventListener('change',this.setShowAllNotes);
        showMultipleNotesSelector.addEventListener('change', () => {
            showMultipleNotes = !showMultipleNotes;
        });
        noteNameSection.addEventListener('mouseover', (event) => {
            let noteToShow = event.target.innerText;
            app.toggleMultipleNotes(noteToShow, 1);
        });
        noteNameSection.addEventListener('mouseout', (event) => {
            if (!showAllNotes) {
                let noteToShow = event.target.innerText;
                app.toggleMultipleNotes(noteToShow, 0);
            } else {
                return;
            }
        });
    },
    toggleMultipleNotes(noteName, opacity) {
        for (let i = 0; i < allNotes.length; i++) {
            console.log(allNotes);    
            if (allNotes[i].dataset.note === noteName) {
                allNotes[i].style.setProperty('--noteDotOpacity', opacity);
            }
        }
    }
}

const tools = {
    addElement(element, content) {
        element = document.createElement(element);
        if (arguments.length > 1) {
            element.innerHTML = content;
        }
        return element;
    }
}

app.init();