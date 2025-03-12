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
    
    let correctAnswer = randomChord.split('/').pop();
    return correctAnswer;
}

// updates multiple choice answers
function generateMultipleChoice(correctAnswer) {
    
    // get 3 more random chord names
    const randomIndex = Math.floor(Math.random() * chord_filepaths_root.length);


    // randomly add them to the 4 spots

    let choice1 = document.getElementById('choice1');
    choice1.textContent = '1';

    let choice2 = document.getElementById('choice2');
    choice2.textContent = '2';

    let choice3 = document.getElementById('choice3');
    choice3.textContent = '3';

    let choice4 = document.getElementById('choice4');
    choice4.textContent = '4';
}

// generates the new question
function loadNewQuestion() {

    // generate random chord image and get the correct answer
    const correctAnswer = generateRandomChordImage();

    // generate multiple choice answers
    generateMultipleChoice(correctAnswer);
}