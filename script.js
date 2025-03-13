// holds file paths for piano images. 
// THIS ARRAY SHOULD EVENTUALLY BE MOVED TO ITS OWN FILE. as of right now, code breaks when i move it. the filepath isnt found 
const chord_filepaths_root = [
    // major chords
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
    'images/chords/root_position/major/c_sharp_major.png',
    'images/chords/root_position/major/d_major.png',
    'images/chords/root_position/major/d_sharp_major.png',
    'images/chords/root_position/major/e_major.png',
    'images/chords/root_position/major/f_major.png',
    'images/chords/root_position/major/f_sharp_major.png',
    'images/chords/root_position/major/g_major.png',
    'images/chords/root_position/major/g_sharp_major.png',

    // minor chords
    'images/chords/root_position/minor/a_minor.png',
    'images/chords/root_position/minor/a_sharp_minor.png',
    'images/chords/root_position/minor/b_minor.png',
    'images/chords/root_position/minor/c_minor.png',
    'images/chords/root_position/minor/c_sharp_minor.png',
    'images/chords/root_position/minor/d_minor.png',
    'images/chords/root_position/minor/d_sharp_minor.png',
    'images/chords/root_position/minor/e_minor.png',
    'images/chords/root_position/minor/f_minor.png',
    'images/chords/root_position/minor/f_sharp_minor.png',
    'images/chords/root_position/minor/g_minor.png',
    'images/chords/root_position/minor/g_sharp_minor.png',
];

// THIS IS ALSO BEING MOVED EVENTUALLY. 
// THIS IS A MAP SO THAT I CAN USE THE FILENAME TO SEARCH FOR THE CHORDS NAME
let chords = new Map();
// root position major
chords.set("a_major.png",           "A Major");
chords.set("a_sharp_major.png",     "A# Major");
chords.set("b_major.png",           "B Major");
chords.set("c_major.png",           "C Major");
chords.set("c_sharp_major.png",     "C# Major");
chords.set("d_major.png",           "D Major");
chords.set("d_sharp_major.png",     "D# Major");
chords.set("e_major.png",           "E Major");
chords.set("f_major.png",           "F Major");
chords.set("f_sharp_major.png",     "F# Major");
chords.set("g_major.png",           "G Major");
chords.set("g_sharp_major.png",     "G# Major");
// root position minor
chords.set("a_minor.png",           "A Minor");
chords.set("a_sharp_minor.png",     "A# Minor");
chords.set("b_minor.png",           "B Minor");
chords.set("c_minor.png",           "C Minor");
chords.set("c_sharp_minor.png",     "C# Minor");
chords.set("d_minor.png",           "D Minor");
chords.set("d_sharp_minor.png",     "D# Minor");
chords.set("e_minor.png",           "E Minor");
chords.set("f_minor.png",           "F Minor");
chords.set("f_sharp_minor.png",     "F# Minor");
chords.set("g_minor.png",           "G Minor");
chords.set("g_sharp_minor.png",     "G# Minor");


/*EVERYTHING ABOVE THIS SHOULD BE MOVED TO A DIFFERENT FILE ********************************************************************************************************* */

// generates random chord image and displays it on the page
function generateRandomChordImage() {
    
    const randomIndex = Math.floor(Math.random() * chord_filepaths_root.length); // Select a random index
    const randomChord = chord_filepaths_root[randomIndex]; // Get the random image from the array
    document.getElementById('pianoImage').src = randomChord; // Update the image src 
    
    let correctAnswerIndex = randomIndex;
    return correctAnswerIndex;
}

// updates multiple choice answers
function generateMultipleChoice(correctAnswerIndex) {

    // this holds the indexes for the chords we will choose as the 4 answers
    let multipleChoices = [];
    multipleChoices.push(correctAnswerIndex);

    // access the chord array and choose 3 different chords
    while (true) {

        // generate a random index.
        let randomIndex = Math.floor(Math.random() * chord_filepaths_root.length);

        // add the index to multipleChoices[] , if its not in there already
        if (!multipleChoices.includes(randomIndex))
            multipleChoices.push(randomIndex);

        if (multipleChoices.length === 4)
            break;
    }

    // shuffle the array (fisher-yates shuffle algorithm. web)
    for (let i = multipleChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [multipleChoices[i], multipleChoices[j]] = [multipleChoices[j], multipleChoices[i]];
    }

    // at this point we have the indexes. 
    // now we access the file paths to get the names of the chord
    let names = []; 
    for (let i = 0; i < 4; i++) {
        
        // gets the name of the end of the filepath. eg, "a_minor.png". uses that to get "A Minor"
        let key = chord_filepaths_root[multipleChoices[i]].split("/").pop();
        let chordName = chords.get(key);
        names.push(chordName);
    }

    // then assign the answers in the order of the shuffled array
    let choice1 = document.getElementById('choice1');
    choice1.textContent = names[0];

    let choice2 = document.getElementById('choice2');
    choice2.textContent = names[1];

    let choice3 = document.getElementById('choice3');
    choice3.textContent = names[2];

    let choice4 = document.getElementById('choice4');
    choice4.textContent = names[3];
}

// generates the new question
function loadNewQuestion() {

    // generate random chord image and get the correct answer
    const correctAnswer = generateRandomChordImage();

    // generate multiple choice answers
    generateMultipleChoice(correctAnswer);
}