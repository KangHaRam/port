import { getChord } from "@tonaljs/chord";
import { note, interval, Chord, ChordType, transpose } from "tonal";
import { Howler, howl } from 'howler';

const sound = new Howl ({
    src: ['assets/pianoSprite.mp3'],
    onload() {
        //console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror(e, msg) {
        console.log('Error', e, msg);
    }
});

//console.log(note('c'));
//const myInterval = interval('5P');
//console.log(myInterval);
//console.log(Chord.get('Cmaj7'));

const startNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const startNoteSelector = document.querySelector('#start-note');
const octaveSelector = document.querySelector('#octave');
const buttons = document.querySelector('.buttons');
const intervalsInChord = document.querySelector('.intervals-in-chord');
const notesInChord = document.querySelector('.notes-in-chord');

let selectedStartNote = 'C';
let selectedOctave = '0';
let selectedChord;

const app = {
    init() {
        this.setUpStartNotes();
        this.setUpOctaves();
        this.setUpButtons();
        this.setUpEventListners();
    },

    setUpStartNotes() {
        startNotes.forEach(noteName => {
            let noteNameOption = this.addElement('option', noteName);
            startNoteSelector.appendChild(noteNameOption);
        });
    }, 
    setUpOctaves() {
        for (let i = 0; i <= 7; i++) {
            let octaveNumber = this.addElement('option', i);
            octaveSelector.appendChild(octaveNumber);
        }
    },
    setUpButtons() {
        const chordNames = ChordType.all().map(entry => {
            return entry.aliases[0];
        });
        chordNames.forEach(chordName => {
            let chordButton = this.addElement('button', chordName)
            buttons.appendChild(chordButton);
        });
    },
    setUpEventListners() {
        startNoteSelector.addEventListener('change', () => {
            selectedStartNote = startNoteSelector.value;
            //console.log(selectedStartNote);
        });
        octaveSelector.addEventListener('change', () => {
            selectedOctave = octaveSelector.value;
            //console.log(selectedOctave);
        });
        buttons.addEventListener('click', (event) => {
            if (event.target.classList.contains('buttons')) {
                return;
            }
            selectedChord = event.target.innerText;
            this.displayAndPlayChord(selectedChord);
        });
    },

    displayAndPlayChord(selectedChord) {
        let chordIntervals = getChord(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(' - ');
        const startNotewithOctave = selectedStartNote + selectedOctave;
        
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNotewithOctave, val);
        });

        notesInChord.innerText = chordNotes.join(' - ');
        soundEngine.play(chordNotes);
    },

    addElement(elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    } 
}

const soundEngine = {
    init() {
        const lengthOfNote = 1000.2;
        let timeIndex = 0;
        for (let i = 12; i <= 120; i++) {
            sound['_sprite'][i] = [timeIndex, lengthOfNote];
            timeIndex += lengthOfNote;
        }
        //sound.play('80');
        //console.log('It works');
        //sound.play();
    },
    play(soundSequence){
        const soundSequenceMidiNumber = soundSequence.map(noteName => {
            return note(noteName).midi;
        });
        soundSequenceMidiNumber.forEach(noteMidiNumber => {
            sound.volume(0.75);
            //console.log(noteMidiNumber);
            sound.play(noteMidiNumber.toString());
        });
        //console.log(soundSequence);
    }
}

app.init();

