// constants 
const MULTIPLE_CHOICE_MAX = 4;

// runs when the practice chord page is reached. 
document.addEventListener("DOMContentLoaded", function() {
    loadNewQuestion();
});

// instance of Question. As the functions run, this class gets updated with the information the functions generate. for example, question will hold the correct answer, image used for the app, multiple choice questions etc. 
const question = new Question();

// generates the new question
function loadNewQuestion() {

    // generate random chord image and get the correct answer
    generateRandomChordImage();

    // generate multiple choice answers
    generateMultipleChoice(question.correctAnswerIndex);
}

// generates random chord image and displays it on the page
function generateRandomChordImage() {
    
    const randomIndex = Math.floor(Math.random() * chord_filepaths_root.length); // Select a random index
    const randomChord = chord_filepaths_root[randomIndex]; // Get the random image from the array
    document.getElementById('pianoImage').src = randomChord; // Update the image src 
    
    // save path and correct answer in the question object
    question.setImagePath(randomChord); 
    question.setCorrectAnswerIndex(randomIndex);
    question.setCorrectAnswerChordName();
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

        if (multipleChoices.length === MULTIPLE_CHOICE_MAX)
            break;
    }

    // shuffle the array (fisher-yates shuffle algorithm. web reference)
    for (let i = multipleChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [multipleChoices[i], multipleChoices[j]] = [multipleChoices[j], multipleChoices[i]];
    }

    // at this point we have the indexes shuffled in an array. 
    // now we access the file paths to get the names of the chord
    let names = []; 
    for (let i = 0; i < MULTIPLE_CHOICE_MAX; i++) {
        
        // gets the name of the end of the filepath. eg, uses "a_minor.png" to get "A Minor"
        let key = chord_filepaths_root[multipleChoices[i]].split("/").pop();
        let chordName = chords.get(key);
        names.push(chordName);
    }

    // then assign the answers in the order of the shuffled array
    let choice1 = document.getElementById('choice1');
    choice1.textContent = names[0];
    question.setMultipleChoice1(names[0]);

    let choice2 = document.getElementById('choice2');
    choice2.textContent = names[1];
    question.setMultipleChoice2(names[1]);

    let choice3 = document.getElementById('choice3');
    choice3.textContent = names[2];
    question.setMultipleChoice3(names[2]);

    let choice4 = document.getElementById('choice4');
    choice4.textContent = names[3];
    question.setMultipleChoice4(names[3]);

    // set the correct answer within the question object
    question.setRightAnswer()
}

// when a button is clicked, checks to see if the correct answer was chosen
function isCorrect(buttonID) {
    const userChoice = document.getElementById(buttonID);

    if (buttonID === question.rightAnswer){
        correctAnswer();
    }

    // if button hasnt been chosen, disable it if wrong answer
    else if (!userChoice.disabled) {
        userChoice.disabled = true;
    }
}

// do some sort of animation or something when answer is correct
function correctAnswer() {
    // for now, turn the button green,
    // display "correct" message 
    // wait a few seconds, 
    // run loadNewQuestion()
    alert("correct! :)");
    resetButtons();
    loadNewQuestion();
}

function resetButtons() {
    document.getElementById("choice1").disabled = false;
    document.getElementById("choice2").disabled = false;
    document.getElementById("choice3").disabled = false;
    document.getElementById("choice4").disabled = false;
}