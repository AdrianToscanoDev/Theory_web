// array of image paths
const images = [
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
];

// generate random image
function generateRandomImage() {
     
    const randomIndex = Math.floor(Math.random() * images.length); // Select a random index
    const randomImage = images[randomIndex]; // Get the random image from the array
    document.getElementById('randomImage').src = randomImage; // Update the image src 
    
}

// updates multiple choice answers
function generateMultipleChoice() {
    
    // 

    let choice1 = document.getElementById('choice1');
    choice1.textContent = '1';

    let choice2 = document.getElementById('choice2');
    choice2.textContent = '2';

    let choice3 = document.getElementById('choice3');
    choice3.textContent = '3';

    let choice4 = document.getElementById('choice4');
    choice4.textContent = '4';
}

function testLoad() {
    generateMultipleChoice();
}