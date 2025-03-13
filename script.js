// holds file paths for piano images. 
const chord_filepaths_root = [
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
];

// generates random chord image
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

    // at this point we have the indexes. access the chord file paths to get the names of the chord

    // then assign the answers in the order of the shuffled array
    let choice1 = document.getElementById('choice1');
    choice1.textContent = multipleChoices[0];

    let choice2 = document.getElementById('choice2');
    choice2.textContent = multipleChoices[1];

    let choice3 = document.getElementById('choice3');
    choice3.textContent = multipleChoices[2];

    let choice4 = document.getElementById('choice4');
    choice4.textContent = multipleChoices[3];
}

// generates the new question
function loadNewQuestion() {

    // generate random chord image and get the correct answer
    const correctAnswer = generateRandomChordImage();

    // generate multiple choice answers
    generateMultipleChoice(correctAnswer);
}